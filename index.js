document.body.onload = generateGrid();

function generateGrid() {
    for(let i = 0; i < 128; i++) {
        let div = document.createElement('div');
        let container = document.getElementById('container');
       container.appendChild(div);
    }
}

// const grid = document.querySelector('div')

const container = document.querySelector('#container');

function changeColor(eventObject) {
    console.log(eventObject)
    if (eventObject.currentTarget != eventObject.target) {
        
        eventObject.target.style.backgroundColor = "gray";
    }
}

container.addEventListener('mouseover', changeColor, true);

let restartButton = document.getElementById('newGrid');

restartButton.addEventListener("click", newGrid); 

function newGrid() {
    let num = prompt("Enter a number between 2-100.", "");
    num = parseInt(num);
    if (num <= 1) {
      newGrid();
    }
    else if (num >= 100) {
        newGrid();
    }
    else {
        console.log(num);
        for(let i = 0; i < num * num; i++) {
            let div = document.createElement('div');
            let container = document.getElementById('container');
           container.appendChild(div);
    }
}
}

let clearButton = document.getElementById('clearGrid');

clearButton.addEventListener("click", clearGrid);

function clearGrid() {
    let divsToRemove = document.querySelectorAll('div');
        for (let i = divsToRemove.length-1; i >= 0; i--) {
            divsToRemove[i].remove();
        }
}
