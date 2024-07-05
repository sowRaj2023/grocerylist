
let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryContainerEl = document.getElementById("groceryContainer");


let headingEl = document.createElement("h1");
headingEl.classList.add("text-center","m-5");
headingEl.textContent = "Grocery List"
groceryContainerEl.appendChild(headingEl);

let unOrderedList = document.createElement("ul");
unOrderedList.classList.add("unordered-list");
groceryContainerEl.appendChild(unOrderedList);


for(let gorcery of groceryList){
    let listEl = document.createElement("li");
    listEl.textContent = gorcery;
    unOrderedList.appendChild(listEl)
}
