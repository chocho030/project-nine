// 메인 팔레트

const palette_main = document.getElementById("palette-main");
const ctx_main = palette_main.getContext("2d");

const wgradient_main = ctx_main.createLinearGradient(0, 0, 250, 0);

wgradient_main.addColorStop(0, "white");
wgradient_main.addColorStop(1, "blue");

ctx_main.fillStyle = wgradient_main;
ctx_main.fillRect(0, 0, 500, 500);

const hgradient_main = ctx_main.createLinearGradient(0, 0, 0, 250);

hgradient_main.addColorStop(0, "rgba(0,0,0,0)");
hgradient_main.addColorStop(1, "rgba(0,0,0,1)");

ctx_main.fillStyle = hgradient_main;
ctx_main.fillRect(0, 0, 500, 500);

// 점, 결과
const dot_main = document.getElementById("dot-main");

isDrag = false;

const color_result = document.getElementById("result-color");
const hex_result = document.getElementById("result-hex");
const rgb_result = document.getElementById("result-rgb");
const dot_main_inner = document.getElementById("dot-main-inner");

palette_main.addEventListener("mousedown", (e) => {
  isDrag = true;

  const rect = palette_main.getBoundingClientRect();
  const x = e.clientX - rect.x;
  const y = e.clientY - rect.y;

  dot_main.style.left = `${x}px`;
  dot_main.style.top = `${y}px`;

  const colorData = ctx_main.getImageData(x, y, 1, 1).data;
  rgb_result.innerHTML = `RGB : (${colorData[0]},${colorData[1]},${colorData[2]})`;
  hex_result.innerHTML = rgbToHex(colorData[0], colorData[1], colorData[2]);
  color_result.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
});
palette_main.addEventListener("mousemove", (e) => {
  if (!isDrag) return;
  const rect = palette_main.getBoundingClientRect();
  const x = e.clientX - rect.x;
  const y = e.clientY - rect.y;

  dot_main.style.left = `${x}px`;
  dot_main.style.top = `${y}px`;

  const colorData = ctx_main.getImageData(x, y, 1, 1).data;
  rgb_result.innerHTML = `RGB : (${colorData[0]},${colorData[1]},${colorData[2]})`;
  hex_result.innerHTML = rgbToHex(colorData[0], colorData[1], colorData[2]);
  color_result.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
});
palette_main.addEventListener("mouseup", (e) => {
  isDrag = false;
});

function rgbToHex(r, g, b) {
  return "hex : #" + convert16(r) + convert16(g) + convert16(b);
}

function convert16(num) {
  const hex = num.toString(16);
  return hex;
}

// 서브 팔레트 점
const palette_sub = document.getElementById("palette-sub");
const dot_sub = document.getElementById("dot-sub");

isDrag = false;

palette_sub.addEventListener("mousedown", (e) => {
  isDrag = true;

  const rect_sub = palette_sub.getBoundingClientRect();
  const x = e.clientX - rect_sub.x;
  const y = e.clientY - rect_sub.y;

  dot_sub.style.left = `${x}px`;
  dot_sub.style.top = `${y}px`;

  const colorData = palette_sub.style.background;

  wgradient_main.addColorStop(1, colorData);
});
palette_sub.addEventListener("mousemove", (e) => {
  if (!isDrag) return;

  const rect_sub = palette_sub.getBoundingClientRect();
  const x = e.clientX - rect_sub.x;
  const y = e.clientY - rect_sub.y;

  dot_sub.style.left = `${x}px`;
  dot_sub.style.top = `${y}px`;
});
palette_sub.addEventListener("mouseup", () => {
  isDrag = false;
});

// 복사
function copy(type) {
  const text = document.getElementById("result-" + type).innerHTML;
  navigator.clipboard.writeText(text);
}

// cmyk 공식, 복사되면 메세지 1-2초, 서브 팔레트 스포이드 기능, 전체 복사?
