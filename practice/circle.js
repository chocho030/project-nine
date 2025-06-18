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

//이너
const test2 = document.getElementById("test-cir-2");
const ctx_test2 = test2.getContext("2d");

ctx_test2.arc(250, 250, 200, 0, 2 * Math.PI);

ctx_test2.fillStyle = "white";
ctx_test2.fill();
