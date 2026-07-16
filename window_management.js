let dismissWebsite = document.getElementById("dismiss-website");
dismissWebsite.addEventListener("click", reloadWebsite);

let dismissGravity = document.getElementById("dismiss-gravity");
dismissGravity.addEventListener("click", () => dismiss("gravity"));

let dismissFreequiz = document.getElementById("dismiss-freequiz");
dismissFreequiz.addEventListener("click", () => dismiss("freequiz"));

let dismissLittleProjects = document.getElementById("dismiss-little-projects");
dismissLittleProjects.addEventListener("click", () =>
  dismiss("little-projects"),
);

let dismissHomelab = document.getElementById("dismiss-homelab");
dismissHomelab.addEventListener("click", () => dismiss("homelab"));

function dismiss(window) {
  let element = document.getElementById(window);
  element.classList.add("hidden-item");
}

function reloadWebsite() {
  window.location.reload();
}
