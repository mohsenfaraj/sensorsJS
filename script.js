const textbox = document.getElementById("textbox");
const cross = document.getElementById("cross");
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      cross.style.left = `calc(50% - ${event.gamma * 10}px)`;
      cross.style.top = `calc(50% - ${event.beta * 10}px)`;
      textbox.innerText = `alpha: ${event.alpha}\n Beta: ${event.beta}\n gamma:${event.gamma}`;
    },
    true
  );
}
