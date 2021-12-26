document.body.onload = generateGrid();

function generateGrid() {
    for(let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        let container = document.getElementById('container');
       container.appendChild(div);
    }
}

const grid = document.querySelector('div')

function changeColor() {
    grid.style.backgroundColor = "gray";
}

container.addEventListener('mouseover', changeColor);