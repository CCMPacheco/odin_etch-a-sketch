function createGrid(squares) {
  clearGrid();
  if (squares > 0 && squares <= 64) {
    container.style.cssText = `grid-template-columns: repeat(${squares}, 1fr); grid-template-rows: repeat(${squares}, 1fr)`;
    for (let i = 0; i < squares * squares; i++) {
      const divs = document.createElement("div");
      container.appendChild(divs);
    }
  }
}

function clearGrid() {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

const container = document.querySelector(".container");
