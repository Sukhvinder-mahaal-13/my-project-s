const cards = document.getElementById("popularCards");

const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

rightBtn.addEventListener("click", () => {
    cards.scrollLeft += 500;

    if(cards.scrollLeft >= 0){
        leftBtn.style.display = "block";
    }
});

leftBtn.addEventListener("click", () => {
    cards.scrollLeft -= 500;

    if(cards.scrollLeft <= 500){
        leftBtn.style.display = "none";
    }
});