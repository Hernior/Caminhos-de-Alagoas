const CACHE_NAME = "caminhos-alagoas-v8";
const APP_FILES = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./assets/cities/piacabucu.jpg",
  "./assets/cities/penedo.jpg",
  "./assets/cities/porto-real-do-colegio.jpg",
  "./assets/cities/sao-bras.jpg",
  "./assets/cities/traipu.jpg",
  "./assets/cities/piranhas.jpg",
  "./assets/cities/olho-dagua-do-casado.jpg",
  "./assets/cities/delmiro-gouveia.jpg",
  "./assets/cities/agua-branca.jpg",
  "./assets/cities/belo-monte.jpg",
  "./assets/cities/pao-de-acucar.jpg",

  "./manifest.webmanifest",
  "./rota-moto-asfalto.gpx",
  "./rota-bike-misto.gpx",
  "./alagoas.pmtiles",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
  "./vendor/leaflet/leaflet.css",
  "./vendor/leaflet/leaflet.js",
  "./vendor/leaflet/images/layers.png",
  "./vendor/leaflet/images/layers-2x.png",
  "./vendor/leaflet/images/marker-icon.png",
  "./vendor/leaflet/images/marker-icon-2x.png",
  "./vendor/leaflet/images/marker-shadow.png",
  "./vendor/protomaps/protomaps-leaflet.js"
];

const mapUrl = new URL("./alagoas.pmtiles", self.registration.scope).href;
let mapBlobPromise;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((name) => name.startsWith("caminhos-alagoas-") && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      ))
      .then(() => self.clients.claim())
  );
});

async function cachedMapRange(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(mapUrl);
  if (!cached) return fetch(request);

  const range = request.headers.get("Range");
  if (!range) return cached;

  if (!mapBlobPromise) mapBlobPromise = cached.blob();
  const blob = await mapBlobPromise;
  const match = /^bytes=(\d+)-(\d*)$/.exec(range);
  if (!match) return new Response(null, { status: 416 });

  const start = Number(match[1]);
  const end = match[2] ? Math.min(Number(match[2]), blob.size - 1) : blob.size - 1;
  if (start >= blob.size || start > end) {
    return new Response(null, {
      status: 416,
      headers: { "Content-Range": `bytes */${blob.size}` }
    });
  }

  return new Response(blob.slice(start, end + 1), {
    status: 206,
    headers: {
      "Accept-Ranges": "bytes",
      "Content-Range": `bytes ${start}-${end}/${blob.size}`,
      "Content-Length": String(end - start + 1),
      "Content-Type": "application/octet-stream"
    }
  });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  if (url.href === mapUrl) {
    event.respondWith(cachedMapRange(request));
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = request.mode === "navigate"
      ? await cache.match(new URL("./index.html", self.registration.scope).href)
      : await cache.match(request);
    return cached || fetch(request);
  })());
});
