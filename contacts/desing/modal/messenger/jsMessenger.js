
let modalBg=document.querySelector('.modalMessenger');
let modal=document.querySelector('.modal_body_mess');
let openBtn=document.querySelectorAll('.messengerContact');
let closeBtn=document.querySelector('.modal_close_mess');

openBtn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        modalBg.classList.add('activ');
        modal.classList.add('activ');
    });
});

closeBtn.addEventListener('click',()=>{
    modalBg.classList.remove('activ');
    modal.classList.remove('activ');
});

document.addEventListener('click',(e)=>{
    if(e.target == modalBg){
        modalBg.classList.remove('activ');
        modal.classList.remove('activ');
    }
});

