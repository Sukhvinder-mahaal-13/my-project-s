const board = document.querySelector(".board");

const blockWidth = 30;
const blockHeight = 30;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

board.style.gridTemplateColumns = `repeat(${cols}, ${blockWidth}px)`;
board.style.gridTemplateRows = `repeat(${rows}, ${blockHeight}px)`;

for (let i = 0; i < rows * cols; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
}