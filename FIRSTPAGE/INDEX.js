let startBtn=document.querySelector(".start-btn");
let body= document.querySelector("body");
let navbar=document.querySelector(".navbar");
let heading=document.querySelector(".heading");
let firstSection=document.querySelector('.horizontal1');
let secondSection=document.querySelector(".horizontal2");
let thirdSection=document.querySelector(".horizontal3");
let nextBtn=document.querySelector(".next-btn");
let secondBtn=document.querySelector(".second-btn");
let navlinks=document.querySelector(".nav-links");
let home=document.querySelector(".home");

function timepass(){
    body.style.backgroundColor='';
    body.style.backgroundImage="linear-gradient(to bottom right,#d9ed92,#99d98c,#52b69a,#168aad,#1e6091,#184e77";
    navbar.style.color='white';
    navbar.style.boxShadow="0px 10px 10px grey";
    heading.style.display="block";
    nextBtn.style.display="block";
    startBtn.style.display="none";
    navlinks.style.display="flex";
}

function nextbutton(){
    secondSection.scrollIntoView({behavior : 'smooth'});
}

function secondbutton(){
    thirdSection.scrollIntoView({behavior:'smooth'});

}

startBtn.addEventListener("click",timepass); 
nextBtn.addEventListener("click",nextbutton);
secondBtn.addEventListener("click",secondbutton);
home.addEventListener('click',()=>{
    firstSection.scrollIntoView({behavior:'smooth'});
})