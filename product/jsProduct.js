/*$(document).ready(function(){
     $(".test").css("color","red");
    // $(".icon > ul ").hide(3000).show(2000);
   
    $(".botn").click(function(){  
        // $('.test').fadeTo(2000,0.6).fadeTo(2000,1)
        $('.test'). hide(3000).show(2000)
    });
     
    $('.sale').css({ //текст акции
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        marginTop:20 
    }); 

    $('.small a').click(function(e){  //слайдер
        if($('.big img').attr('src')!==$(this).attr('href')){
            $('.big img').hide().attr('src',$(this).attr('href')).fadeIn(1000);
        }
       
        e.preventDefault();
    })

    


});


let btn=document.getElementById("addButton");


const bntClick=()=>{
    let textInp=document.getElementById('inp1');
    let na=textInp.value;
    
    

    console.log(na);
}
btn.onclick=bntClick;




//СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ ДО КОНЦА МАРТА<p>СКИДКА НА ВСЮ ОДЕЖДУ ДО 30%</p>

const ShowWonan=()=>{
    $('.showWoman').click(function(){  //медленное открывание ссылки жен
        $('.textLor').slideToggle(1000);
    });

    $('.showWoman').on('click',function(){ //скрытие другого блока
        $('.textMan').slideToggle();
        
    });
}

const ShowMan=()=>{
    $('.showMan').click(function(){    //октр.ссылки муж
        $('.showTextMan').slideToggle(1000);
    });

    $('.showMan').on('click',function(){
        $('.textWoman').slideToggle();
    })

}

ShowWonan();
ShowMan();
let man=$('.textMan');
    let woman=$('.textWoman');
    let junior=$('.textJunior');

    
    $('.showMan').click(function(){     //свернуть ссылку
        $(man).stop(true,true).slideToggle();
        $(woman).slideUp('slow');
    });

    $('.showWoman').click(function(){
        $(woman).stop(true,true).slideToggle();
        $(man).slideUp('slow');
    });

    $('.showJunior').click(function(){
        $(junior).stop(true,true).slideToggle();
        $(man).slideUp('slow');
    });
*/

/*
let val;

$('.btn').click(function(){
    val=$('.textInp').val();
    $('.text').append('<button class="botn">x</button> '+val+'<br>')
});

$('.botn').click(function(){
   $('.text').remove();
})
*/

$(document).ready(function() {
    $('.content').click(function(event) {
        $('.text').removeClass('active');
        let num = $(this).attr('data-num');
        $('#block' + num).addClass('active');
    })
});