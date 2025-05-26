// Colors ka array jisme aap black, pink aur extra colors rakh sakte ho
const colors = [
  "black",
  "hotpink",
  "purple",
  "darkblue",
  "darkred",
  "darkgreen",
  "orange",
  "teal"
];

let index = 0;

document.body.addEventListener("click", () => {
  // index badhakar agla color lo
  index = (index + 1) % colors.length;
  document.body.style.backgroundColor = colors[index];
});
