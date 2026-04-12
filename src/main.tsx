import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = { /* Suas credenciais */ };
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// async function requestPermission() {
// 	console.log('Solicitando permissão...')

// 	const permission = await Notification.requestPermission()

// 	if (permission === 'granted') {
// 		try {
// 			const token = await getToken(messaging, {
// 				vapidKey: 'BEml2nhv77Jj5H2M5toEDd-4mJ_VlMhgj5_n5RwDdlJ8t8XaHPJ2I-My3oZBQEfszAtV9Pv9n5aG-dagMpRys_o'
// 			})

// 			if (token) {
// 				console.log("Token gerado com sucesso:", token)
// 				// Aqui você enviaria o token para o seu servidor/banco de dados
// 			} else {
// 				console.log("Nenhum token disponível. Verifique as configurações.")
// 			}
// 		} catch (error) {
// 			console.error("Erro ao obter token:", error)
// 		}
// 	} else {
// 		console.warn("Permissão de notificação negada pelo usuário.")
// 	}
// }

// // A CHAMADA (Exemplo: ao carregar a página, mas prefira usar um botão)
// window.addEventListener('load', () => {
// 	requestPermission()
// })

// // Ouvir mensagens em primeiro plano
// onMessage(messaging, (payload) => {
// 	console.log('Mensagem recebida:', payload)
// })

createRoot(document.getElementById('root')!).render(<App />)
