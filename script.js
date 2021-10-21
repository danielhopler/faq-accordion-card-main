const buttons = document.querySelectorAll("button");
buttons.forEach( (button) => {
  button.onclick = function () {
    console.log( "YESSSS!");
  }
});