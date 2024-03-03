const art = document.querySelector(".art");

const removeBlock = () => art.lastChild.remove();
const clearBlocks = () => (art.innerHTML = "");
const changeSize = (size) => (art.style.width = size * 100 + "px");

const createBlock = (background) => {
  const block = document.createElement("div");
  art.appendChild(block);
  block.className = "block";
  block.style.background = background;
};

document.querySelectorAll("button").forEach((button) => {
  button.style.backgroundColor = button.id;
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 8) {
    removeBlock();
  }
});
