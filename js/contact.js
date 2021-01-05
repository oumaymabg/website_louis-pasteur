// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAQBs53F0_BuHWm7jREBFdMiB0RnR6-Sjw",
    authDomain: "clinique-v.firebaseapp.com",
    databaseURL: "https://clinique-v.firebaseio.com",
    projectId: "clinique-v",
    storageBucket: "clinique-v.appspot.com",
    messagingSenderId: "590693116711",
    appId: "1:590693116711:web:df7eb46298fa171bbed702",
    measurementId: "G-DV675BE79Y"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('clinique-v');

function save_message(name, lastname, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        lastname: lastname,
        email: email,
        message: message
    })
}

function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    save_message(name, lastname, email, message);
};
document.getElementById('contactForm').addEventListener('submit', submitForm);