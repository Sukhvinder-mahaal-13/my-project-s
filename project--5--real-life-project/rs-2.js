
const serviceBtn = document.querySelector("#service-option-btn");
const ul = document.querySelector("#service-option-ul");
const serviceInp = document.querySelector("#service-option");

// Add Service
serviceBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (serviceInp.value.trim() === "") return;

    let item = document.createElement("li");
    item.innerText = serviceInp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);

    serviceInp.value = "";
});

// Delete Service
ul.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});