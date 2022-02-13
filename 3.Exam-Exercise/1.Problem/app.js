function solve() {
  let creatorInput = document.getElementById("creator");
  let titleInput = document.getElementById("title");
  let categoryInput = document.getElementById("category");
  let contentInput = document.getElementById("content");

  let createBtn = document.querySelector(".btn.create");
  let textArea = document.querySelector(".site-content section");
  let archField = document.querySelector(".archive-section ol");

  createBtn.addEventListener("click", creatContent);

  function creatContent(e) {
    e.preventDefault();

    let articleTag = document.createElement("article");
    articleTag.innerHTML = `<h1>${titleInput.value}</h1>
      <p>Category: <strong>${categoryInput.value}</strong></p>
      <p>Creator: <strong>${creatorInput.value}</strong></p>
      <p>${contentInput.value}</p>
      <div class="buttons">
         <button class="btn delete">Delete</button>
         <button class="btn archive">Archive</button>
      </h1>
      </div>`;

    textArea.appendChild(articleTag);
    const moreInfoButtons = articleTag.querySelectorAll("button");
    moreInfoButtons[0].addEventListener("click", deleteContent);
    moreInfoButtons[1].addEventListener("click", arciveContent);

    let saveTitle = titleInput.value;

    //  creatorInput.value = "";
    //  titleInput.value = "";
    //  contentInput.value = "";
    //  categoryInput.value = "";
    function deleteContent(e) {
      articleTag.remove();
   }

   const sortElements = (sortElement) => {
      Array.from(sortElement.children)
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach((x) => sortElement.appendChild(x));
   };

   function arciveContent(e) {
      let currentArticle = e.currentTarget.parentElement.parentElement;
      let crtLi = document.createElement("li");
      crtLi.textContent = saveTitle;
      currentArticle.remove();
      archField.appendChild(crtLi);
      sortElements(archField);
  }
  } 
}



function solve() {
   let btnCreate = document.querySelector('button.create');
   let mainSection = document.querySelector('main > section');
   let archiveSectionList = document.querySelector('.archive-section > ol')
   let appendChildren = (pr, children) => children.forEach(child => pr.appendChild(child));
   const sortElements = (sortElement) => {
       Array.from(sortElement.children).sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(x => sortElement.appendChild(x));
   };

   btnCreate.addEventListener('click', (e) => {
       e.preventDefault();
       let input = Array.from(document.querySelectorAll('input'));
       let [author, title, typeCategory] = input;
       let textArea = document.querySelector('[name=content]');

       let article = document.createElement('article');
       let titleElement = createElement('h1', title.value);

       let wrapperCategory = createElement('p', 'Category:')
       let category = createElement('strong', typeCategory.value);
       appendChildren(wrapperCategory, [category]);

       let wrapperCreator = createElement('p', 'Creator:')
       let creator = createElement('strong', author.value);
       appendChildren(wrapperCreator, [creator]);

       let pTextArea = createElement('p', textArea.value);

       let divElement = createElement('div', null, ['class=buttons']);
       let btnDelete = createElement('button', 'Delete', ['class=btn delete']);
       btnDelete.addEventListener('click', () => article.remove());

       let btnArchive = createElement('button', 'Archive', ['class=btn archive']);

       let liTitle = title.value;
       btnArchive.addEventListener('click', () => {
           let li = createElement('li',liTitle);
           article.remove()
           archiveSectionList.appendChild(li);
           sortElements(archiveSectionList);
       })
       appendChildren(divElement, [btnDelete, btnArchive]);
       appendChildren(article, [titleElement, wrapperCategory, wrapperCreator, pTextArea, divElement])
       mainSection.appendChild(article)

       textArea.value = '';
       input.forEach(e => e.value = '');
   });

   function createElement(type, text, attributes = []) {
       let element = document.createElement(type);
       if (text) {
           element.textContent = text;
       }
       attributes.map(attr => attr.split('=')).forEach(([name, value]) => {
           element.setAttribute(name, value);
       });
       return element;
   }
}