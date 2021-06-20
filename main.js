var firebaseConfig = {
    apiKey: "AIzaSyCCtwkSWXXSGyh4dMc1h5P8gc4Tz3j67zc",
    authDomain: "kwitterapp-62153.firebaseapp.com",
    databaseURL: "https://kwitterapp-62153-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-62153",
    storageBucket: "kwitterapp-62153.appspot.com",
    messagingSenderId: "582857285147",
    appId: "1:582857285147:web:65aa45b67c2daeb0c4e2be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function add_user() {
    username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    console.log(username);
    window.location="kwitter_room.html";
    firebase.database().ref("/").child(username).update({purpose:"addinguser"});
    
}