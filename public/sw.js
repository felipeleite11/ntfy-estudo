self.addEventListener('notificationclick', function (event) {
    event.notification.close()

    const url = event.notification.data?.url || '/'

    event.waitUntil(
        // Se a intenção for apenas abrir uma URL fixa, usar apenas a linha abaixo
        // clients.openWindow(url)

        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(windowClients => {
            // Tenta encontrar uma aba que já esteja na URL desejada
            for (let i = 0; i < windowClients.length; i++) {
                const client = windowClients[i]
                // Verifica se a URL coincide e se o navegador suporta focus()
                if (client.url === url && 'focus' in client) {
                    return client.focus()
                }
            }
            
            // Se não encontrou nenhuma aba aberta com essa URL, abre uma nova
            if (clients.openWindow) {
                return clients.openWindow(url)
            }
        })
    )
})