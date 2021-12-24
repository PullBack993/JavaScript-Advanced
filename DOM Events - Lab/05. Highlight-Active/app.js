function focused() {
    let getEl = Array.from(document.querySelectorAll('div input'))

    getEl.forEach(el => {
        el.addEventListener('focus', focus)
    });

    getEl.forEach(el => {
        el.addEventListener('blur', focusLost)
    })
    
    function focus(e){
        let parent = e.target.parentNode;
        parent.classList.add("focused")
    }

    function focusLost(e){
        let parent = e.target.parentNode;
        parent.classList.remove("focused")
    }
}


// function focus() {
//     let mainDiv = document.getElementsByTagName("div")[0];

//     Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
//         element.addEventListener("focus",focus);
//     });

//     Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
//         element.addEventListener("blur",focusLost);
//     });


//     function focus(e) {
//         let parent = e.target.parentNode;
//        parent.classList.add("focused");
//     }


//     function focusLost(e) {
//         let parent = e.target.parentNode;
//        parent.classList.remove("focused");
//     }

//  }