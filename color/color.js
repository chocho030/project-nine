// 메인 팔레트

const palette_main = document.getElementById("palette-main");
const ctx_main = palette_main.getContext("2d");

const wgradient_main = ctx_main.createLinearGradient(0, 0, 500, 0);

wgradient_main.addColorStop(0, "white");
wgradient_main.addColorStop(1, "blue");

ctx_main.fillStyle = wgradient_main;
ctx_main.fillRect(0, 0, 500, 500);

const hgradient_main = ctx_main.createLinearGradient(0, 0, 0, 500);

hgradient_main.addColorStop(0, "rgba(255,255,255,0 )");
hgradient_main.addColorStop(1, "rgba(0,0,0,1)");

ctx_main.fillStyle = hgradient_main;
ctx_main.fillRect(0, 0, 500, 500);

// 서브 팔레트

const palette_sub = document.getElementById("palette-sub");
const ctx_sub = palette_sub.getContext("2d");

const wgradient_sub = ctx_sub.createLinearGradient(0, 0, 0, 500);

wgradient_sub.addColorStop(0, "rgb(255, 0, 0)");
wgradient_sub.addColorStop(0.16, "rgb(255, 255, 0)");
wgradient_sub.addColorStop(0.32, "rgb(0, 255, 0)");
wgradient_sub.addColorStop(0.5, "rgb(0, 255, 255)");
wgradient_sub.addColorStop(0.66, "rgb(0, 0, 255)");
wgradient_sub.addColorStop(0.82, "rgb(255, 0, 255)");
wgradient_sub.addColorStop(1, "rgb(255, 0, 0)");

ctx_sub.fillStyle = wgradient_sub;
ctx_sub.fillRect(0, 0, 20, 500);

// 점 추가. 결과값  ++ 복사

// 점
const dot_main = document.getElementById("dot-main");

isDrag = false;

palette_main.addEventListener("mousedown", (e) => {
  isDrag = true;
  const rect = palette_main.getBoundingClientRect();
  const x = e.clientX - rect.x;
  const y = e.clientY - rect.y;

  dot_main.style.left = `${e.clientX}px`;
  dot_main.style.top = `${e.clientY}px`;
});
palette_main.addEventListener("mousemove", (e) => {
  if (!isDrag) return;
  const rect = palette_main.getBoundingClientRect();
  const x = e.clientX - rect.x;
  const y = e.clientY - rect.y;

  dot_main.style.left = `${e.clientX}px`;
  dot_main.style.top = `${e.clientY}px`;
});
palette_main.addEventListener("mouseup", (e) => {
  isDrag = false;
  const rect = palette_main.getBoundingClientRect();
  const x = e.clientX - rect.x;
  const y = e.clientY - rect.y;

  dot_main.style.left = `${e.clientX}px`;
  dot_main.style.top = `${e.clientY}px`;
});
