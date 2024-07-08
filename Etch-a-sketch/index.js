
const container = document.querySelector('#container');
const button = document.querySelector("#btn-new")
const buttonReset = document.querySelector("#btn-reset")



function createGrid(gridSize){
    container.style.display = 'flex';
    container.style.flexDirection = 'column';

    for(let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        
        row.style.display = 'flex';

        for(let j = 0; j < gridSize; j++){
            const square = document.createElement('div');
            square.style.border = '1px solid black'; 
            square.style.height = '40px'; 
            square.style.width = '40px';
            square.addEventListener("mouseover",() =>{
                let colors = changeBackground();
                square.style.background = `rgb(${colors[0]},${colors[1]},${colors[2]})`
            });
            row.appendChild(square);
        }
        container.append(row);
        }
    }

    function changeBackground(){
        r = (Math.random()*255);
        g = (Math.random()*255);
        b = (Math.random()*255);

        return[r,g,b];
    }

    function getGridSize(){
        let size = prompt("Enter the size of the gird");
        if(size > 100){
            alert("Invalid size!");
            getGridSize();
            
        }else{
            return size;
        }
        
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

