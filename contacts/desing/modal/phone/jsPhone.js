let modalBgPhone=document.querySelector('.modalPhone');
let modalPhone=document.querySelector('.modal_body_phone');
let openBtnPhone=document.querySelectorAll('.PhoneContact');
let closeBtnPhone=document.querySelector('.modal_close_phone');

openBtnPhone.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        modalBgPhone.classList.add('activ');
        
    });
});

closeBtnPhone.addEventListener('click',()=>{
    modalBgPhone.classList.remove('activ');
    
});

document.addEventListener('click',(e)=>{
    if(e.target == modalBgPhone){
        modalBgPhone.classList.remove('activ');
    
    }
});









