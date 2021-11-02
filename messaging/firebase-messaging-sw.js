// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAVif_-s01Ei0_EOUg5jcKapgIYER-pYUA",
    authDomain: "fir-chat-web-app-2321b.firebaseapp.com",
    databaseURL: "https://fir-chat-web-app-2321b-default-rtdb.firebaseio.com",
    projectId: "fir-chat-web-app-2321b",
    messagingSenderId: "50869530215",
    appId: "1:50869530215:web:0a84a36ff2208a0c4d2ec2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



