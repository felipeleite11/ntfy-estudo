self.addEventListener('notificationclick', function (event) {
    event.notification.close()

    const url = event.notification.data.url || '/'

    event.waitUntil(
        clients.openWindow(url)
    )
})