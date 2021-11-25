function solve() {
  let data = document.getElementById("input").value;

  let sentenses = data
    .split(".")
    .filter((x) => x !== "")
    .map((x) => x + ".");

  let paragraph = Math.ceil(sentenses.length / 3);

  let result = document.getElementById("output");
  for (let index = 0; index < paragraph; index++) {
    result.innerHTML += `<p>${sentenses.splice(0, 3).join("")}</p>`;
  }

}
