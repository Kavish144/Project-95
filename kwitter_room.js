user_name=localStorage.getItem("user_name");

document.getElementById("user_name"),innerHTML = "Welcome " + user_name + "!";

function add_room() {
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child("room_name").update({purpose:"adding room name"});

  localStorage.setItem("room_name", room_name);

  window.location="kwitter_page.html";
} 


function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
 Room_names = childKey;
 //Start code
 row="<div class='room_names' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>";

 document.getElementById("output").innerHTML += Room_names;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    
    localStorage.setItem("room_name", name);
    
    window.location="kwitter_page.html";
    
    
    }