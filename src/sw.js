importScripts("/uv/uv.bundle.js");
importScripts("/uv.config.js");
importScripts("/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) =>
  event.respondWith(
    (async () => {
      if (await sw.route(event)) {
        return await sw.fetch(event);
      }
      return await fetch(event.request);
    })()
  )
);

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
