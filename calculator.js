const buttonsEle = document.querySelector(".buttons");
const currentDisplay = document.querySelector(".display__current");

// do by event delegation
buttonsEle.addEventListener("click", (e) => {
  const button = e.target.closest(".btn")?.dataset;
  if ("number" in button) {
    const digit = e.target.dataset.number;
    if (currentDisplay.textContent == "0") {
      currentDisplay.textContent = digit;
    } else {
      currentDisplay.append(digit);
    }
  }
});
