import { useEffect } from 'react'
import './App.css'

const topic = 'Teste'
const ntfyUrl = `https://outros-ntfy.y0nyoi.easypanel.host/${topic}/sse`

interface NtfyMessage {
	event: string
	title: string
	message: string
}

function App() {
	function exibirNotificacaoNaTela(data: NtfyMessage) {
		console.log('NOTIFICAÇÃO', data)

		// if (Notification.permission === "granted") {
		// 	new Notification(data.title || "Nova Mensagem", {
		// 		body: data.message,
		// 		icon: 'https://ntfy.sh/static/img/ntfy.png'
		// 	});
		// } else if (Notification.permission !== "denied") {
		// 	Notification.requestPermission();
		// }
	}

	useEffect(() => {
		const eventSource = new EventSource(ntfyUrl)

		eventSource.onmessage = (event: { data: string }) => {
			const data = JSON.parse(event.data) as NtfyMessage

			if (data.event === 'message') {
				console.log('Nova notificação recebida:', data.message);
				exibirNotificacaoNaTela(data)
			}
		};

		eventSource.onerror = (error) => {
			console.error('Erro na conexão com ntfy:', error);
		};
	}, [])

	return (
		<section>
			<div>
				<h1>Get started</h1>
			</div>


		</section>
	)
}

export default App
