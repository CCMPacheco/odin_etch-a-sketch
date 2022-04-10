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
      div.addEventListener("mouseover", () => {
        if (colorBtn.classList.contains("active")) {
          div.style.cssText = `background-color: ${color.value}`;
        }

        if (rainbowBtn.classList.contains("active")) {
          div.style.cssText = `background-color: rgb(${rgb()}, ${rgb()}, ${rgb()})`;
        }
      });
    });
  }
}

function clearGrid() {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
}

function rgb() {
  return Math.floor(Math.random() * 256);
}

const container = document.querySelector(".container");
const slider = document.getElementById("my-range");
const value = document.querySelectorAll(".value");
const clearBtn = document.querySelector(".clear");
const color = document.querySelector("#color");
const colorBtn = document.querySelector(".color-btn");
const rainbowBtn = document.querySelector(".rainbow-btn");

slider.oninput = () => {
  value.forEach((span) => (span.textContent = slider.value));
};

slider.onmouseup = () => {
  createGrid(slider.value);
};

clearBtn.addEventListener("click", () => createGrid(slider.value));

colorBtn.addEventListener("click", () => {
  colorBtn.classList.add("active");
  rainbowBtn.classList.remove("active");
});

rainbowBtn.addEventListener("click", () => {
  rainbowBtn.classList.add("active");
  colorBtn.classList.remove("active");
});

createGrid(slider.value);
