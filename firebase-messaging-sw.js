// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: 'AAAAAkigOU0:APA91bHD8LuIpPOv0Wov7_HRBXqf1tL8cuOW5zeQs7hCrrHJEpQZlINWVGLAh8_80ZiCZ3PUxhuyCZ5YORvgM4GCofrnUFEbBbwP71UYIOWQJYSgBgFWixinrFGEPwduy-m3Qo85GFM-'
});

const messaging = firebase.messaging();