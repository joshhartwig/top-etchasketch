
const gridPixelHeight = 10;
const gridPixelWidth = 10;
let color = 'black';

createDivs(40, 'container');


function setColor(value) {
  color = value;
  console.log(`changed color to ${color}`);
}

// create grid of divs 
function createDivs(gridSize = 40, container) {
  let rows = gridSize;
  let cols = gridSize;

  resetDivs();

  const cont = document.querySelector(`#${container}`);
  for (let x = 0; x < rows; x++) {
    let row = document.createElement('div');
    row.classList.add(`row${x}`);

    for (let y = 0; y < cols; y++) {
      let col = document.createElement('div');
      col.classList.add(`r${x}`);
      col.classList.add(`c${y}`);
      col.style.cssText = `outline: 1px dashed #f90; width: ${gridPixelWidth}px; height: ${gridPixelHeight}px;`;
      col.addEventListener('click', function () {
        changeColor(this);
      });
      row.appendChild(col);
    };

    //resize container dynamically for grid size gridsize * pixelHeight/width
    cont.style.cssText = `
        width: ${gridSize * gridPixelWidth + 20}px; 
        height: ${gridSize * gridPixelHeight + 20}px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        background-color: #EFEFEF;
      `;
    //cont.style.width = `"${gridSize * gridPixelWidth}px"`;
    //cont.style.height = `"${gridSize * gridPixelHeight}px"`;
    cont.appendChild(row);
  };
}

// get value from input and ensure correct size
function getValue() {
  let value = parseInt(document.getElementById("szinput").value);
  if (value > 64) {
    alert('pick a size that is 64 or less');
    return;
  }
  else {
    createDivs(value, 'container');
  }
}

// clear divs completely
function resetDivs() {
  document.getElementById("container").innerHTML = '';
}

// change elements background color to global color currently set
function changeColor(element) {
  element.style.backgroundColor = color;
}

function randomizeColor() {
  const colors = ["aqua", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "yellow"];
  let r = Math.floor((Math.random() * colors.length) + 1);
  color = colors[r];
}