function sumTable() {
  let tables = document.querySelectorAll("table tr");
  let reuslt = 0;
  for (let i = 1; i < tables.length - 1; i++) {
    const cols = tables[i].children;
    let priceCols = cols[cols.length - 1].textContent;
    reuslt += Number(priceCols)
    
  }
  document.getElementById('sum').textContent = reuslt
}


function sumTable() {
    const rows = [...document.querySelectorAll('table tr')].slice(1, -1);

    document.getElementById('sum').textContent = rows.reduce((sum, row) =>{
        return sum + Number(row.lastElementChild.textContent)
    }, 0)
    
}