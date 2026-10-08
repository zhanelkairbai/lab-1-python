const input = document.querySelector("#productInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#shoppingList");

button.addEventListener("click", function () {
    const product = input.value.trim();

    if (product === "") {
        alert("Введите название товара");
        return;
    }

    const item = document.createElement("li");
    item.textContent = product;

    item.addEventListener("click", function () {
        item.classList.toggle("completed");
    });

    list.append(item);

    input.value = "";
});
