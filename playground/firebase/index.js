import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDvRdxEcduxOPvU7qiwUG5J5ApuVxw51eI",
    authDomain: "james-todo-app.firebaseapp.com",
    databaseURL: "https://james-todo-app.firebaseio.com",
    storageBucket: "james-todo-app.appspot.com",
    messagingSenderId: "525499365227"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'James',
        age: 37
    }
}).then(() => {
    console.log('Set worked');
}, (e) => {
    console.log('Set failed');
});

//firebaseRef.set({
//    appName: 'Todo Application'
//});

//firebaseRef.child('user').set({
//    name: 'Jessica'
//});
//
//firebaseRef.child('app').set({
//    name: 'Todo Appplication Baby'
//});
//
////firebaseRef.update({
////    isRunning: false,
////    'app/name': 'Todoist Application Yeah'
////});
//
//firebaseRef.child('app').update({
//    name: 'Todo Application'
//}).then(() => {
//    console.log('Update worked')
//}, (e) => {
//    console.log('Update failed')
//})

//firebaseRef.update({
//    'app/name': 'Todo Application Yeah',
//    'user/name': 'Princess Jessica'
//});
//
//firebaseRef.child('app').set({
//    name: 'Just Todo'
//});
//
//firebaseRef.child('user').set({
//    name: 'Boring James'
//});
//firebaseRef.child('app/name').remove();


//firebaseRef.child('app').update({
//    version: '2.0',
//    name: null
//});
//
//firebaseRef.update({
//    isRunning: null
//})
//
//firebaseRef.child('user/age').remove();

//firebaseRef.child('app').once('value').then((snapshot) => {
//    console.log('Got entire database', snapshot.key, snapshot.val());
//}, (e) => {
//    console.log('Unable to fetch value', e);
//});

//firebaseRef.on('value', (snapshot) => {
//    console.log('Got value baby', snapshot.val());
//});
//
//firebaseRef.off();
//
//firebaseRef.update({isRunning: false});

//firebaseRef.child('user').on('value', (snapshot) => {
//    console.log('User ref changed', snapshot.val());
//});
//
//firebaseRef.child('user').update({name: 'Jessica'});
//
//firebaseRef.child('app').update({name: 'Another App'});

//var notesRef = firebaseRef.child('notes');
//
//notesRef.on('child_added', (snapshot) => {
//    console.log('child_added', snapshot.key, snapshot.val());
//});
//
//notesRef.on('child_changed', (snapshot) => {
//    console.log('child_changed', snapshot.key, snapshot.val());
//});
//
//notesRef.on('child_removed', (snapshot) => {
//    console.log('child_removed', snapshot.key, snapshot.val());
//});
//
//var newNoteRef = notesRef.push({
//    text: 'Walk the dog!!!!!!'
//});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

var newTodosRef = todosRef.push({
    text: 'Walk the dog!!!!!!'
});

var newTodosRef = todosRef.push({
    text: 'Walk the cat!!!!!!'
});