"use strict";
document.documentElement.classList.add("js");
const toggle = document.querySelector(".menu-button");
const nav = document.querySelector("#navigation");
toggle.hidden = false;
function closeMenu() { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
toggle.addEventListener("click", () => { const open = toggle.getAttribute("aria-expanded") !== "true"; toggle.setAttribute("aria-expanded", String(open)); nav.classList.toggle("is-open", open); });
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", event => { if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") { closeMenu(); toggle.focus(); } });
const filters = document.querySelector(".filters");
filters.hidden = false;
filters.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
 filters.querySelectorAll("button").forEach(item => item.setAttribute("aria-pressed", String(item === button)));
 let count = 0;
 document.querySelectorAll(".article").forEach(article => { article.hidden = button.dataset.filter !== "all" && article.dataset.category !== button.dataset.filter; if (!article.hidden) count++; });
 document.querySelector("#filter-status").textContent = `${count} article${count > 1 ? "s" : ""} affiché${count > 1 ? "s" : ""}.`;
}));
document.querySelector("#year").textContent = new Date().getFullYear();
