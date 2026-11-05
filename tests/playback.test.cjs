const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8");

test("uses the vehicle icon corresponding to the selected route", () => {
  const context = { L: { divIcon: (options) => options } };
  vm.createContext(context);
  vm.runInContext(source.slice(source.indexOf("  function vehicleIcon("), source.indexOf("  function setRouteMode(")), context);
  assert.equal(context.vehicleIcon("schematic").html, "🚗");
  assert.equal(context.vehicleIcon("moto-asfalto").html, "🏍️");
  assert.equal(context.vehicleIcon("bike-misto").html, "🚲");
});

function playback(points, milestones) {
  let frame;
  const state = { arrivals: [], position: null, completed: [], fitted: false };
  const context = {
    activeRoutePoints: points, activeMilestones: milestones,
    cities: milestones.map(() => ({})), activeIndex: 0,
    playbackSpeed: 3000, cityPauseMs: 1000, playFrame: null, playing: false,
    el: {}, document: { hidden: false },
    window: {
      requestAnimationFrame(callback) { frame = callback; return 1; },
      cancelAnimationFrame() { frame = null; }
    },
    vehicle: {
      setLatLng(position) { state.position = position; return this; },
      addTo() { return this; }
    },
    map: {
      distance(a, b) { return Math.hypot(b[0] - a[0], b[1] - a[1]); },
      closePopup() {}, stop() {}, panTo() {}
    },
    completedRoute: { setLatLngs(points) { state.completed = points; } },
    selectCity(index) { context.activeIndex = index; state.arrivals.push(index); },
    setMobileSheet() {}, fitWholeRoute() { state.fitted = true; }
  };
  vm.createContext(context);
  vm.runInContext(
    source.slice(source.indexOf("  function stopPlaying()"), source.indexOf("  function showSourceLinks")) +
    source.slice(source.indexOf("  function startPlaying()"), source.indexOf("  cities.forEach((city, index) => {")),
    context
  );
  context.startPlaying();
  return {
    state, context,
    tick(time) { const callback = frame; frame = null; callback?.(time); }
  };
}

test("follows bends at constant speed and pauses at each city", () => {
  const run = playback([[0, 0], [3000, 0], [3000, 6000]], [0, 1, 2]);
  run.tick(0);
  run.tick(1000);
  assert.equal(run.state.position[0], 0);
  run.tick(1500);
  assert.equal(run.state.position[0], 1500);
  assert.equal(run.state.position[1], 0);
  run.tick(2000);
  assert.deepEqual(run.state.arrivals, [0, 1]);
  run.tick(3000);
  assert.equal(run.state.position[1], 0);
  run.tick(4000);
  assert.equal(run.state.position[0], 3000);
  assert.equal(run.state.position[1], 3000);
  run.tick(5000);
  assert.deepEqual(run.state.arrivals, [0, 1, 2]);
  run.tick(6001);
  assert.equal(run.context.playing, false);
  assert.equal(run.state.fitted, true);
});

test("finishes GPX after the last city and tolerates duplicate points and stops", () => {
  const run = playback([[0, 0], [0, 0], [3000, 0], [6000, 0]], [0, 0, 2]);
  run.tick(0);
  run.tick(4000);
  assert.deepEqual(run.state.arrivals, [0, 1, 2]);
  assert.equal(run.context.playing, true);
  assert.equal(run.state.position[0], 3000);
  run.tick(5001);
  assert.equal(run.context.playing, false);
  assert.equal(run.state.position[0], 6000);
});

test("stop cancels playback; restarting at the last city returns to the start", () => {
  const run = playback([[0, 0], [3000, 0]], [0, 1]);
  run.context.stopPlaying();
  run.tick(5000);
  assert.equal(run.state.position[0], 0);
  run.context.activeIndex = 1;
  run.context.startPlaying();
  assert.equal(run.context.activeIndex, 0);
});

test("hidden tabs do not skip the route when returning", () => {
  const run = playback([[0, 0], [3000, 0]], [0, 1]);
  run.tick(0);
  run.context.document.hidden = true;
  run.tick(60000);
  run.context.document.hidden = false;
  run.tick(120000);
  assert.equal(run.state.position[0], 0);
  run.tick(121500);
  assert.equal(run.state.position[0], 1500);
});
