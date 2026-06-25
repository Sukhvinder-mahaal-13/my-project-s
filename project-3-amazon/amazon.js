// Search Button

const searchBtn = document.querySelector(".search-bar button");
const searchInput = document.querySelector(".search-bar input");

searchBtn.addEventListener("click", () => {
    if(searchInput.value.trim() === ""){
        alert("Please enter something to search!");
    }
    else{
        alert(`Searching for: ${searchInput.value}`);
    }
});


// Card Hover Sound Effect (Optional)

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });
});


// Shop Now Button

const buttons = document.querySelectorAll(".card-content a");

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        const product =
        btn.parentElement.querySelector("h3").innerText;

        alert(`${product} added to wishlist ❤️`);
    });
});


// Back To Top

const backToTop = document.querySelector(".footer-top");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Navbar Shadow On Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0px 5px 15px rgba(0,0,0,0.3)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});