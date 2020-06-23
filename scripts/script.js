const editButton = document.getElementById("edit-button");
const backgroundText = document.getElementById("background-text");
const bannerText = document.getElementById("banner-text");
const bannerArrow = document.getElementById("banner-arrow");
const originalHTMLContent = document
  .getElementById("main")
  .innerHTML.replace(/(\r\n|\n|\r)/gm, "");
const mainSection = document.getElementById("main");

backgroundText.innerText = originalHTMLContent;

function edit() {
  backgroundText.innerText = originalHTMLContent;
  mainSection.innerHTML = originalHTMLContent;
  editButton.innerText =
    editButton.innerText === "Hack it!" ? "Cancel!" : "Hack it!";
  editButton.classList.toggle("navbar__item--invert");
  backgroundText.classList.toggle("banner__background-text--edit");
  bannerText.classList.toggle("banner__title-text--hidden");
  bannerArrow.classList.toggle("banner__arrow--hide");
}

editButton.addEventListener("click", edit);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    edit();
  }
});

backgroundText.addEventListener("keyup", function (event) {
  mainSection.innerHTML = this.innerText;
});
