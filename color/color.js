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
  dot_main_inner.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
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
  dot_main_inner.style.backgroundColor = `rgb(${colorData[0]},${colorData[1]},${colorData[2]})`;
});
palette_main.addEventListener("mouseup", (e) => {
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

// cmyk 공식, 복사되면 메세지 1-2초, 서브 팔레트 스포이드 기능
// 역 버전, r,g,b 입력 시 팔레트

// hex 변경 시, 한자리 숫자는 한자리로만 나오는 문제. > 해결

// 헤맸던 부분 - conic-gradient
// // conic-gradient 시작 부분 변경?

// inner도 canvas로 만들 경우, dot이 작동하지 않는 이유?

// border-radius로 깍으면 공간 자체가 깎이는 듯
// // 인식 범위 제한이 됨

// 함수 안에서 정의됨 건 밖에서도 그대로 적용?

// 문제) 서브 색상 바꿀 때도 결괏값이 바뀌게 하는 법이 있나?
// // 근데 메인 dot 위치는 안 바뀌니까 그거에도 적용돼야 하는데
// 희망 사항) main, sub dot 위치 모두 반용.
// 대안) sub dot이 이동할 때마다 main dot 위치 초기화.

// 수정 - 스포이드 기능에서 커서가 드래그 중에 영역 밖으로 나가면 isDrag 값이 변하지 않음.
// // 영역 밖으로 나갈 경우에도 isDrag 값이 변경되게 수정
// 문제)
// down > move > out > up > over
// // 원래는 위의 상황에서 이미 뗀 상태인데 움직이는 게 싫어서 out 상황 추가.
// down > move > out > over
// // 그런데 이 상황이 헷갈림.
