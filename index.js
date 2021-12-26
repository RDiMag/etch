document.body.onload = generateGrid();

function generateGrid(num1, num2) {
    for(let i = 0; i < num1 + num2; i++) {
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

const restartButton = document.querySelector('button');

restartButton.addEventListener("click", clearGrid); 

function clearGrid() {
    prompt("How many squares for each side of the grid?")
}
