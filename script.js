function createGrid(squares) {
  container.style.cssText = `grid-template-columns: repeat(${squares}, 1fr); grid-template-rows: repeat(${squares}, 1fr)`;
  for (let i = 0; i < squares * squares; i++) {
    const divs = document.createElement("div");
    container.appendChild(divs);
  }
}

const container = document.querySelector(".container");
