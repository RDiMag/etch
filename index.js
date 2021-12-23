document.body.onload = generateGrid();

function generateGrid() {
    for(let i = 0; i < 256; i++) {
        let div = document.createElement('div');
        let container = document.getElementById('container');
       container.appendChild(div);
    }
}

let div = document.querySelector('div')

div.addEventListener('mouseover', function() {
    document.querySelector('div').style.backgroundColor = "blue"
})


