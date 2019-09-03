 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBvOgOfl7MNI9W7MQjr75kZtY9SGM7l-mk",
    authDomain: "muhammad-5ba2a.firebaseapp.com",
    databaseURL: "https://muhammad-5ba2a.firebaseio.com",
    projectId: "muhammad-5ba2a",
    storageBucket: "muhammad-5ba2a.appspot.com",
    messagingSenderId: "656018929844",
    appId: "1:656018929844:web:e5b96090ea6b9e03"
  };


 // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  console.log("firebase loaded");
  const db= firebase.firestore();
  const docRef = db.collection("CONTACT US").doc("Phone");
  const firestore = firebase.firestore();
  let save = document.getElementById('save');


 // const firestore = firebase.firestore();

  let Sname, Email, Phone, Subject, Adress, Message;
const date= Date.now();
     save.addEventListener("click", () => {
     Sname =document.getElementById("Surname").value;
     Email =document.getElementById("Email").value;
     Phone =document.getElementById("Number").value;
     Subject =document.getElementById("Subject").value;
     Adress = document.getElementById("Adress").value;
     Message = document.getElementById("Message").value;
   
    if (!Sname.match(/^[a-zA-Z]+$/)){
        alert ("Enter Your  SurName")
    }
    else if (!Email.includes("@")) {
        alert ("Invalid Email ")
    }
    else if (!Phone.match(/^[0-9]+$/)||Phone.length < 11 || Phone.length > 11) {
        alert ("Incorrect Phone Number")
    }
    else if (!Subject.match(/^[a-zA-Z]+$/)){
        alert ("input Subject")
    }
    else if (!Adress.match(/^[a-zA-Z]+$/)){
        alert("Incorrect Adress")
    }
    else if (!Message.match(/^[a-zA-Z]+$/)){
        alert ("pls leave a message for us")
    }
    else {
        alert ("Submitted");


        docRef.set({
        Sname: Sname,
        Email: Email,
        Phone: Phone ,
        Subject: Subject ,
        Adress: Adress ,
        Message: Message 
      }).then(function(){
        console.log("Successfully Saved");
      }).catch(function(error){
        console.log("Got an error:",error);
      });    
    };    

  });
