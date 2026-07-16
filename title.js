const titleText = "Rabbit3c";

let title = document.getElementById("title");
let cursor = document.getElementById("cursor");
let cursorFiller = document.getElementById("cursor-filler");
let titleContainer = document.getElementById("title-container");
let hiddenItems = document.getElementsByClassName("hidden-item");

let i = 0;

let interval = null;

function animate() {
  title.innerHTML += titleText[i];
  i++;

  if (i < titleText.length) {
    setTimeout(animate, 50 + Math.random() * 150);
  } else {
    interval = setInterval(animateCursor, 300);
    setTimeout(stopCursorAnimation, 1000);

    setTimeout(moveUp, 1000);
    setTimeout(showHiddenItems, 2000);
  }
}

function animateCursor() {
  if (cursor.classList.contains("black-green")) {
    cursor.classList.remove("black-green");
  } else {
    cursor.classList.add("black-green");
  }
}

function stopCursorAnimation() {
  clearInterval(interval);
  cursor.classList.add("black-green");
}

function moveUp() {
  titleContainer.classList.add("moved-up");
  title.classList.add("small");
  cursor.classList.add("small");
  cursorFiller.classList.add("small");
}

function showHiddenItems() {
  for (let hiddenItem of hiddenItems) {
    hiddenItem.classList.add("visible");
  }
}

animate();
