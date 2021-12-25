function solve() {
   let getProductButtons = document.querySelectorAll('.add-product'); // Take all addbuttons
   let textareaElement = document.querySelector('textarea'); 
   let checkoutButtonElement = document.querySelector('.checkout')
   let sum = 0
   let products = new Set([])


   for (const getProductButton of getProductButtons) {
      getProductButton.addEventListener('click', (e) => {
         let currentProductEl = e.currentTarget.parentElement.parentElement
         let productName = currentProductEl.querySelector('.product-title').textContent
         let productPrice = Number(currentProductEl.querySelector('.product-line-price').textContent)
         sum += productPrice
         products.add(productName)

         textareaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
      })
   }
   checkoutButtonElement.addEventListener('click', (e) => {
      textareaElement.textContent += `You bought ${(Array.from(products).join(', '))} for ${sum.toFixed(2)}.`
   })
}