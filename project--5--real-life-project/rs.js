document.getElementById("serviceSelect").addEventListener("change", function () {
    if (this.value === "other-option") {
        window.location.href = "rs-2.html";
    }
});


const sound = document.getElementById("sound");

document.querySelectorAll(".sound-img").forEach(img => {
    img.addEventListener("click", () => {
        if (sound.paused) {
            sound.play();
        } else {
            sound.pause();
            sound.currentTime = 0; // start par reset
        }
    });
});
