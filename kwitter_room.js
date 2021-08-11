
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

var firebaseConfig = {
      apiKey: "AIzaSyDvEaSm0vf0gJXp_Qj_-b1MfT1x9uLD9_Y",
      authDomain: "schoolchat-7386b.firebaseapp.com",
      databaseURL: "https://schoolchat-7386b-default-rtdb.firebaseio.com",
      projectId: "schoolchat-7386b",
      storageBucket: "schoolchat-7386b.appspot.com",
      messagingSenderId: "474471210351",
      appId: "1:474471210351:web:b3f50bee5645a58acddc9a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
