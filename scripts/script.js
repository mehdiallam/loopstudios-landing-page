'use strict';
console.log("Hello, World!");

const menu = document.getElementById("aside");

function openMenu() {
	menu.classList.add("opened");
	document.body.classList.add("stop-scroll");
}

function closeMenu() {
	menu.classList.remove("opened");
	document.body.classList.remove("stop-scroll");
}

const menuOpenBtn = document.getElementById("menu-open-btn");
const menuCloseBtn = document.getElementById("menu-close-btn");

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);

document.getElementById("year").innerHTML = new Date().getFullYear();
