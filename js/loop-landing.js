var nav=document.querySelector(".nav");
var iconhamburger=document.querySelector(".icon-hamburger");
var iconclose=document.querySelector(".icon-close");
var item=document.querySelectorAll(".item");
iconhamburger.addEventListener("click",()=>{
    iconhamburger.style.display="none";
    iconclose.style.display="block";
    nav.style.backgroundColor="hsl(0, 0%, 0%)";
    item.forEach((item)=>{
        item.style.opacity="1";
    })
})
iconclose.addEventListener("click",()=>{
    iconhamburger.style.display="block";
    iconclose.style.display="none";
    nav.style.backgroundColor="";
    item.forEach((item)=>{
        item.style.opacity="0";
    })
})