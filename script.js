const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('input');
    const span = document.querySelector('span');
    let kgTopound;



    if((isNaN(input.value)) || input.value <= 0){
        span.classList.add('error')
        span.innerHTML = '<p>Enter Valid Number</p>'

        setTimeout(() => {
            span.innerHTML = ''
            span.classList.remove('error')
        }, 2500);

        input.value = '';
    } else {
        
        kgTopound = (input.value ) * 2.2046
        span.innerHTML = kgTopound
        span.innerHTML = `${kgTopound.toFixed(3)}`

        setTimeout( ()=> {
            input.value = ''
        },2000)
    }

    

    

    




});
