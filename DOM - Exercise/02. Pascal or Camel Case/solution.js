function solve() {
  let text = document.querySelector("#text").value; // AsdD
  let namingConvention = document.querySelector("#naming-convention").value; // Pascal Case
  let result = applyNamingConvention(text, namingConvention);

  let spanElement = document.getElementById("result");
  spanElement.textContent = result;

  function applyNamingConvention(text, convention) {
    const conventionSwitch = {
      "Pascal Case": () =>
        text
          .toLowerCase()
          .split(" ")
          .map((x) => x[0].toUpperCase() + x.slice(1))
          .join('',),
      "Camel Case": () =>
        text
          .toLowerCase()
          .split(" ")
          .map((x, i) => (x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x))
          .join(''),
      default: () => "Error!",
    };
    return (conventionSwitch[convention] || conventionSwitch.default)();
  }
}
