function search() {
  let searchText = document.getElementById("searchText").value;
  let allTowns = Array.from(document.querySelectorAll("#towns li"));

  // clear results from previous search.
  allTowns.forEach((element) => {
    element.style.fontWeight = "normal";
    element.style.textDecoration = "none";
  });

  let filterLi = allTowns.filter((x) => x.textContent.includes(searchText));
  let styleLiEls = filterLi.forEach((x) => {
    x.style.fontWeight = "bold";
    x.style.textDecoration = "underline";
  });
  let resultDiv = document.getElementById('result');
  resultDiv.textContent = `${filterLi.length} matches found`;
}
