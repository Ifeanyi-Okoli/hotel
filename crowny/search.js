 //function for the search bar
 function filterRoom() {
    var FilterValue, input, board, li, i;
    input = document.getElementById("search");
    FilterValue = input.value.toUpperCase();
    board = document.getElementById("board");
    li = document.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      let a = li[i];
      if (a.innerHTML.toUpperCase().indexOf(FilterValue) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }