import { useEffect } from 'react'
import './App.css'

const topic = 'teste'
const ntfyUrl = `https://outros-ntfy.y0nyoi.easypanel.host/${topic}/sse`

// const publishURL = `https://ntfy.sh/example`;
// const subscribeURL = `https://ntfy.sh/example/sse`;
// const events = document.getElementById('events');
// const eventSource = new EventSource(subscribeURL);

interface NtfyMessage {
	event: string
	title: string
	message: string
}

function App() {
	useEffect(() => {
		const eventSource = new EventSource(ntfyUrl)

		eventSource.onmessage = (event: { data: string }) => {
			const data = JSON.parse(event.data) as NtfyMessage

			if (data.event === 'message') {
				console.log('Nova notificação recebida:', data.message)
			}
		}

		eventSource.onerror = (error) => {
			console.error('Erro na conexão com ntfy:', error)
		}

		// eventSource.onerror = (e) => {
		// 	let event = document.createElement('div');
		// 	event.innerHTML = `EventSource error: Failed to connect to ${subscribeURL}`;
		// 	events.appendChild(event);
		// };
		// eventSource.onmessage = (e) => {
		// 	let event = document.createElement('div');
		// 	event.innerHTML = e.data;
		// 	events.appendChild(event);
		// };
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
