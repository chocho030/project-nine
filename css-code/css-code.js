const test = document.getElementsByClassName("test");

function copy(num) {
  const text = test[num].innerHTML;
  navigator.clipboard.writeText(text);
}

function pageCh(num) {
  const next_page = document.getElementById("content-" + num);

  for (let i = 1; i < 4; i++) {
    const pages = document.getElementById("content-" + i);

    pages.style.display = "none";
  }

  next_page.style.display = "block";
}
