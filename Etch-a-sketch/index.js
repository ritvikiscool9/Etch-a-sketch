
const container = document.querySelector('#container');
const button = document.querySelector("#btn-new")
const buttonReset = document.querySelector("#btn-reset")



function createGrid(gridSize){
    const gridWidth = 650;
    const gridHeight = 650;
    

    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.width = `${gridWidth}px` 
    container.style.height= `${gridHeight}px`      
    

    const squareSize = Math.min((gridWidth - gridSize * 2) / gridSize, (gridHeight - gridSize * 2) / gridSize);

    container.innerHTML = '';

    
    for(let i = 0; i < gridSize * gridSize; i++){
        const square = document.createElement('div');
        square.style.border = '1px solid black'; 
        square.style.height = `${squareSize}px`; 
        square.style.width = `${squareSize}px`;
        square.addEventListener("mouseover",() =>{
            let colors = changeBackground();
            square.style.background = `rgb(${colors[0]},${colors[1]},${colors[2]})`
        });
        container.append(square);
    }
    
    
}

    function changeBackground(){
        let r = (Math.random()*255);
        let g = (Math.random()*255);
        let b = (Math.random()*255);

        return[r,g,b];
    }

    function getGridSize(){
        let size = prompt("Enter the size of the gird");
        if(size > 100){
            alert("Invalid size!");
            getGridSize();
        }
        return size;
    }

    function resetGrid(){
        const squares = container.querySelectorAll('#container div');
        
        squares.forEach(square => {
            square.style.background = 'white';
        });
    }

    button.addEventListener('click',() => {
        let gridSize = getGridSize();
        createGrid(gridSize);
    });

    buttonReset.addEventListener('click',() => {
        resetGrid();
    });
    




createGrid(16); 

