import "./styles.css";

const div = document.querySelector("div");
const ball = document.createElement("div");

div.style.width = "500px";
div.style.height = "400px";
div.style.background = "#141414";
div.style.margin = "auto";

div.append(ball);

ball.style.background = "red";
ball.style.height = "50px";
ball.style.width = "50px";
ball.style.borderRadius = "50%";
ball.style.position = "absolute";
ball.style.overflow = "hidden";

const pos = {
  x: 100,
  y: 100,
  dx: 1,
  dy: 1,
  speed: 5
};

let mover = requestAnimationFrame(ani);

function ani(time) {
  if (pos.x > 480) {
    pos.dx = -1;
  } else if (pos.x <= 0) {
    pos.dx = 1;
  }
  if (pos.y > 350) {
    pos.dy = -1;
  } else if (pos.y <= 0) {
    pos.dy = 1;
  }
  pos.x += pos.speed * pos.dx;
  pos.y += pos.speed * pos.dy;
  ball.style.left = `${pos.x}px`;
  ball.style.top = `${pos.y}px`;
  mover = requestAnimationFrame(ani);
}
