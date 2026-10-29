/* =========================================================
   Pré-Estágio Seguro — Service Worker
   Estratégia:
   1. install  → baixa e guarda TODOS os arquivos do app (pré-cache)
   2. activate → apaga caches de versões antigas
   3. fetch    → responde do cache primeiro (funciona offline);
                 o navegador checa o sw.js a cada visita e baixa
                 a versão nova quando CACHE_VERSION muda
   IMPORTANTE: ao mudar qualquer conteúdo, aumente CACHE_VERSION.
   ========================================================= */

const CACHE_VERSION = 'pes-v1.1.0';

const PRECACHE = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/data.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(PRECACHE))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// O app pede para ativar a versão nova quando o aluno toca em "Atualizar"
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return; // só arquivos do próprio app

  // Navegação (abrir o app): sempre devolve o index.html do cache
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then((cached) => cached || fetch(request))
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Demais arquivos: cache primeiro; se não estiver no cache, busca na rede e guarda.
  // As atualizações chegam juntas quando CACHE_VERSION muda, evitando misturar versões.
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
      }
      return res;
    }))
  );
});
