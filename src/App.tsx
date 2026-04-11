import { useEffect, useState } from 'react'
import './App.css'

const topic = 'teste'
const ntfyUrl = `https://outros-ntfy.y0nyoi.easypanel.host/${topic}/sse`

interface NtfyContent {
	title: string
	content: string
}

interface NtfyMessage {
	event: string
	message: string
}

function App() {
	const [notifications, setNotifications] = useState<NtfyContent[]>([])

	async function notify(content: NtfyContent) {
		if (!("Notification" in window)) {
			console.error("Este navegador não suporta notificações desktop.")
			return
		}

		if (Notification.permission !== "granted" && Notification.permission !== "denied") {
			const permission = await Notification.requestPermission()
			if (permission !== "granted") return
		}

		if (Notification.permission === "granted") {
			const options = {
				body: content.content,
				icon: "favicon.svg",
				badge: "favicon.svg",
				// tag: "test-notification",
				vibrate: [200, 100, 200]
			}

			const n = new Notification(content.title, options)

			n.onclick = () => {
				window.focus() // Traz a aba do site para frente
				console.log("Usuário clicou na notificação")
			}
		}
	}

	useEffect(() => {
		const eventSource = new EventSource(ntfyUrl)

		eventSource.onmessage = (event: { data: string }) => {
			const data = JSON.parse(event.data) as NtfyMessage

			if (data.event === 'message') {
				const content = JSON.parse(data.message) as NtfyContent

				console.log('Nova notificação recebida:', content.title)

				notify(content)

				setNotifications(old => [...old, content])
			}
		}

		eventSource.onerror = (error) => {
			console.error('Erro na conexão com ntfy:', error)
		}
	}, [])

	return (
		<section>
			<h1>Ntfy estudo</h1>

			<ul>
				{notifications.map((notification, idx) => (
					<li key={idx}>
						{notification.title}
					</li>
				))}
			</ul>
		</section>
	)
}

export default App
