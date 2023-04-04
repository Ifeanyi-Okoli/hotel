var rooms = [{
    name:"A101",
    id:0001,
    type: "single",
    booked: false,
    desc:'Man has to rest; all work and no play makes Rust a blunt dude',
    image: "12/4/2023",
    size: "200 Square Feet",
    price: "$100 per night"
},
{
    name:"B201",
    id:0002,
    type: "Double",
    booked: false,
    desc:'Man has to rest; all work and no play makes Rust a blunt dude',
    image: "12/4/2023",
    size: "200 Square Feet",
    price: "$100 per night"
},
{
    name:"E301",
    id:0003,
    type: "Executive",
    booked: false,
    desc:'Man has to rest; all work and no play makes Rust a blunt dude',
    image: "12/4/2023",
    size: "200 Square Feet",
    price: "$100 per night"
}
]

const panel = document.getElementById("panel");
const btnAdd = document.getElementById("btnAdd");

const toDo = document.getElementById("todo");
const completed = document.getElementById("completed");