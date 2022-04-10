function createGrid(squares) {
  if (squares > 0 && squares <= 64) {
    clearGrid();
    container.style.cssText = `grid-template-columns: repeat(${squares}, 1fr); grid-template-rows: repeat(${squares}, 1fr)`;
    for (let i = 0; i < squares * squares; i++) {
      const divs = document.createElement("div");
      divs.classList.add("grid-div");
      container.appendChild(divs);
    }
    const gridDiv = document.querySelectorAll(".grid-div");
    gridDiv.forEach((div) => {
      div.addEventListener(
        "mouseover",
        () => (div.style.cssText = `background-color: black`)
      );
    });
  }
}

function clearGrid() {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

const container = document.querySelector(".container");

createGrid(16);
