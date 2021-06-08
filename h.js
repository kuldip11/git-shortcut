const but=document.querySelector(".btn");
const spn=document.querySelector(".span");
but.addEventListener("click",clickHandler)
function clickHandler(){
   const text=document.querySelector(".input");
   if(isNaN(text.value)){
    alert(`${text.value} is not a number`);
    spn.innerHTML="";
   }
   else{spn.innerHTML=text.value*6;
   alert(text.value*6);
}
}