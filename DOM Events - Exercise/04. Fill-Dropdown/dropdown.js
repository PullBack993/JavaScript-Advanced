function addItem() {
    let textElement = document.querySelector('#newItemText')
    let valueElement = document.getElementById('newItemValue')
    let getSelectElement = document.getElementById('menu')
    let creatOpt = document.createElement('option')
    creatOpt.value = valueElement.value
    creatOpt.textContent = textElement.value
    getSelectElement.appendChild(creatOpt)
    textElement.value = ''
    valueElement.value = ''

}

