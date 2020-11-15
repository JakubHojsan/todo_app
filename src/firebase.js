// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXcDxY4HuVmoVIC3hEJZIY2-F7J960ENo",
    authDomain: "todo-app-jh.firebaseapp.com",
    databaseURL: "https://todo-app-jh.firebaseio.com",
    projectId: "todo-app-jh",
    storageBucket: "todo-app-jh.appspot.com",
    messagingSenderId: "657545649450",
    appId: "1:657545649450:web:6ed864eb0b63220bed9253",
    measurementId: "G-Z36NCRCV4T"
  });

  const db = firebaseApp.firestore();

  export default db;

  //need to export to use this db in other files