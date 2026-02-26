const buttonsEle = document.querySelectorAll(".buttons");
const currentDisplay = document.querySelector(".display__current");

buttonsEle.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    console.log("button is click");
  });
});
