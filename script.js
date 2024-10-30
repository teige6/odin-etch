const pgContainer = document.querySelector('.container');
const gridBtn = document.querySelector('.set-grid-size');


let gridSize = 16;

function createGrid(size) {
    pgContainer.innerHTML = '';

    const squareSize = 740 / size + "px";

    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize;
        square.style.height = squareSize;

    
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = 'blue';
        });

        pgContainer.appendChild(square);
    }
}

function gridSetter() {
    let gridNum = prompt("Please enter the number of squares per side.(max 100):")

    if (gridNum != null) {
        gridSize = parseInt(gridNum);

        if(isNaN(gridNum) || gridNum <= 0 || gridNum > 100) {
            alert("You have entered a invalid answer, please try again!");
        } else {
            gridSize = gridNum;
            createGrid(gridSize);
        }
    }
        

}


gridBtn.addEventListener('click', gridSetter);

createGrid(gridSize);





