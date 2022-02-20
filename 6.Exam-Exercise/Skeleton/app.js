function solve() {
    let addBtn = document.getElementById('add')

    let taskName = document.getElementById('task')
    let description = document.getElementById('description')
    let date = document.getElementById('date')

    let taskArea = document.querySelectorAll('section')[1].children[1]
    let inProgres = document.querySelectorAll('section')[2].children[1]
    let complete = document.querySelectorAll('section')[3].children[1]


    addBtn.addEventListener('click', addTask)

    function addTask(e){
        e.preventDefault()
        if (!taskName.value || !description.value || !date.value) {return}

        let articleTag = document.createElement('article')

        let tHeaderTag = document.createElement('h3')
        tHeaderTag.textContent = taskName.value
        let paraTag = document.createElement('p')
        paraTag.textContent = `Description: ${description.value}`
        let secParaTag = document.createElement('p')
        secParaTag.textContent = `Due Date: ${date.value}`

        taskName.value = ''
        description.value = ''
        date.value  = ''

        let divTag = document.createElement('div')
        let startBtn = document.createElement('button')
        startBtn.classList.add('green')
        startBtn.textContent = 'Start'
        startBtn.addEventListener('click', startTask)

        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('red')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteElements)

        divTag.appendChild(startBtn)
        divTag.appendChild(deleteBtn)
        
        articleTag.appendChild(tHeaderTag)
        articleTag.appendChild(paraTag)
        articleTag.appendChild(secParaTag)
        articleTag.appendChild(divTag)

        taskArea.appendChild(articleTag)

        function startTask(e){
            let getArticleTag = e.currentTarget.parentElement.parentElement
            let delBtn = getArticleTag.lastChild.children[0]
            let finishBtn = getArticleTag.lastChild.children[1]
            delBtn.className = 'red'
            delBtn.textContent = 'Delete'
            delBtn.removeEventListener
            finishBtn.removeEventListener
            delBtn.addEventListener('click', deleteElements)
            finishBtn.addEventListener('click', complate)
            finishBtn.className = 'orange'
            finishBtn.textContent = 'Finish'

            let divTag = getArticleTag.querySelector('div')
            divTag.appendChild(delBtn)
            divTag.appendChild(finishBtn)
            getArticleTag.appendChild(divTag)
            inProgres.appendChild(getArticleTag)

        }
        function complate(e){
            let getArticleTag = e.currentTarget.parentElement.parentElement
            getArticleTag.lastElementChild.remove()
            complete.appendChild(getArticleTag)

        }

        function deleteElements(e){
            e.currentTarget.parentElement.parentElement.remove()
        }
   
    }

}

