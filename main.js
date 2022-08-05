const randomBtn = document.getElementById("random_btn");
const mainHeading = document.getElementById("mainHeading");
const image = document.getElementById("mainImg")
const username = document.getElementById("username");
const about = document.getElementById("about");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

function getUserData(){
    let randomIndex = Math.floor (Math.random() * data.length);
    let randomUser = data[randomIndex];

    mainHeading.innerHTML = randomUser.name.title + ". " + randomUser.name.first + " " +randomUser.name.last;
    
    image.src = randomUser.picture.large;
    
    username.innerHTML = "Username: "+randomUser.login.username;
    
    about.innerHTML = "My name is " + randomUser.name.first + " (" +randomUser.gender+ "), and I am " +randomUser.registered.age+ " years old.";
    
    
    
    email.innerHTML= randomUser.email;
    phone.innerHTML= randomUser.phone;
}

randomBtn.onclick = function (event) {
    event.preventDefault();
    getUserData();
  };






  