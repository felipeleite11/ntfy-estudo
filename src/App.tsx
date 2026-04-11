import { useEffect, useState } from 'react'
import './App.css'

const defaultNtfyUrl = 'https://outros-ntfy.y0nyoi.easypanel.host' // `https://outros-ntfy.y0nyoi.easypanel.host/${topic}/sse`
const defaultTopic = 'teste'

interface NtfyContent {
	title: string
	content: string
}

interface NtfyMessage {
	event: string
	message: string
}

function App() {
	const [ntfyServerUrl, setNtfyServerUrl] = useState(defaultNtfyUrl)
	const [ntfyTopic, setNtfyTopic] = useState(defaultTopic)
	const [notifications, setNotifications] = useState<NtfyContent[]>([
		{
			content: 'tafad',
			title: 'Teste'
		},
		{
			content: 'tafad',
			title: 'Teste 2'
		},
		{
			content: 'tafad',
			title: 'Teste 3'
		}
	])

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
			const options: NotificationOptions = {
				body: content.content,
				icon: "favicon.svg",
				badge: "favicon.svg",
				// tag: "test-notification",
				// vibrate: [200, 100, 200],
				// @ts-ignore
				image: 'https://ddymbfzlhjerietmuuzg.supabase.co/storage/v1/object/public/ifolhear/felipe-profile.png'
			}

			const n = new Notification(content.title, options)

			n.onclick = () => {
				window.focus() // Traz a aba do site para frente
				console.log("Usuário clicou na notificação")
			}
		}
	}

	useEffect(() => {
		const ntfyUrl = `${ntfyServerUrl}/${ntfyTopic}/sse`
		const eventSource = new EventSource(ntfyUrl)

		eventSource.onmessage = (event: { data: string }) => {
			const data = JSON.parse(event.data) as NtfyMessage

			if (data.event === 'message') {
				const content = JSON.parse(data.message) as NtfyContent

				notify(content)

				setNotifications(old => [...old, content])
			}
		}

		eventSource.onerror = (error) => {
			console.error('Erro na conexão com ntfy:', error)
		}
	}, [])

	return (
		<section className="p-12">
			<h1>Ntfy estudo</h1>

			<div className='flex flex-col gap-4'>
				<div className="flex flex-col items-start">
					<label htmlFor="server" className='text-xs'>Server URL</label>
					<input type="text" id="server" value={ntfyServerUrl} onChange={e => { setNtfyServerUrl(e.target.value) }} className="border border-gray-500 rounded-md w-full py-1 px-2" />
				</div>

				<div className="flex flex-col items-start">
					<label htmlFor="topic" className='text-xs'>Topic</label>
					<input type="text" id="topic" value={ntfyTopic} onChange={e => { setNtfyTopic(e.target.value) }} className="border border-gray-500 rounded-md w-full py-1 px-2" />
				</div>
			</div>

			<div className="flex flex-col mt-8 gap-3 items-start">
				<span className="text-lg font-bold">Notificações</span>

				<ul>
					{notifications.map((notification, idx) => (
						<li key={idx} className="text-left leading-8 text-sm flex gap-4">
							<span className="text-gray-200 font-semibold">{notification.title}</span>
							<span className="opacity-70">{notification.content}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default App
