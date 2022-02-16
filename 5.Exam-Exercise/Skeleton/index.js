function solve() {
    let [trainingSection, adminSection] = document.querySelectorAll(`section`);
    let addBtn = adminSection.querySelector('button');
    let [lectureNameInput, dateInput] = adminSection.querySelectorAll(`input`);
    let selectModule = adminSection.querySelector(`select`);
    let modulesDiv = trainingSection.querySelector(`.modules`);
 
    addBtn.addEventListener('click', addTraining);
 
    let addedModules = [];
 
    function addTraining(e) {
        e.preventDefault();
 
        if (lectureNameInput.value == '' || dateInput.value == '' || selectModule.value == 'Select module') {
            return;
        }
 
        let name = lectureNameInput.value;
        let [date, hour] = dateInput.value.split('T');
        let module = selectModule.value;
        date = date.split('-').join('/')
 
 
        let div = document.createElement('div');
        div.classList.add(`module`);
        let h3 = document.createElement(`h3`);
        h3.textContent = `${module.toUpperCase()}-MODULE`;
        div.appendChild(h3);
        let ul = document.createElement(`ul`);
        let li = document.createElement(`li`);
        li.classList.add(`flex`);
        let h4 = document.createElement(`h4`);
        h4.textContent = `${name} - ${date} - ${hour}`;
        let button = document.createElement(`button`);
        button.classList.add(`red`);
        button.textContent = `Del`;
        button.addEventListener(`click`, deleteTraining)
        li.appendChild(h4);
        li.appendChild(button);
        ul.appendChild(li);
        div.appendChild(ul);
 
        if (addedModules.includes(module) === false) {
            modulesDiv.appendChild(div);
            addedModules.push(module);
        } else {
            let modules = Array.from(modulesDiv.querySelectorAll(`.module`));
            let currentModule = modules.find(m => {
                let moduleName = m.querySelector('h3');
                let wantedName = `${module.toUpperCase()}-MODULE`;
                return moduleName.textContent === wantedName;
            });
            currentModule.querySelector(`ul`).appendChild(li);
            let liElements = Array.from(currentModule.querySelectorAll('li'));
            liElements.sort((a, b) => {
                let aInfo = a.textContent.split(' - ');
                aInfo.shift();
                let aDate = aInfo.join(' - ');
                let bInfo = b.textContent.split(' - ');
                bInfo.shift();
                let bDate = bInfo.join(' - ');
 
                return aDate.localeCompare(bDate);
            });
            let ul = currentModule.querySelector(`ul`);
            while (ul.firstChild) {
                ul.firstChild.remove();
            }
            for (let li of liElements) {
                ul.appendChild(li);
            }
        }
 
        lectureNameInput.value = '';
        dateInput.value = '';
        selectModule.value = 'Select module'
    }
 
    function deleteTraining(e) {
        e.preventDefault();
 
        let itemToRemove = e.target.parentElement;
        let ulToChange = e.target.parentElement.parentElement;
        let currentModule = e.target.parentElement.parentElement.parentElement;
 
        if (Array.from(ulToChange.querySelectorAll('li')).length === 1) {
            currentModule.remove();
        } else {
            ulToChange.removeChild(itemToRemove);
        }
    }
};