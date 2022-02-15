const { send } = require("process")

function solution() {
    let inputElement = document.querySelector('.card input')
    let addGiftBtn = document.querySelectorAll('.card button')[0]
    let giftsArea = document.querySelectorAll('.card ul')[0]

    addGiftBtn.addEventListener('click', appendGift)

    function appendGift(e){
        e.preventDefault()

        let li = document.createElement('li')
        li.className = 'gift'
        li.textContent = inputElement.value
        let sentBtn = document.createElement('button')
        sentBtn.textContent = 'Send'
        sentBtn.id = 'secondButton'
        let discBtn = document.createElement('button')
        discBtn.textContent = 'Discard'
        discBtn.id = 'discardButton'

        li.appendChild(sentBtn)
        li.appendChild(discBtn)
        giftsArea.appendChild(li)

        const sortElements = (sortElement) => {
            Array.from(sortElement.children)
               .sort((a, b) => a.textContent.localeCompare(b.textContent))
               .forEach((x) => sortElement.appendChild(x));
         };
      
        sortElements(giftsArea)
        
         let saveContent = inputElement.value

        let sendButton = li.querySelectorAll('button')[0]
        let discardBtn = li.querySelectorAll('button')[1]

        sendButton.addEventListener('click', send)
        discardBtn.addEventListener('click', discard)

        let allUl = document.querySelectorAll('.card ul')

        function send(e){
            let li = document.createElement('li')
            li.classList.add('gift')
            li.textContent = saveContent
            li.innerHTML = `${saveContent}`
            allUl[1].appendChild(li)
            e.target.parentElement.remove()
        }

        function discard(e){
            let li = document.createElement('li')
            li.classList.add('gift')
            li.textContent = saveContent
            li.innerHTML = `${saveContent}`
            allUl[2].appendChild(li)
            e.target.parentElement.remove()
        }
        inputElement.value =''

    }   

}

let sections = document.querySelectorAll('section');
let addBtn=sections[0].children[1].children[1];
let inputField = sections[0].children[1].children[0];

inputField.value="b";

addBtn.click()

let listOfGifts = sections[1].children[1].children;
assert.equal(listOfGifts.length,1,"list of gifts length is not correct");
assert.equal(listOfGifts[0].textContent,"bSendDiscard","gift in not added correctly");
assert.equal(listOfGifts[0].children.length,2, "gift does not have buttons");
assert.equal(listOfGifts[0].children[0].tagName,"BUTTON", "gift does not have buttons");
assert.equal(listOfGifts[0].children[1].tagName,"BUTTON", "gift does not have buttons");

//sorting
inputField.value="a";
addBtn.click()
assert.equal(listOfGifts[0].textContent,"aSendDiscard","gift in not added correctly");
assert.equal(listOfGifts[1].textContent,"bSendDiscard","gift in not added correctly");