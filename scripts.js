/*
TODO: Determine how to style the divs so they are in a grid with flexbox
TODO: Create a function that creates the divs on page load 16x16 grid each div class of grid with unique id
TODO: Create a function that determines which grid you are hovering over and onclick() mark the grid / toggle a style black background
TODO: The backfill color should be selectable 
TODO: Grid size should be adjustable support up to 64
*/

let color = 'black';

createDivs(8, 'container');


function setColor(value){
    color = value;
    console.log(`changed color to ${color}`);
}

// create grid of divs 
function createDivs(gridSize, container) {
  rows = gridSize;
  cols = gridSize;
  const cont = document.querySelector(`#${container}`);
  for (let x = 0; x < rows; x++) {
    let row = document.createElement('div');
    row.classList.add(`row${x}`);

    for (let y = 0; y < cols; y++) {
      let col = document.createElement('div');
      col.classList.add(`r${x}`);
      col.classList.add(`c${y}`);
      col.style.cssText = 'outline: 1px dashed #f90; width: 20px; height: 20px';
      row.appendChild(col);
    };

    cont.appendChild(row);
  };
}

// get value from input and ensure correct size
function getValue(){
    let value = parseInt(document.getElementById("szinput").value);
    if(value >64){
        alert('pick a size that is 64 or less');
        return;
    }
    else {
        createDivs(value,'container');
    }
}

// clear divs completely
function resetDivs(){
    document.getElementById("container").innerHTML = '';
}

// change elements background color to global color currently set
function changeColor(element) {
    element.style.cssText = `background-color:${color}`;
}
