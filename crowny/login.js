const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
var main = document.getElementById("main");
var bgImage = [
  "./assets/bg1.jpeg",
  "./assets/bg2.jpeg",
  "./assets/bg3.jpeg",
  "./assets/bg4.jpeg",
  "./assets/bg5.jpeg",
];

function changeImage() {
  let displayImg = document.getElementById("main");

  if (displayImg.src.match("./assets/bg1.jpeg")) {
    document.getElementById("img1").src = "./assets/bg2.jpeg";
  } else {
    document.getElementById("img1").src = "./assets/bg1.jpeg";
  }
}

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

let signUpBtn = document.getElementById("signupbtn"); //from line #
let signInBtn = document.getElementById("signinbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let name = document.getElementById("name");
let email = document.getElementById("email");
let login = document.getElementById("login");
let init = document.getElementById("init");

signInBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
};

signUpBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
};

signInBtn.ondblclick = function () {
  if (email) {
    alert("you are signed in!");
    login.style.maxHeight = "0";
    login.classList.toggle("hidden");
    init.innerText = email.value
      .match(/\b(\w)/g)
      .splice(0, 2)
      .join(" ")
      .toUpperCase();
  }
};

//function for the Log in page background image
let bgImage2 = [
  "./assets/bg1.jpeg",
  "./assets/bg2.jpeg",
  "./assets/bg3.jpeg",
  "./assets/bg4.jpeg",
  "./assets/bg5.jpeg",
  "./assets/bg6.jpeg",
  "./assets/bg7.jpg",
  "./assets/bg8.jpg",
  "./assets/bg9.jpg",
  "./assets/bg10.jpeg",
];
let displayImg = document.getElementById("imgLogin");
displayImg.onmouseover = function () {
  let i = 0;
  setInterval(function () {
    displayImg.src = bgImage2[i];
    i++;
    if (i == bgImage2.length) {
      i = 0;
    }
  }, 5000);
};

