function solve() {
  let addBtn = document.querySelector(".form-control button");
  let trainingsArea = document.querySelector(".modules");

  let lectureName = document.querySelector('input[name="lecture-name"]');
  let lectureDate = document.querySelector('input[name="lecture-date"]');
  let lectureModule = document.querySelector('select[name="lecture-module"]');
  addBtn.addEventListener("click", addContent);

  let trainings = {};

  function addContent(e) {
    e.preventDefault();
    if (
      lectureName.value === "" ||
      lectureDate.value === "" ||
      lectureModule.value === "Select module"
    ) {
      return;
    }


    let modules = lectureModule.value;
    let lecture = lectureName.value;
    let date = lectureDate.value;
    let formatedData = dataFormat(date);

    lectureModule.value = ''
    lectureName.value = ''
    lectureDate.value = ''

    if (!trainings[modules]) {
      trainings[modules] = [];
    }
    let currentModule = { lecture: lecture, date: formatedData };
    trainings[modules].push(currentModule);

    trainingsArea.innerHTML = ''

    for (const key in trainings) {
      let ulElement = document.createElement("ul");

      trainings[key]
        .sort((a, b) => a.date.localeCompare(b.date))
        .forEach(({ lecture, date }) => {
          let lctEl = createLecture(lecture, date);
          ulElement.appendChild(lctEl);

          let deleteBtn = lctEl.querySelector("button");
          deleteBtn.addEventListener("click", (e) => {

            trainings[key] = trainings[key].filter(
              (x) => !(x.lecture === lecture && x.date === date)
            );
            if(trainings[key].length == 0){
                delete trainings[key];
                e.currentTarget.parentNode.parentNode.parentNode.remove()
            }else{
            e.currentTarget.parentNode.remove();

            }
        
          });
        });
        let module = creatModule(key)
        module.appendChild(ulElement)
        trainingsArea.appendChild(module)

    }
  }
  function creatModule(nameModule) {
    let divElement = document.createElement("div");
    divElement.classList.add('module')
    let tHeaderEl = document.createElement("h3");
    tHeaderEl.textContent = `${nameModule.toUpperCase()}-MODULE`
    divElement.appendChild(tHeaderEl)
    return divElement
  }

  function createLecture(lectureName, date) {
    let li = document.createElement("li");
    li.classList.add("flex");
    let headerEl = document.createElement("h4");
    headerEl.textContent = `${lectureName} - ${date}`;
    let creatBtn = document.createElement("button");
    creatBtn.classList.add("red");
    creatBtn.textContent = "Del";

    li.appendChild(headerEl);
    li.appendChild(creatBtn);
    return li;
  }
  function dataFormat(date) {
    date = date.split("-");
    date = date.join("/");
    date = date.split("T");
    date = date.join(" - ");
    return date;
  }
}
