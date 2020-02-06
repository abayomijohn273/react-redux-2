
self.addEventListener("install", event => {
  console.log("SW install")
})

self.addEventListener("fetch", event => {
  console.log("fetch SW")
})