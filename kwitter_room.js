
var firebaseConfig = {
      apiKey: "AIzaSyB5y95nxWNkruIXQWmve8khbv_NfSMotL4",
      authDomain: "kwitter-prj-pro.firebaseapp.com",
      projectId: "kwitter-prj-pro",
      storageBucket: "kwitter-prj-pro.appspot.com",
      messagingSenderId: "15175033161",
      appId: "1:15175033161:web:9339f9d68d753ba826fa98"
    };

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       firebase.initializeApp(firebaseConfig);

       function addUser(){
           user_name=document.getElementById("user_name").value;
      
           firebase.database().ref("/").child(user_name).update({
               purpose:"adding user"
           });
       }
      });});}
getData();
