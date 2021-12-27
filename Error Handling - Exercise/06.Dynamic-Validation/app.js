function validate() {
    let input = document.getElementById('email')
    let emailRegex = /(^[a-z]+@[a-z]+\.[a-z]+$)/
    input.addEventListener('change', listener)
    
    function listener(e){
        if (!emailRegex.test(input.value)){
            input.classList.add('error')
        }else{
            input.classList.remove('error')
        }
    }
}