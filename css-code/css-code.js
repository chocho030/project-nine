const test = document.getElementsByClassName("test");

function copy(num) {
  const text = test[num].innerHTML;
  navigator.clipboard.writeText(text);
}
