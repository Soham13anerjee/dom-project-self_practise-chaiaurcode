const buttons = document.querySelectorAll(".button");
// console.log(buttons);
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
    body.style.backgroundColor = event.target.id;
  });
});
