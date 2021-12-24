function validate() {
    let getText = document.getElementById('email')

    getText.addEventListener('change', function(e){
        let regex = /([a-z]+)(\@)([a-z]+)(\.[a-z]+)/g
        if (regex.test(e.target.value)){
            e.target.removeAttribute('class');
               return;
        }
        e.target.className = 'error';
    });
}