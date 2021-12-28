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

let restartButton = document.querySelector('button');

restartButton.addEventListener("click", clearGrid); 



function clearGrid() {
    let num = prompt("Enter a number between 2-100.", "");
    num = parseInt(num);
    if (num <= 1) {
      clearGrid();
    }
    else if (num >= 100) {
        clearGrid();
    }
    else {
        console.log(num);
    //     for(let i = 0; i < num; i++) {
    //         let div = document.createElement('div');
    //         let container = document.getElementById('container');
    //        container.appendChild(div);
    // }
}
}