// 메인 팔레트
const main = document.getElementById("main");
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

function ch() {
  const colorData_test = ctx_main.getImageData(numX, numY, 1, 1).data;

  color_result.style.backgroundColor = `rgb(${colorData_test[0]},${colorData_test[1]},${colorData_test[2]})`;
  dot_main_inner.style.backgroundColor = `rgb(${colorData_test[0]},${colorData_test[1]},${colorData_test[2]})`;
  rgb_result.innerHTML = `RGB : (${colorData_test[0]},${colorData_test[1]},${colorData_test[2]})`;
  hex_result.innerHTML = rgbToHex(
    colorData_test[0],
    colorData_test[1],
    colorData_test[2]
  );
}

// 점, 결과
const dot_main = document.getElementById("dot-main");

let numX = 0;
let numY = 0;

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

  numX = x;
  numY = y;

  dot_main.style.left = `${numX}px`;
  dot_main.style.top = `${numY}px`;

  ch();
});
palette_main.addEventListener("mousemove", (e) => {
  if (!isDrag) return;

  const rect = palette_main.getBoundingClientRect();
  const x = e.clientX - rect.x;
  const y = e.clientY - rect.y;

  numX = x;
  numY = y;

  dot_main.style.left = `${numX}px`;
  dot_main.style.top = `${numY}px`;

  ch();
});
palette_main.addEventListener("mouseup", () => {
  isDrag = false;
});
palette_main.addEventListener("mouseout", () => {
  isDrag = false;
});

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

// 복사
function copy(type) {
  const text = document.getElementById("result-" + type).innerHTML;
  navigator.clipboard.writeText(text);
}

// 입력
const input_type = document.getElementById("input-type");

const input_rgb = document.getElementById("input-rgb");
const input_hex = document.getElementById("input-hex");
const input_cmyk = document.getElementById("input-cmyk");
const test = document.getElementById("test");

function inputType() {
  if (input_type.value == "rgb") {
    input_rgb.style.display = "block";
    input_hex.style.display = "none";
    input_cmyk.style.display = "none";
  } else if (input_type.value == "hex") {
    input_rgb.style.display = "none";
    input_hex.style.display = "block";
    input_cmyk.style.display = "none";
  } else if (input_type.value == "cmyk") {
    input_rgb.style.display = "none";
    input_hex.style.display = "none";
    input_cmyk.style.display = "block";
  }
}

// 입력 - rgb
const rgb = document.getElementsByClassName("rgb");

for (let i = 0; i < rgb.length; i++) {
  rgb[i].addEventListener("input", funcRgb);
}

function funcRgb() {
  const rgb_r = document.getElementById("rgb-r").value;
  const rgb_g = document.getElementById("rgb-g").value;
  const rgb_b = document.getElementById("rgb-b").value;
  const r = Number(rgb_r);
  const g = Number(rgb_g);
  const b = Number(rgb_b);

  color_result.style.backgroundColor = `rgb(${r},${g},${b})`;
  dot_main_inner.style.backgroundColor = `rgb(${r},${g},${b})`;
  rgb_result.innerHTML = `RGB : (${r},${g},${b})`;
  hex_result.innerHTML = rgbToHex(r, g, b);
}

// 입력- hex
function funcHex() {
  const hex = document.getElementById("hex").value;

  const int_r = hex[1] + hex[2];
  const int_g = hex[3] + hex[4];
  const int_b = hex[5] + hex[6];

  const r = parseInt(int_r, 16);
  const g = parseInt(int_g, 16);
  const b = parseInt(int_b, 16);

  color_result.style.backgroundColor = `rgb(${r},${g},${b})`;
  dot_main_inner.style.backgroundColor = `rgb(${r},${g},${b})`;
  rgb_result.innerHTML = `RGB : (${r},${g},${b})`;
  hex_result.innerHTML = hex;
}

// cmyk 공식, 복사되면 메세지 1-2초

// hex 변경 시, 한자리 숫자는 한자리로만 나오는 문제. > 해결

// border-radius로 깍으면 공간 자체가 깎이는 듯
// // 인식 범위 제한이 됨

// 문제) 서브 색상 바꿀 때도 result-color가 바뀌게 하는 법이 있나?
// // 근데 메인 dot 위치는 안 바뀌니까 그거에도 적용돼야 하는데
// 1. (반영) main, sub dot 위치 모두 반용.
// 2. (대안) sub dot이 이동할 때마다 main dot 위치 초기화.

//

// inner도 canvas로 만들 경우, dot이 작동하지 않는 이유?

// 헤맸던 부분 - conic-gradient
// // conic-gradient 시작 부분 변경?

// 수정 - 스포이드 기능에서 커서가 드래그 중에 영역 밖으로 나가면 isDrag 값이 변하지 않음.
// // 영역 밖으로 나갈 경우에도 isDrag 값이 변경되게 수정
// 문제)
// down > move > out > up > over
// // 원래는 위의 상황에서 이미 뗀 상태인데 움직이는 게 싫어서 out 상황 추가.
// down > move > out > over
// // 그런데 이 상황이 헷갈림.

// rgb 입력창 제한
// 1. 범위 제한
// 2. 정수만 가능하게

// 입력 후 점 위치 변경

// 바

// rgb를 처음에 선택하면 입력창이 안 뜸. onclick은 싫음.
