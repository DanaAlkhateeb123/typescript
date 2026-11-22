"use strict";
let storename;
let storedescription;
let Currency;
let Number_of_available_products;
let isstoreopen = true;
let arr = ["Laptop",
    "Mobile Phone",
    "Tablet",
    "Smart Watch",
    "Headphones"];
let productDetails = [
    "Smartphone", 699.99, true,
    "Laptop", 1299.99, false,
    "Tablet", 499.99, true,
    "Smartwatch", 199.99, true,
    "Headphones", 149.99, false
];
if (isstoreopen) {
    console.log("the store is open ");
}
else
    console.log("the store is closed ");
let price = 149.99;
if (price > 500) {
    console.log("Expensive Product ");
}
else if (price > 100 && price < 500) {
    console.log("Medium Price ");
}
else {
    console.log("Affordable Product ");
}
for (let i = 0; i < productDetails.length; i += 3) {
    console.log(productDetails[i]);
}
let count = 0;
for (let i = 1; i < productDetails.length; i += 3) {
    let price = productDetails[i];
    if (typeof price === "number" && price > 100) {
        count++;
    }
}
console.log(count);
function calculateDiscount(price, dicount) {
    let dicountvalue = price * dicount;
    price = price - dicountvalue;
    return price;
}
console.log(calculateDiscount(100, 0.15));
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        console.log("In Stock");
    }
    else {
        console.log("Out of Stock");
    }
}
checkProductAvailability(100);
function displayStoreMessage(message) {
    console.log(message);
}
displayStoreMessage("hiii danaaaa");
function displayProductInfo(Productname, Productprice, Productdescription, Currency = "USD") {
    console.log("product name : " + Productname +
        "  Product price : " + Productprice +
        "  Product description : " + Productdescription +
        "  Currency : " + Currency);
}
displayProductInfo("tv", 1000, " a good tv");
displayProductInfo("tv", 1000, " a good tv", "JOD");
function calculateTotalPrice(...num) {
    let total = 0;
    num.forEach(element => {
        total += element;
    });
    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 100));
console.log(calculateTotalPrice(100, 200));
let array = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];
function load() {
    let heading = document.getElementById("heading");
    let container = document.getElementById("container");
    if (container) {
        container.innerHTML = "";
        for (let x of array) {
            container.innerHTML += `
                <div>
                    <h1>${x.name}</h1>
                    <p>${x.description}</p>
                    <p>Price: $${x.price}</p>
                    <hr>
                </div>
            `;
        }
    }
}
document.getElementById("btn")?.addEventListener("click", load);
