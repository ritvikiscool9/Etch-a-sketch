
const container = document.getElementById('container');


function createGrid(){
    container.style.display = 'flex';
    container.style.flexDirection = 'column';

    for(let i = 0; i < 16; i++){
        const row = document.createElement("div");
        row.style.display = 'flex';

        for(let j = 0; j < 16; j++){
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


createGrid();

