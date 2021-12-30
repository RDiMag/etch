document.body.onload = generateGrid();

function generateGrid() {
    for(let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        let container = document.getElementById('container');
       container.appendChild(div);
    }
}


let container = document.querySelector('#container');

function changeColor(eventObject) {
    console.log(eventObject)
    if (eventObject.currentTarget != eventObject.target) {
        
        eventObject.target.style.backgroundColor = "gray";
    }
}

container.addEventListener('mouseover', changeColor, true);

// This section allows the user to create a new grid and input the number of squares per side.

let restartButton = document.getElementById('newGrid');

restartButton.addEventListener("click", newGrid); 

function newGrid() {
    clearGrid();
    let num = prompt("Enter a number between 2-100.", "");
    num = parseInt(num);
    if (num <= 1) {
      newGrid();
    }
    else if (num >= 100) {
        newGrid();
    }
    else {
        let newContainer = document.getElementById('container');
            newContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
            newContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;

        for(let i = 0; i < num * num; i++) {
            let div = document.createElement('div');   
           newContainer.appendChild(div);
    }
}
}

// clearButton deletes the existing grid.

let clearButton = document.getElementById('clearGrid');

clearButton.addEventListener("click", clearGrid);

function clearGrid() {
    let divsToRemove = document.querySelectorAll('div');
        for (let i = divsToRemove.length-1; i >= 0; i--) {
            divsToRemove[i].remove();
        }
}
