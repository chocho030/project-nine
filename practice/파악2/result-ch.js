// 문제) 서브 색상 바꿀 때도 결괏값이 바뀌게 하는 법이 있나?
// // 근데 메인 dot 위치는 안 바뀌니까 그거에도 적용돼야 하는데
// 1. (반영) main, sub dot 위치 모두 반용.
// 2. (대안) sub dot이 이동할 때마다 main dot 위치 초기화.

// 메인 팔레트

const palette_main = document.getElementById("palette-main");
const ctx_main = palette_main.getContext("2d");

const wgradient_main = ctx_main.createLinearGradient(0, 0, 250, 0);

wgradient_main.addColorStop(0, "white");
wgradient_main.addColorStop(1, "rgb(135,0,253)");

ctx_main.fillStyle = wgradient_main;
ctx_main.fillRect(0, 0, 500, 500);

const hgradient_main = ctx_main.createLinearGradient(0, 0, 0, 250);

hgradient_main.addColorStop(0, "rgba(0,0,0,0)");
hgradient_main.addColorStop(1, "rgba(0,0,0,1)");

ctx_main.fillStyle = hgradient_main;
ctx_main.fillRect(0, 0, 500, 500);

// 점, 결과
const dot_main = document.getElementById("dot-main");

//
let numX = 2;
let numY = 2;
//

isDrag = false;

const color_result = document.getElementById("result-color");
const hex_result = document.getElementById("result-hex");
const rgb_result = document.getElementById("result-rgb");
const dot_main_inner = document.getElementById("dot-main-inner");

palette_main.addEventListener("mousedown", (e) => {
  isDrag = true;

  const rect = palette_main.getBoundingClientRect();
  const x1 = e.clientX - rect.x;
  const y1 = e.clientY - rect.y;

  numX = x1;
  numY = y1;

  dot_main.style.left = `${numX}px`;
  dot_main.style.top = `${numY}px`;

  ch();
});
palette_main.addEventListener("mousemove", (e) => {
  if (!isDrag) return;
  const rect = palette_main.getBoundingClientRect();
  const x1 = e.clientX - rect.x;
  const y1 = e.clientY - rect.y;

  numX = x1;
  numY = y1;

  dot_main.style.left = `${numX}px`;
  dot_main.style.top = `${numY}px`;

  ch();
});
palette_main.addEventListener("mouseup", (e) => {
  isDrag = false;
});
palette_main.addEventListener("mouseout", () => {
  isDrag = false;
});

function ch() {
  const colorData_test = ctx_main.getImageData(numX, numY, 1, 1).data;

  color_result.style.backgroundColor = `rgb(${colorData_test[0]},${colorData_test[1]},${colorData_test[2]})`;
  dot_main_inner.style.backgroundColor = `rgb(${colorData_test[0]},${colorData_test[1]},${colorData_test[2]})`;
}

function convertHex(num) {
  const hex = num.toString(16);

  return hex.padStart(2, "0");
}

function rgbToHex(r, g, b) {
  return "#" + convertHex(r) + convertHex(g) + convertHex(b);
}

// 서브 팔레트
const palette_sub = document.getElementById("palette-sub");
const ctx_sub = palette_sub.getContext("2d");

ctx_sub.arc(250, 250, 250, 0, 2 * Math.PI);

const grad = ctx_sub.createConicGradient(0, 250, 250);

grad.addColorStop(0, "rgb(255, 0, 0)");
grad.addColorStop(0.16, "rgb(255, 255, 0)");
grad.addColorStop(0.33, "rgb(0, 255, 0)");
grad.addColorStop(0.5, "rgb(0, 255, 255)");
grad.addColorStop(0.66, "rgb(0, 0, 255)");
grad.addColorStop(0.83, "rgb(255, 0, 255)");
grad.addColorStop(1, "rgb(255, 0, 0)");

ctx_sub.fillStyle = grad;
ctx_sub.fill();

// 서브 팔레트 점
const dot_sub = document.getElementById("dot-sub");

isDrag = false;

palette_sub.addEventListener("mousedown", (e) => {
  isDrag = true;

  const rect_sub = palette_sub.getBoundingClientRect();
  const x = e.clientX - rect_sub.x;
  const y = e.clientY - rect_sub.y;

  dot_sub.style.left = `${x}px`;
  dot_sub.style.top = `${y}px`;

  const colorData_sub = ctx_sub.getImageData(x, y, 1, 1).data;
  dot_sub.style.backgroundColor = `rgb(${colorData_sub[0]},${colorData_sub[1]},${colorData_sub[2]})`;

  // 생각
  const data = `rgb(${colorData_sub[0]},${colorData_sub[1]},${colorData_sub[2]})`;

  const wgradient_main = ctx_main.createLinearGradient(0, 0, 250, 0);
  wgradient_main.addColorStop(0, "white");
  wgradient_main.addColorStop(1, data);

  ctx_main.fillStyle = wgradient_main;
  ctx_main.fillRect(0, 0, 500, 500);

  hgradient_main.addColorStop(0, "rgba(0,0,0,0)");
  hgradient_main.addColorStop(1, "rgba(0,0,0,1)");

  ctx_main.fillStyle = hgradient_main;
  ctx_main.fillRect(0, 0, 500, 500);

  ch();
});
palette_sub.addEventListener("mousemove", (e) => {
  if (!isDrag) return;

  const rect_sub = palette_sub.getBoundingClientRect();
  const x = e.clientX - rect_sub.x;
  const y = e.clientY - rect_sub.y;

  dot_sub.style.left = `${x}px`;
  dot_sub.style.top = `${y}px`;

  const colorData_sub = ctx_sub.getImageData(x, y, 1, 1).data;
  dot_sub.style.backgroundColor = `rgb(${colorData_sub[0]},${colorData_sub[1]},${colorData_sub[2]})`;

  // 생각
  const data = `rgb(${colorData_sub[0]},${colorData_sub[1]},${colorData_sub[2]})`;

  const wgradient_main = ctx_main.createLinearGradient(0, 0, 250, 0);
  wgradient_main.addColorStop(0, "white");
  wgradient_main.addColorStop(1, data);

  ctx_main.fillStyle = wgradient_main;
  ctx_main.fillRect(0, 0, 500, 500);

  hgradient_main.addColorStop(0, "rgba(0,0,0,0)");
  hgradient_main.addColorStop(1, "rgba(0,0,0,1)");

  ctx_main.fillStyle = hgradient_main;
  ctx_main.fillRect(0, 0, 500, 500);

  ch();
});
palette_sub.addEventListener("mouseup", () => {
  isDrag = false;
});
palette_sub.addEventListener("mouseout", () => {
  isDrag = false;
});
