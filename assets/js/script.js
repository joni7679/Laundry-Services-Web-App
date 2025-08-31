
let togglebtn = document.querySelector("#toggle-btn");
let navbar = document.querySelector(".nav-center")
togglebtn.addEventListener('click', () => {
    navbar.classList.toggle("active-navbar");
})


let itemList = document.querySelector(".item-list");
let totalPrice = document.querySelector("#total-price");
let form = document.querySelector("form");
let userName = document.querySelector("#username");
let userEmail = document.querySelector("#email")
let userPhoneNumber = document.querySelector("#number")

let total = 0;
let cart = [];

const services = [
    { name: "dry cleaning", price: 200, icon: `<i class="ri-t-shirt-air-line"></i>` },
    { name: "wash & fold ", price: 100, icon: `<i class="ri-t-shirt-air-line"></i>` },
    { name: "ironing", price: 300, icon: `<i class="ri-t-shirt-air-line"></i>` },
    { name: "stain removal", price: 500, icon: `<i class="ri-t-shirt-air-line"></i>` },
    { name: "leather & suede cleaning", price: 999, icon: `<i class="ri-t-shirt-air-line"></i>` },
    { name: "wedding dress cleaning", price: 2800, icon: `<i class="ri-t-shirt-air-line"></i>` }
];
let clutter = '';
services.forEach((item, index) => {
    clutter += `<div class="service">
                            <div class="d-flex">
                                <p> ${item.icon} </p>
                                <p> ${item.name} </p>
                                <p>₹${item.price}</p>
                            </div>
                            <button class="add-btn" data-added="true" onclick=addToCart(${index})>add item <i class="ri-shopping-cart-2-line"></i></button>
                        </div>`;
    itemList.innerHTML = clutter
})

function addToCart(index) {
    let buttons = document.querySelectorAll(".add-btn");
    let clickButton = buttons[index]
    let isAddBuuton = clickButton.dataset.added === "true";
    if (!isAddBuuton) {
        clickButton.dataset.added = "true";
        clickButton.style.backgroundColor = "#fab1a4ff";
        clickButton.style.color = "#ec3d1eff";
        clickButton.innerHTML = `Remove Item <i class="ri-delete-bin-5-line"></i>`
        isAddBuuton = true;
    }
    else {
        // filter out remove this data.....


        clickButton.dataset.added = "false";
        clickButton.style.backgroundColor = "#c4e4f8",
            clickButton.style.color = "var(--text-bg-color)",
            clickButton.innerHTML = `Add Item <i class="ri-shopping-cart-2-line"></i>`;
        isAddBuuton = false;

    }
    updateCart();
}
function removeCart(item) {
    console.log(`this cart is remove `);
    updateCart();
};

function updateCart() {
    console.log("your cart is up to date");
};

// submit form logic here
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userNameValue = userName.value;
    let userEmilValue = userEmail.value;
    let numberValue = userPhoneNumber.value;
    console.log(userNameValue, userEmilValue, numberValue);
})