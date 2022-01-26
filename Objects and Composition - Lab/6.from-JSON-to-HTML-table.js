function JsonToHtmlTable(json) {
  let arr = JSON.parse(json);
  let outputArr = ["<table>"];
  let firstLine = Object.keys(arr[0]);
  outputArr.push(keyRow(firstLine));
  outputArr.push(valueRow(arr));
  outputArr.push("</table>");

  function keyRow(firstLine) {
    let result = "";

    for (let i = 0; i < Object.keys(firstLine).length; i++) {
      if (i == 0) {
        result += `    <tr><th>${firstLine[i]}</th>`;
      } else if (i === Object.keys(firstLine).length - 1) {
        result += `<th>${firstLine[i].trim()}</th></tr>`;
      } else {
        result += `<th>${firstLine[i]}</th>`;
      }
    }
    return result;
  }

  function valueRow(arr) {
    let result = [];

    for (let i = 0; i < Object.values(arr).length; i++) {
        
      let currentResult = "";

      for (let r = 0; r < Object.values(arr[i]).length; r++) {
        currentObj = Object.values(arr[i])[r];
        if (r == 0) {
          currentResult += `    <tr><td>${currentObj}</td>`;
        } else if (r === Object.values(arr[i]).length - 1) {
          currentResult += `<td>${currentObj}</td></tr>`;
        } else {
          currentResult += `<td>${currentObj}</td>`;
        }
      }
      result.push(currentResult);

    }
    return result.join('\n');
  }



  return outputArr.join("\n");
}

console.log(JsonToHtmlTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`));

console.log(JsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`));
