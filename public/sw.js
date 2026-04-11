self.addEventListener('install', (event) => {
    console.log('⏳ Service Worker: Instalando...')
})

self.addEventListener('activate', (event) => {
    console.log('✅ Service Worker: Ativo e pronto para controlar a página!')
})

self.addEventListener('notificationclick', function (event) {
    event.notification.close()

    event.waitUntil(
        clients.openWindow('/')
    )
})