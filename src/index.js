// import "./sass/main.scss";
const { log } = console;
const $ = (s, p = document) => p.querySelector(s);
const tag = (t, p = document) => p.createElement(t);

let count = 1;
const max_boxes = 25;

const colors = [
  "Gainsboro",
  "GhostWhite",
  "LavenderBlush",
  "Tan",
  "PaleGoldenrod",
  "SeaShell",
  "DarkSeaGreen",
  "Silver",
  "Beige",
  "palm"
];

const wrapper = $(".wrapper");

const rand = range => Math.round(Math.random() * range);

document.body.addEventListener("click", function() {
  if (count === max_boxes + 1) {
    wrapper.innerHTML = "";
    count = 1;
  }
  const box = tag("div");
  box.className = "box";
  box.textContent = String.fromCodePoint(0x1F4BB);
  box.style.backgroundColor = colors[rand(colors.length)];
  wrapper.appendChild(box);
  count++;
});

// document.write('<div class="box">Mashoo...</div>');

// document.body.innerHTML += `
//     <div class="box">Mashoo...</div>`

// const box = document.createElement('div');
// box.innerHTML = `<div class="box">Mashoo...</div>`
// document.body.appendChild(box);

// const box = document.createElement('div');
// box.className = 'box';
// box.textContent = 'Mashehoo...';
// document.body.appendChild(box);

//-------

// const wrapper = document.querySelector('.wrapper');
// wrapper.innerHTML += `<div class="box">Mashoo...</div>`;
