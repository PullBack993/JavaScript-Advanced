function toggle() {
  let getButtonEl = document.getElementsByClassName("button")[0];
  let getTextEls = document.getElementById("extra");

  getButtonEl.textContent =
    getButtonEl.textContent === "More" ? "Less" : "More";
  getTextEls.style.display =
    getTextEls.style.display === "block" ? "none" : "block";
}
