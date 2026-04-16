let mousePointer = document.getElementById("mouse-pointer");

let hover = false;

document.addEventListener("mousemove", move);
document.addEventListener("mousedown", down);
document.addEventListener("mouseup", up);

document.querySelectorAll(".button").forEach(link => {
  link.addEventListener("mouseenter", enter);
  link.addEventListener("mouseleave", leave);
});

function move(e) {
    if (hover) return;
    mousePointer.style.top = e.pageY + "px";
    mousePointer.style.left = e.pageX + "px";
}

function down() {
    mousePointer.classList.add("mouse-down");
}

function up() {
    mousePointer.classList.remove("mouse-down");
}

function enter(e) {
    hover = true;
    mousePointer.style.opacity = "0.3";

    const rect = e.target.getBoundingClientRect();
    mousePointer.style.top = rect.top + "px";
    mousePointer.style.left = (rect.left - 3) + "px";
    mousePointer.style.width = (rect.width + 6) + "px";
    mousePointer.style.height = rect.height + "px";
    mousePointer.style.transform = "translate(0, 0)";

    mousePointer.style.backgroundColor = getComputedStyle(e.target).color;
    mousePointer.style.borderRadius = "5px";
}

function leave(e) {
    hover = false;
    mousePointer.style.opacity = "1";

    mousePointer.style.width = "10px";
    mousePointer.style.height = "10px";
    mousePointer.style.transform = "translate(-50%, -50%)";

    mousePointer.style.borderRadius = "50%";
}