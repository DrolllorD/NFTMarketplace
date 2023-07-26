const burger = document.querySelector("[data-burger]");
const list = document.querySelector("[data-list]");
const close = document.querySelector("[data-close]");

function openList() {
  burger.addEventListener("click", () => {
    list.classList.add("open");
    document.body.style.overflow = "hidden";
  });
}
openList();

function closeList() {
  close.addEventListener("click", () => {
    list.classList.remove("open");
    document.body.style.overflow = "visible";
  });
}
closeList();
