const name2 = document.getElementById("name2");
const price2 = document.getElementById("price2");
const booked2 = document.getElementById("booked2");
const date2 = document.getElementById("date2");
const image2 = document.getElementById("imgInput");
const type2 = document.getElementById("type2");
const desc2 = document.getElementById("desc2");
var storageR = document.getElementById("storageR");
var storage2 = document.getElementById("storage2");
var deleteR = document.getElementById("delete");

document.querySelector("#formAdd").addEventListener("click", () =>{
    localStorage.setItem(name2.value, price2.value, booked2.value, date2.value, image2.value, type2.value, desc2.value);

})

// if(localStorage.getItem(name2.value)=== null){
//     localStorage.setItem(name2.value, )
// }
var output = document.getElementById("output");
output.innerText = Object.values(localStorage, null,)

storageR.addEventListener("click", () =>{
    record2();
})

deleteR.addEventListener("click", () =>{
    localStorage.removeItem(output[output.length-1]);
})

const record2 = () =>{
    // e.preventDefault();
    storage2.style.display = storage2.style.display==="none" ? "block" : "none";
}