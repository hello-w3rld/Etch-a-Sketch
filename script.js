const grid = document.querySelector(".canvas");
const userInput = document.getElementById("quantity");
const resetButton = document.getElementById("reset");
const dt = document.getElementById("d")
const rainbow = document.getElementById("r");
const colorPicker = document.getElementById("c");
const colorButton = document.getElementById("cn")
const eraser = document.getElementById("e");
const square = document.querySelector("div");
const canva = document.getElementById("canvas");
let x = 16;
let currentColor = '#ff55ff'
//change color
function setCurrentColor(newColor) {
  currentColor = newColor
}
colorPicker.onchange = (e) => setCurrentColor(e.target.value)

function changeColor(e) {
  
  if (canva.matches(':hover')) {
    if (rainbow.checked === true) {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (dt.checked === true) {
      e.target.style.backgroundColor = '#000000'
    } else if (eraser.checked === true) {
      e.target.style.backgroundColor = '#ffffff'
    } else if (colorButton.checked === true) {
      colorPicker.click();
      currentColor = colorPicker.value;
      e.target.style.backgroundColor = currentColor
    }
  }
  
}


//creating grid
createGrid = () => {

  grid.style.gridTemplateColumns = `repeat(${x}, 2fr)`
  grid.style.gridTemplateRows = `repeat(${x}, 2fr)`
  dt.checked=true;

  for (let i = 0; i < x*x; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    square.addEventListener('mouseover', changeColor)
    grid.appendChild(div);
  }
  
};

//updating grid size
updateGridSize = () => {
  
  if (userInput.value < 100 && userInput.value > 16) {
    x = userInput.value;
   createGrid();
  }
  else {
    alert("Put number less than between 16 and 100!")
    userInput.value = "";
  }
};

  //clear while maintaining last user input()
  resetButton.addEventListener("click", function() {
    grid.innerHTML = "";
    userInput.value = "";
    createGrid();

  });
  
  userInput.addEventListener("change", updateGridSize);
  createGrid();