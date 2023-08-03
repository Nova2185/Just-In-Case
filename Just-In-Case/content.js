// content.js
let lastActivityTime = new Date().getTime();

function updateActivityTime() {
  lastActivityTime = new Date().getTime();
}

document.addEventListener('mousedown', updateActivityTime);
document.addEventListener('keydown', updateActivityTime);
document.addEventListener('scroll', updateActivityTime);
document.addEventListener('mousemove', updateActivityTime);
