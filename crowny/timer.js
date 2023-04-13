
    let time = document.getElementById("timer");   
    let timePanel = document.getElementById("timePanel"); 
    let d;
    setInterval(() => {
        d = new Date();
        time.innerHTML = d.toLocaleTimeString();
        //document.querySelector("time").innerText = `Time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }, 1000)

timePanel.onclick = function () {
    timePanel.classList.toggle("hidden");
}

let bgImage3 = [
    "./assets/bg2.jpeg",
    "./assets/bg3.jpeg",
    "./assets/bg4.jpeg",
    "./assets/bg5.jpeg",
    "./assets/bg6.jpeg",
    "./assets/bg7.jpg",
    "./assets/bg8.jpg",
    "./assets/bg9.jpg",
    "./assets/bg10.jpeg"
  ];
  let displayImg1 = document.getElementById("imgTimer");
  displayImg1.onmouseover = function () {
    let i = 0;
    setInterval(function () {
      displayImg1.src = bgImage3[i];
      i++;
      if (i == bgImage3.length) {
        i = 0;
      }
    }, 9000);
  };