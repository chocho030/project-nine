isDrag = false;
palette_main.addEventListener("mousedown", (e) => { // 사용자가 클릭하면
  isDrag = true;
  마우스를 따라가라();
});
palette_main.addEventListener("mousemove", (e) => { // 마우스가 이동할때
  if (!isDrag) return;
  마우스를 따라가라();
});
palette_main.addEventListener("mouseup", (e) => {
  isDrag = false;
  마우스를 따라가라();
});

드래그 라는 동작을 이해해야함

클릭 > 마우스 따라감 > 때기

