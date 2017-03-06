import firebase from 'firebase';

try {
    var config = {
    apiKey: "AIzaSyDvRdxEcduxOPvU7qiwUG5J5ApuVxw51eI",
    authDomain: "james-todo-app.firebaseapp.com",
    databaseURL: "https://james-todo-app.firebaseio.com",
    storageBucket: "james-todo-app.appspot.com",
    messagingSenderId: "525499365227"
    };
    
    firebase.initializeApp(config);
} catch (e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;