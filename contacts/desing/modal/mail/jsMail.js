
 let phone=document.getElementById('popupName');
const validPhone=(num)=>{
   

    let reg=/^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/
    return reg.test(num); 
}
validPhone('95922662');

