window.addEventListener("load", solution);

function solution() {
  let name = document.getElementById("fname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let address = document.getElementById("address");
  let code = document.getElementById("code");

  let submitBtn = document.querySelector("#submitBTN");
  let infoPreview = document.getElementById("infoPreview");
  let editBtn = document.querySelector("#editBTN");
  let continueBTN = document.querySelector("#continueBTN");

  submitBtn.addEventListener("click", submit);

  function submit(e) {
    if (name.value == "" || email.value == "") {
      return;
    }


    let construction = `<li>Full Name: ${name.value}</li>
      <li>Email: ${email.value}</li>
      <li>Phone Number: ${phone.value}</li>
      <li>Address: ${address.value}</li>
      <li>Postal Code: ${code.value}</li>`;

    infoPreview.innerHTML = construction;

    let saveN = name.value;
    let saveE = email.value;
    let saveP = phone.value;
    let saveA = address.value;
    let saveC = code.value;

    name.value = "";
    email.value = "";
    phone.value = "";
    address.value = "";
    code.value = "";

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBTN.disabled = false;

    continueBTN.addEventListener("click", deleteAll);
    editBtn.addEventListener("click", editField);

    function editField(e) {
      name.value = saveN;
      email.value = saveE;
      phone.value = saveP;
      address.value = saveA;
      code.value = saveC;

      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBTN.disabled = true;

      let allLi = document.querySelectorAll("#infoPreview li");
      Array.from(allLi)
      for (let i = 0; i < allLi.length; i++) {
          allLi[i].remove()
        
      }
   
    }

    function deleteAll(e) {
      hElement = document.createElement("h3");
      hElement.textContent = 'Thank you for your reservation!'
      divElement = document.getElementById("block");
      while (divElement.firstChild) {
        divElement.removeChild(divElement.firstChild);
      }

      divElement.appendChild(hElement)
    }
  }
}

// function solution() {
//   const divBlock = document.querySelector("#block");
//   console.log(divBlock);
//   const ulInfoPrevie = document.querySelector("#infoPreview");
//   const editBtn = document.querySelector("#editBTN");
//   const continueBtn = document.querySelector("#continueBTN");
//   const submitBtn = document.querySelector("#submitBTN");
//   submitBtn.addEventListener("click", onSubmitBtn);

//   function onSubmitBtn(e) {
//     let [name, email, phone, address, postCode] = Array.from(
//       document.querySelector("#form").children
//     ).map((el) => el.children[1]);
//     //saveValue
//     let allsavedValues = [name, email, phone, address, postCode].map(
//       (el) => el.value
//     );

//     if (name.value == "" || email.value == "") {
//       return;
//     }

//     const fullNameLi = createElement("li", `Full Name: ${name.value}`);
//     const emailLi = createElement("li", `Email: ${email.value}`);
//     const phoneLi = createElement("li", `Phone Number: ${phone.value}`);
//     const addressLi = createElement("li", `Address: ${address.value}`);
//     const postCodeLi = createElement("li", `Postal Code: ${postCode.value}`);

//     [fullNameLi, emailLi, phoneLi, addressLi, postCodeLi].forEach((el) =>
//       ulInfoPrevie.appendChild(el)
//     );

//     submitBtn.disabled = true;
//     editBtn.disabled = false;
//     continueBtn.disabled = false;
//     [name, email, phone, address, postCode].map((el) => (el.value = ""));

//     continueBtn.addEventListener("click", onContinue);
//     editBtn.addEventListener("click", onEdit);

//     function onEdit() {
//       let count = 0;
//       [name, email, phone, address, postCode].map((el) => {
//         el.value = allsavedValues[count];
//         count++;
//       });

//       if (ulInfoPrevie) {
//         while (ulInfoPrevie.firstChild) {
//           ulInfoPrevie.removeChild(ulInfoPrevie.firstChild);
//         }
//       }

//       submitBtn.disabled = false;
//       editBtn.disabled = true;
//       continueBtn.disabled = true;

//       console.log("yes");
//     }

//     function onContinue() {
//       const h3 = createElement("h3", "Thank you for your reservation!");
//       while (divBlock.firstChild) {
//         divBlock.removeChild(divBlock.firstChild);
//       }
//       divBlock.appendChild(h3);
//     }
//   }

//   function createElement(type, content, attribute) {
//     const el = document.createElement(type);
//     if (attribute) {
//       el.setAttribute("id", attribute);
//     }
//     if (content) {
//       el.textContent = content;
//     }
//     return el;
//   }
// }
