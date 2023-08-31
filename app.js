var bulb = document.querySelector('#box')
var btn = document.querySelector('button')
var bb=22
btn.addEventListener('click',function(){
    if(bb==22){
        bulb.style.backgroundColor='yellow'
        console.log('CLICK HOGYA');
         bb =0

    }
    else{
        bulb.style.backgroundColor='transparent'
        console.log('CLICK NHI HOA');

bb =22
    }
})