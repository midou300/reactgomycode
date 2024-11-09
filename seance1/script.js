const hello = document.querySelector("h1");
const text = document.querySelector(".text");
const p = document.querySelectorAll("p");
console.log(hello, text, p);

function changeBg() {
  text.classList.toggle("newClass");
}
hello.addEventListener("click", changeBg);