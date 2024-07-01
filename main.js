"use strict";

const day = document.getElementById("day");
const utc = document.getElementById("utc");

function updateDate() {
  const date = new Date();
  const weekday = date.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const utcTimeStamp = date.toUTCString();

  utc.textContent = utcTimeStamp;
  day.textContent = weekday;

  setTimeout(() => updateDate(), 1000);
}

updateDate();
