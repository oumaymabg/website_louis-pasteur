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

function save_message(produit, nombre, prix) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        produit: produit,
        nombre: nombre,
        prix: prix
    })
}


function submit(i){
 var produit = document.getElementById("produit"+i).innerHTML;
 var el = document.getElementById("nombre"+i);
var nombre = el.options[el.selectedIndex].value;
 var prix   = document.getElementById("prix"+i).innerHTML;

save_message(produit, nombre, prix);
}