function createGrid(numberOnSquaresOnEachSide = 4){
    let container = document.querySelector(".container");
    let numOfGridSquares = numberOnSquaresOnEachSide * numberOnSquaresOnEachSide;
    let sideDimension = 100/numberOnSquaresOnEachSide;

    for(let i = 0; i < numOfGridSquares; ++i){
        let div = document.createElement("div");
        div.setAttribute("class", "square");
        div.setAttribute("id", `sq${i}`)
        div.style.backgroundColor = "blue";
        div.style.flex = `0 0 ${sideDimension}vw`;
        div.style.height = `${sideDimension}vhw`;
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "white";
        });
        div.addEventListener("mouseout", () => {
            div.style.backgroundColor = "blue";
        })

        container.appendChild(div);
    }
}

createGrid();

function createButtonResponse(){
    let btn = document.querySelector("#btn");
    
    btn.addEventListener("click", () => {
        let userSelection = +prompt("How many squares would you like on each side? Max squares: 100");
        while(userSelection<0 || userSelection>100 || userSelection == 0){
            userSelection = +prompt("How many squares would you like on each side? Max squares: 100");
        }
        let widthAndHeightDimension = 100/userSelection;

        let container = document.querySelector(".container");
        while(container.firstChild){
            container.removeChild(container.lastChild);
        }

        createGrid(userSelection);
    });
}

createButtonResponse();
