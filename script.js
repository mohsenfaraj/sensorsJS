const textbox = document.getElementById("textbox");
const cross = document.getElementById("cross");
if (window.DeviceOrientationEvent) {
  window.addEventListener(
    "deviceorientation",
    (event) => {
      const rotateDegrees = event.alpha; // alpha: rotation around z-axis
      const leftToRight = event.gamma; // gamma: left to right
      const frontToBack = event.beta; // beta: front back motion
      cross.style.left = `calc(50% - ${event.gamma * 10}px)`;
      cross.style.top = `calc(50% - ${event.beta * 10}px)`;
      textbox.innerText = `alpha: ${event.alpha}\n Beta: ${event.beta}\n gamma:${event.gamma}`;
      handleOrientationEvent(frontToBack, leftToRight, rotateDegrees);
    },
    true
  );
}

const handleOrientationEvent = (frontToBack, leftToRight, rotateDegrees) => {
  // do something amazing
};
