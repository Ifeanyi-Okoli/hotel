var rooms = [
  {
    name: "A101",
    id: 0001,
    type: "single",
    booked: true,
    desc: "Man has to rest; all work and no play makes Rust a blunt dude",
    image: "./assets/rm1.jpeg",
    size: "200 Square Feet",
    price: "$100 per night",
  },
  {
    name: "B201",
    id: 0002,
    type: "Double",
    booked: false,
    desc: "Man has to rest; all work and no play makes Rust a blunt dude",
    image: "./assets/rm2.jpeg",
    size: "200 Square Feet",
    price: "$100 per night",
  },
  {
    name: "E301",
    id: 0003,
    type: "Executive",
    booked: true,
    desc: "Man has to rest; all work and no play makes Rust a blunt dude",
    image: "./assets/rm3.jpeg",
    size: "200 Square Feet",
    price: "$100 per night",
  },
  {
    name: "B201",
    id: 0002,
    type: "Double",
    booked: false,
    desc: "Man has to rest; all work and no play makes Rust a blunt dude",
    image: "./assets/rm4.jpeg",
    size: "200 Square Feet",
    price: "$120 per night",
  },
];

var board = document.getElementById("board");
const btnAdd = document.getElementById("btnAdd");

const roomAdd = document.getElementById("rooms");
const book = document.getElementById("book");

roomAdd.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Rooms");
  clearBoard();
  createRoom(rooms);
});

book.addEventListener("click", (e) => {
  e.preventDefault();
  clearBoard();
  var bookedRoom = rooms.filter((room) => room.booked === true);
  createRoom(bookedRoom);
});





const createRoom = (rooms) => {
  for (let room of rooms) {
    const roomDiv = document.createElement("div");
    // roomDiv.classList.add("room");
    roomDiv.className =
      "bg-white shadow-md flex items-center rounded-xl p-4 h-40";
    // roomDiv.innerHTML = `room.name`;

    const subDiv = document.createElement("div");
    subDiv.className = "w-3/5 flex justify-start";

    const imgDiv = document.createElement("div");
    imgDiv.className = "w-3/5 flex justify-start";

    var img = document.createElement("img");
    img.src = room.image;
    document.body.appendChild(img);

    const list = document.createElement("ul");

    const l1 = document.createElement("li");
    l1.className = "font-bold text-gray-400";
    l1.innerText = room.name;

    const l2 = document.createElement("li");
    l2.className = "font-extrabold text-slate-800 text-xl";
    l2.innerText = room.price;

    const l3 = document.createElement("li");
    l3.className = "font-bold text-slate-400 text-xl";
    l3.innerText = room.type;

    const l4 = document.createElement("li");
    l4.className = "font-extrabold text-xl";
    l4.innerText = room.id;

    const bookDiv = document.createElement("div");
    bookDiv.className = "w-2/5 flex justify-end";

    const bookStatus = document.createElement("div");
    bookStatus.className = `p-2 rounded-full ${
      room.booked ? "bg-green-500" : "bg-indigo-500"
    }`;
    bookStatus.innerText = `${room.booked ? "BOOKED" : "NOT BOOKED"}`;

    bookDiv.appendChild(bookStatus);
    list.appendChild(l1);
    list.appendChild(l2);
    list.appendChild(l3);
    list.appendChild(l4);

    roomDiv.appendChild(img);

    subDiv.appendChild(list);
    roomDiv.appendChild(imgDiv);
    roomDiv.appendChild(subDiv);
    roomDiv.appendChild(bookDiv);

    board.appendChild(roomDiv);
  }
};

const clearBoard = () => {
  while (board.hasChildNodes()) {
    board.removeChild(board.firstChild);
  }
};
