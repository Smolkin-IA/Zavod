function  hideBtn(btn,time){
    return function(){
        setTimeout(function(){
            btn.style.visibility='hidden';
        },time);
    }
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn1');



btn1.addEventListener('click',hideBtn(btn1,1000));
btn2.addEventListener('click',hideBtn(btn2,2000));
