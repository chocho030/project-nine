const test = document.getElementById("test-cir");
const ctx_test = test.getContext("2d");

ctx_test.arc(250, 250, 250, 0, 2 * Math.PI);

const grad = ctx_test.createConicGradient(0, 250, 250);

grad.addColorStop(0, "rgb(255, 0, 0)");
grad.addColorStop(0.16, "rgb(255, 255, 0)");
grad.addColorStop(0.33, "rgb(0, 255, 0)");
grad.addColorStop(0.5, "rgb(0, 255, 255)");
grad.addColorStop(0.66, "rgb(0, 0, 255)");
grad.addColorStop(0.83, "rgb(255, 0, 255)");
grad.addColorStop(1, "rgb(255, 0, 0)");

ctx_test.fillStyle = grad;
ctx_test.fill();

//
const dot_sub = document.getElementById("dot-sub");

isDrag = false;

test.addEventListener("mousedown", (e) => {
  isDrag = true;

  const rect_sub = test.getBoundingClientRect();
  const x = e.clientX - rect_sub.x;
  const y = e.clientY - rect_sub.y;

  dot_sub.style.left = `${x}px`;
  dot_sub.style.top = `${y}px`;
});
test.addEventListener("mousemove", (e) => {
  if (!isDrag) return;

  const rect_sub = test.getBoundingClientRect();
  const x = e.clientX - rect_sub.x;
  const y = e.clientY - rect_sub.y;

  dot_sub.style.left = `${x}px`;
  dot_sub.style.top = `${y}px`;
});
test.addEventListener("mouseup", () => {
  isDrag = false;
});
