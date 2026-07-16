function splitIntoWords(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = "";
  words.forEach((word, i) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "glitch";
    wordSpan.setAttribute("data-text", word);
    wordSpan.textContent = word;
    el.appendChild(wordSpan);
    if (i < words.length - 1) {
      el.appendChild(document.createTextNode(" "));
    }
  });
}

document.querySelectorAll(".glitch-text").forEach(splitIntoWords);
