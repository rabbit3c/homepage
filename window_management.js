let closeWebsite = document.querySelector("#website .close");
closeWebsite.addEventListener("click", reloadWebsite);

let fullscreenWebsite = document.querySelector("#website .fullscreen");
fullscreenWebsite.addEventListener("click", toggleFullscreen);

let minimizeWebsite = document.querySelector("#website .minimize");
minimizeWebsite.addEventListener("click", reloadWebsite);

function reloadWebsite() {
  window.location.reload();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

let ids = ["gravity", "freequiz", "little-projects", "homelab"];

const actions = {
  close: close,
  fullscreen: fullscreen,
  minimize: minimize,
};

const urls = {
  gravity: "/gravity",
  freequiz: "https://www.freequiz.ch",
  "little-projects": "/norisknofun",
  homelab: "/network",
};

for (let id of ids) {
  for (let [c, action] of Object.entries(actions)) {
    let element = document.querySelector(`#${id} .${c}`);
    element.addEventListener("click", () => action(id));
  }
}

function close(id) {
  let element = document.getElementById(id);
  element.classList.add("hidden-item");
}

function fullscreen(id) {
  let element = document.getElementById(id);

  if (element.classList.contains("fullscreen")) {
    element.classList.remove("fullscreen");
    loadingOverlay.remove();
    if (iframe != null) iframe.remove();
    clearTimeout(loadingTimeout);
    return;
  }

  element.classList.add("fullscreen");
  showLoadingOverlay(id);
}

function minimize(id) {
  let element = document.getElementById(id);
  element.classList.add("hidden-item");
}

let loadingOverlay = null;
let iframe = null;
let loadingCounter = 0;
let maxCounter = 0;
let loadingTimeout = null;

function showLoadingOverlay(id) {
  let element = document.getElementById(id);
  const overlay = document.createElement("div");
  overlay.className = "loading-bar";

  maxCounter = Math.floor((window.innerWidth * 0.6) / 23);
  overlay.style.width = maxCounter * 23 + 4 + 3 + "px";

  loadingOverlay = overlay;
  element.appendChild(overlay);

  loadingCounter = 0;
  let time = (Math.random() * 3000) / maxCounter;
  loadingTimeout = setTimeout(loadingAnimation, time, id);
}

function loadingAnimation(id) {
  loadingCounter++;
  console.log(loadingCounter);
  console.log(maxCounter);
  console.log();

  const filler = document.createElement("div");
  filler.className = "loading-bar-filler";
  loadingOverlay.appendChild(filler);

  if (loadingCounter == maxCounter) {
    openSite(id);
    return;
  }

  let time = (Math.random() * 3000) / maxCounter;
  loadingTimeout = setTimeout(loadingAnimation, time, id);
}

function openSite(id) {
  let url = urls[id];
  if (url[0] == "/") {
    addIFrame(id);
    return;
  }

  window.open(urls[id], "_self");
}

function addIFrame(id) {
  loadingOverlay.remove();

  iframe = document.createElement("iframe");
  iframe.src = urls[id];
  iframe.classList.add("iframe");

  let element = document.getElementById(id);
  element.appendChild(iframe);

  return;
}
