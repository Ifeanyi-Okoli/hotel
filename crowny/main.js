//introducing file system API
// const fs = require("fs");

//Array to hold the room objects
var rooms = [
  {
    name: "A101",
    type: "single",
    booked: true,
    desc: "Man has to rest; all work and no play makes Rust a blunt dude",
    image: ["./assets/rm1.jpeg", "./assets/rm1a.jpeg", "./assets/rm1b.jpeg", "./assets/rm1c.jpeg"],
    price: "$100 per night"
  },
  {
    name: "B201",
    type: "Double",
    booked: false,
    desc: "Man has to rest; all work and no play makes Rust a blunt dude",
    image: ["./assets/rm2.jpeg", "./assets/rm2a.jpeg", "./assets/rm2b.jpeg", "./assets/rm2c.jpeg"],
    price: "$100 per night",
  },
  {
    name: "E301",
    type: "Executive",
    booked: true,
    desc: "Man has to rest; all work and no play makes Rust a blunt dude",
    image: ["./assets/rm3.jpeg", "./assets/rm3a.jpeg", "./assets/rm3b.jpeg", "./assets/rm3c.jpeg"],
    price: "$100 per night"
  },
  {
    name: "B101",
    type: "Double",
    booked: false,
    desc: "Man has to rest; all work and no play makes Rust a blunt dude",
    image: ["./assets/rm4.jpeg", "./assets/rm4a.jpeg", "./assets/rm4b.jpeg", "./assets/rm4c.jpeg"],
    price: "$120 per night"
  },
];

//Applying the file system API and creating a JSON file
// const jsonContent  = JSON.stringify(rooms);
// fs.writeFile("./alphabet.json", jsonContent, "utf-8", (err) =>{
//   if (err){
//     return console.log(err)
//   }
//   console.log("This file was saved!");
// });

//Declaring variables to get the various needed HTML elements
var board = document.getElementById("board");
const btnAdd = document.getElementById("btnAdd");
const availableBtn = document.getElementById("available");
const roomAdd = document.getElementById("rooms");
const book = document.getElementById("book");

const form = document.getElementById("form");
const formAdd = document.getElementById("formAdd");

const total = document.getElementById("total");
// const done = document.getElementByid("done");
const available = document.getElementById("availableRooms");
const bkdRooms = document.getElementById("bookedRooms");

// const increaseRoom = document.getElementById("increaseRoom");

//Function to clear the board of previous content
const clearBoard = () => {
    while (board.hasChildNodes()) {
      board.removeChild(board.firstChild);
    }
  };



//Click event handler for adding rooms to the board that calls the clearBoard() and creatRoom() functions
roomAdd.addEventListener("click", (e) => {
  e.preventDefault();
//   console.log("Rooms");
  clearBoard(); //calling the clearBoard function on line #67
  createRoom(rooms); //calling the createRoom function using rooms array as parameter
});

//Click event handler for adding only booked rooms to the board. 
book.addEventListener("click", (e) => {
  e.preventDefault();
  clearBoard(); //calling the clearBoard function on line #67
  var bookedRoom = rooms.filter((room) => room.booked === true); //filtering the rooms array to get only the booked rooms
  createRoom(bookedRoom); //calling createRoom function using bookedRoom as parameter.
});

//Click event handler for adding only available rooms to the board.
availableBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearBoard(); //calling the clearBoard function on line #67
  var availBtn = rooms.filter((room) => room.booked === false); //filtering the rooms array to get only the available rooms
  createRoom(availBtn); //calling createRoom function for available rooms only using availBtn as parameter.
});

// btnAdd.addEventListener("click", (e)=>{
    // e.preventDefault();
    // form.className.replace("hidden", "block")
    // form.style.display = form.style.display==="none" ? "block" : "none";
// })

//Function to create the room cards using click event hnadler and forms
formAdd.addEventListener("click", (e)=>{
    e.preventDefault();
    var data = new FormData(form); // create a FormData object
    var title = data.get("title"); // get the value of the input field for room name
    var desc = data.get("desc"); // get the value of the desc field
    var booked = data.get("booked"); //get the value of the booked field.
    var date = data.get("date"); //get the value of the date field.
    var type = data.get("type"); //get the value of the type field
    var price = data.get("price"); // get the value for the price field
    var imgInput = data.get("imgInput"); // get the value for the price field

    //condition to check if the form has values in the title and desc fields
    if(title && date){
        var room = {name: title, type: type, price: price, desc: desc, booked:complete(booked), image:imgInput, dueDate:date }

        rooms.push(room); // adds the object room to the rooms array.
        form.classList.replace("border-red-500", "border-slate-200") //replaces the border color of the form to slate color
    }else{
        form.classList +="border-red-500"; //retains the border color as red if there is no enteries for title and date field.
    }
    clearBoard(); // calls the clearBoard fucntion of line #67
    createRoom(rooms); // calls the createRoom function

    updateMetrics(); //calls the updateMetrics function
    showMetricBar(); //calls the showMetricBar function
    alert(title, desc, booked, date); // alerts the user of the values entered in the form
})

//Function to check if the room is booked or not
const complete=(v)=>{
    return v===null  ? false : true;
}

//Function to update the metrics of the rooms
const updateMetrics = ()=>{
   var totalRooms = rooms.length;
   var bookedRooms = rooms.filter((room)=>room.booked===true).length;
   var availableRooms = Math.abs(totalRooms - bookedRooms);

   total.innerText = totalRooms;
   bkdRooms.innerText = bookedRooms;
   available.innerText = availableRooms;
}

//Function to show the metrics bar
const showMetricBar=()=>{
    if(rooms.length > 1){
        topMetricBar.classList.replace("hidden", "block")
    }else{
        topMetricBar.classList.replace("block", "hidden")
    }
}

//Function to create the room cards
const createRoom = (rooms) => {
  for (let room of rooms) {
    const roomDiv = document.createElement("div");
    roomDiv.className =
      "bg-white shadow-md flex items-center rounded-xl p-4 h-40";
    // roomDiv.innerHTML = `room.name`;

    const subDiv = document.createElement("div");
    subDiv.className = "w-auto flex justify-start";


//-----------------------------display image start -----------------------------------------------------------
    const imgDiv = document.createElement("div");
    imgDiv.className = "w-3/5 flex justify-start";

    var img = document.createElement("img");
    img.className = "border-2 border-white border-solid rounded-xl w-56 h-40 -pl-2 -ml-2"
    delay();
    function delayImage(ms){
      return new Promise(resolve =>{
        setTimeout(()=>{resolve("")}, ms);
      })
    }
    async function delay(){
    for(let i = 0; i < room.image.length; i++){
      if(i >= room.image.length){
        i = 0;
      }
        
        img.src = room.image[i];
        await delayImage(1000);
    }
  }


let displayImg = img;
      displayImg.onmouseover = function () {
        let i = 0;
        setInterval(function () {
          displayImg.src = room.image[i];
          i++;
          if (i == room.image.length) {
            i = 0;
          }
        }, 5000);
      };

 
    // img.src = room.image;
    document.body.appendChild(img);

    imgDiv.appendChild(img);

 //---------------------------------------dislay image end----------------------------------------------------

    const closeBtn = document.createElement("button");
    closeBtn.innerText = "+";
    closeBtn.className = "text-center text-2xl text-slate-700";

    const list = document.createElement("ul");
    list.className = "-p-6 w-32"

    const l1 = document.createElement("li");
    l1.className = "font-bold text-gray-400";
    l1.innerText = room.name;

    const l2 = document.createElement("li");
    l2.className = "font-bold text-slate-800 text-md";
    l2.innerText = room.price;

    const l3 = document.createElement("li");
    l3.className = "font-bold text-slate-400 text-xl";
    l3.innerText = room.type;

    const l4 = document.createElement("li");
    l4.className = "font-normal text-xs";
    l4.innerText = room.desc;

    const bookDiv = document.createElement("div");
    bookDiv.className = "w-2/5 flex justify-end";

    const bookStatus = document.createElement("div");
    bookStatus.className = `p-2 rounded-full w-auto text-white text-xs font-bold ${
      room.booked ? "bg-green-500" : "bg-indigo-500"
    }`;
    bookStatus.innerText = `${room.booked ? "BOOKED" : "NOT BOOKED"}`;

    bookDiv.appendChild(bookStatus);
    list.appendChild(l1);
    list.appendChild(l2);
    list.appendChild(l3);
    list.appendChild(l4);

    roomDiv.appendChild(img);
    roomDiv.appendChild(closeBtn);
    roomDiv.appendChild(imgDiv);

    subDiv.appendChild(list);
    roomDiv.appendChild(imgDiv);
    roomDiv.appendChild(subDiv);
    roomDiv.appendChild(bookDiv);

    board.appendChild(roomDiv);
    
  }
};

// const addTask = () =>{
//     e.preventDefault();
//     rooms.push(room);
//     clearBoard();
//     createTask(rooms);
// }

const increaseRoom = () =>{
    // e.preventDefault();
    form.style.display = form.style.display==="none" ? "block" : "none";
}