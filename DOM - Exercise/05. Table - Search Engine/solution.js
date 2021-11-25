function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchEl = document.getElementById("searchField").value;
    let rowEls = Array.from(document.querySelectorAll(".container tbody tr"));

    //clear previous search(style)
    rowEls.forEach((row) => {
      row.className = "";
    });

    let filteredRows = rowEls.filter((row) => {
      let values = Array.from(row.children);
      if (values.some((td) => td.textContent.includes(searchEl))) {
        row.className = "select";
        let a = 5;
      }
    });
    document.getElementById('searchField').value = '';
  }
}
