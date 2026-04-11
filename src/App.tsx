import { useEffect, useState } from 'react'
import './App.css'

const topic = 'teste'
const ntfyUrl = `https://outros-ntfy.y0nyoi.easypanel.host/${topic}/sse`

interface NtfyMessage {
	event: string
	title: string
	message: string
}

function App() {
	const [notifications, setNotifications] = useState<NtfyMessage[]>([])

	useEffect(() => {
		const eventSource = new EventSource(ntfyUrl)

		eventSource.onmessage = (event: { data: string }) => {
			const data = JSON.parse(event.data) as NtfyMessage

			if (data.event === 'message') {
				console.log('Nova notificação recebida:', data.message)

				setNotifications(old => [...old, data])
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
