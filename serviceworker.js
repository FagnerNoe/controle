const loto = "controle-equipamentos-v1";
const assets = [
  "../",
  "index.html",
  "pages/cadastro.html",
  "assets/css/login.css/",
  "assets/css/cadastro.css/",
  "assets/icones/logo.png/",
  "assets/js/login.js",
  "assets/js/sheet.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(loto).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
