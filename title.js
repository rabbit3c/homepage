const titleText = "Rabbit3c";

let title = document.getElementById("title");
let cursor = document.getElementById("cursor");
let i = 0;

let interval = null;

function animate() {
    title.innerHTML += titleText[i];
    i++;

    if (i == 6) {
        setTimeout(animate, 1000);
        interval = setInterval(animateCursor, 300);
        setTimeout(stopCursorAnimation, 1000);
    }
    else if (i < titleText.length) {
        setTimeout(animate, 50 + Math.random() * 100);
    }
    else {
        interval = setInterval(animateCursor, 300);
        setTimeout(stopCursorAnimation, 2000);
    }
}

function stopCursorAnimation() {
    clearInterval(interval);
    cursor.className = "display-1 text-dark";
}

function animateCursor() {
    if (cursor.className == "display-1 text-dark") {
        cursor.className = "display-1 text-light";
    }
    else {
       cursor.className = "display-1 text-dark";
    }
    
}

animate();