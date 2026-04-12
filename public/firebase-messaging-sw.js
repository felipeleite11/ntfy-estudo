importScripts('https://www.gstatic.com/firebasejs/10.x.x/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.x.x/firebase-messaging-compat.js')

firebase.initializeApp({
	apiKey: "AIzaSyDpElzO9bFZy8bmhu3LEz7ZmIcY7YgEzLE",
	authDomain: "notification-test-dff63.firebaseapp.com",
	projectId: "notification-test-dff63",
	storageBucket: "notification-test-dff63.firebasestorage.app",
	messagingSenderId: "24370149928",
	appId: "1:24370149928:web:f34e195e2d388c3933d31d"
})

const messaging = firebase.messaging()

// Opcional: Personalizar como a notificação aparece
messaging.onBackgroundMessage(payload => {
	console.log('Recebido em background: ', payload)

	const notificationTitle = payload.notification.title

	const notificationOptions = {
		body: payload.notification.body,
		// icon: '/firebase-logo.png'
	}

	self.registration.showNotification(notificationTitle, notificationOptions)
})