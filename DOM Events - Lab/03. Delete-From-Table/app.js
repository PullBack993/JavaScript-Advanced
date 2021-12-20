function deleteByEmail() {
  let searchEl = document.getElementsByName("email")[0].value;
  let takeEmails = Array.from(
    document.querySelectorAll("tbody td:last-of-type")
  );

  for (const el of takeEmails) {
    if (el.textContent == searchEl) {
      let tdRow = el.parentNode;
      tdRow.parentNode.removeChild(tdRow);
      document.getElementById("result").textContent = "Deleted";
      return;
    }
  }
  document.getElementById("result").textContent = "Not found.";

  document.getElementsByName("email")[0].value = "";
}
