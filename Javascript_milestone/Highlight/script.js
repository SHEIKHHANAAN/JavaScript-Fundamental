const paragraph = document.getElementById("paragraph");
const words = paragraph.textContent.split(" ");

paragraph.innerHTML = words
  .map(word => {
    if (word.length > 8) {
      return `<span class="highlighted">${word}</span>`;
    } else {
      return word;
    }
  })
  .join(" ");