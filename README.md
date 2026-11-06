# Caminhos de Alagoas — Trilha do Imperador

Aplicação web estática com mapa interativo da Trilha do Imperador, de Piaçabuçu a Água Branca.

## Recursos

- mapa interativo com Leaflet e dados OpenStreetMap incluídos no projeto;
- 12 localidades apresentadas em sequência (11 municípios e o distrito de Entremontes);
- marcadores numerados;
- seleção manual de cada cidade; as setas percorrem o traçado até a cidade vizinha em 2 segundos, nos dois sentidos, mantendo o card aberto;
- modo automático "Percorrer rota", com veículo seguindo o traçado selecionado a 3 km/s na simulação e pausa de 1 segundo em cada cidade (no GPX, no ponto do trajeto mais próximo da cidade);
- destaque progressivo do percurso;
- seleção do traçado esquemático, da rota de moto em asfalto ou da rota mista para bike fornecidas em GPX;
- layout responsivo para desktop e celular;
- instalação como webapp e uso offline do mapa de Alagoas, das rotas GPX e dos pontos;
- compatível com GitHub Pages;
- sem backend e sem etapa de build.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos e diretórios do projeto, incluindo `alagoas.pmtiles`, `manifest.webmanifest`, `sw.js`, `icons/` e `vendor/`.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`.
6. Salve.

Após a publicação, o GitHub exibirá a URL do site.

## Instalar e usar offline

Abra a página publicada no GitHub Pages por HTTPS. No navegador, use a opção **Instalar app** ou **Adicionar à tela inicial**. Na primeira abertura com internet, aguarde a instalação do mapa offline (aproximadamente 32 MB) terminar antes de desconectar. O navegador pode remover dados offline se faltar espaço no aparelho; nesse caso, abra o site novamente com internet.

O mapa vetorial incluído cobre o estado de Alagoas até o zoom 15. O aplicativo, os pontos e os dois arquivos GPX funcionam sem internet depois da instalação. Links para Google Maps, Waze, OpenStreetMap e fontes externas continuam dependendo desses serviços e da conexão.

O mapa foi recortado do [Protomaps Basemaps de 25/09/2026](https://maps.protomaps.com/builds/), usando o [limite estadual de Alagoas do IBGE de 2025](https://geoftp.ibge.gov.br/organizacao_do_territorio/malhas_territoriais/malhas_municipais/municipio_2025/UFs/AL/). Os dados cartográficos são derivados do OpenStreetMap e mantêm a atribuição visível no mapa. O servidor público `tile.openstreetmap.org` não é usado para o pacote offline.

## Observação sobre a rota

A visão geral conecta as sedes municipais para representar visualmente a sequência da Trilha do Imperador. Essa linha é esquemática e não deve ser utilizada como track GPS ou instrução de navegação. As opções "Moto · Asfalto" e "Bike · Misto" usam, respectivamente, os arquivos `rota-moto-asfalto.gpx` e `rota-bike-misto.gpx` fornecidos pelo autor do projeto; os marcadores das cidades continuam nas coordenadas de referência originais.

A referência pública consultada no desenvolvimento descreve um track Piaçabuçu → Água Branca com aproximadamente 349,85 km.

## Cidades representadas

1. Piaçabuçu
2. Penedo
3. Porto Real do Colégio
4. São Brás
5. Traipu
6. Belo Monte
7. Pão de Açúcar
8. Entremontes — Piranhas
9. Piranhas
10. Olho d’Água do Casado
11. Delmiro Gouveia
12. Água Branca


## Pontos de placa já verificados

| Cidade | Latitude | Longitude | Elevação |
|---|---:|---:|---:|
| Piaçabuçu | -10.407753 | -36.435382 | 0 m |
| Penedo | -10.290822 | -36.586380 | 7 m |
| Porto Real do Colégio | -10.188428 | -36.839223 | 6 m |
| Traipu | -9.971902 | -37.001545 | 8 m |
| Pão de Açúcar | -9.750112 | -37.435620 | 11 m |


## Placas documentadas e referências de busca

Os dados abaixo foram incorporados da pesquisa fornecida pelo usuário. O anexo não inclui os endereços completos das fontes históricas citadas; esses registros não foram verificados independentemente e não confirmam a permanência atual das placas.

| Localidade | Informação incluída | Referência do marcador |
|---|---|---|
| Entremontes — Piranhas | Relato de 2017 de placa em fachada junto a uma mercearia, perto da praça e da Igreja de Nossa Senhora da Conceição; associação ao Sobrado de Anacleto Brandão ainda incerta | Povoado, aproximadamente -9.66992, -37.65855, conforme [Mapcarta / OpenStreetMap](https://mapcarta.com/pt/19147326); não representa a placa |
| Piranhas | Registro de instalação de placa na expedição de 2009; investigar o Palácio Dom Pedro II e entorno | Centro Histórico, -9.625035, -37.754813; não representa a placa |
| Delmiro Gouveia | Fotografias de 2010 e indicação de trevo próximo ao açude e ao Museu Regional, pelo acesso da Pedra Velha | Sede municipal mantida; coordenadas do trevo e da placa não confirmadas |
| Belo Monte | Igreja de Nossa Senhora dos Prazeres, em Barra do Ipanema; marco histórico com placa não confirmada | Sede municipal mantida; não representa a igreja |

Entremontes usa uma foto identificada como referência da sede de Piranhas e as indicações de hospedagem e alimentação dessa sede. Nenhum desses quatro registros foi classificado como placa com coordenada verificada. São Brás, Olho d’Água do Casado e Água Branca permanecem sem localização comprovada de placa.

## Tecnologias

- HTML
- CSS
- JavaScript
- Leaflet 1.9.4 e protomaps-leaflet 5.1.0, distribuídos localmente;
- Protomaps PMTiles com dados OpenStreetMap;
- Web App Manifest e Service Worker.

## Licença / dados cartográficos

As fotos das cidades são armazenadas em `assets/cities/` e ficam disponíveis offline. Cada card mostra autoria e licença com links para o Wikimedia Commons e os termos de uso. A relação completa de fontes e adaptações está em [Créditos das fotografias](assets/cities/CREDITS.md).

Os dados de mapa derivam do OpenStreetMap e devem manter a atribuição visível. As licenças das bibliotecas locais estão em `vendor/leaflet/LICENSE` e `vendor/protomaps/LICENSE`.
