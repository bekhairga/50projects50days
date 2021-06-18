const codes = document.querySelectorAll('.code');

codes[0].focus();
codes.forEach((code, idx)=> {
    code.addEventListener('keydown', (e) => {
        if(e.key >=0 && e.key<=9){
            codes[idx].value = '';
            setTimeout(()=>{
                codes[idx].classList.add('valid');
                codes[idx+1].focus();
            }, 10)
        }else if(e.key === 'Backspace'){
            setTimeout(()=>{
                codes[idx].value = '';
                codes[idx].classList.remove('valid');
                codes[idx-1].focus();
            }, 10)
        }
    })
})