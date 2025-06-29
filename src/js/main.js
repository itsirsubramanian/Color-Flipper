const colors = [];

for (let i = 0; i <= 0xffffff; i++) {
  colors.push(`#${i.toString(16).padStart(6, "0")}`);
}

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

let getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
