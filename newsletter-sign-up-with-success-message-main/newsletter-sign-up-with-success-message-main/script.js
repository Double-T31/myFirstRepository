var submit = document.querySelector('.submit')
var e_border = document.querySelector('#email')
var e_alert = document.querySelector('.alert')

submit.addEventListener('click', function(){
    // e.preventDefault();
    let email = document.getElementById('email');
    if(!email.checkValidity()){
        e_border.style.border = '1px solid red'
        e_border.style.background = 'rgb(241, 213, 213)'
        e_alert.style.display = 'inline-block'
    }else{
window.location.href='success.html';
    }
    
})

