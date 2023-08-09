/* This function gets the current time and rotates the clock hands accordingly */
function setDate() {
  const now = new Date(); /* Get the current date and time */

  /* Calculate the rotation for the second hand */
  const seconds = now.getSeconds();
  const secondsDegrees =
    (seconds / 60) * 360 +
    90; /* We add 90 because we have offset the hands by 90 degrees in the CSS */
  document.querySelector(
    ".second-hand"
  ).style.transform = `rotate(${secondsDegrees}deg)`;

  /* Calculate the rotation for the minute hand */
  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  document.querySelector(
    ".minute-hand"
  ).style.transform = `rotate(${minsDegrees}deg)`;

  /* Calculate the rotation for the hour hand */
  const hour = now.getHours();
  const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hourDegrees}deg)`;
}

/* Update the time every second (1000 milliseconds) */
setInterval(setDate, 1000);

/* Initialize the clock */
setDate();
