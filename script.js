const slides = document.querySelectorAll(".slide")
// console.log(slides);
var counter = 0;
slides.forEach(
    (slide,index) =>{
        slide.style.left = `${index*80}%`
}
 )

 const prev = ()=>{
     counter--
     if(counter<0){
        counter=slides.length - 1;
      
    }
     slideItem()
     
 }
 const next = ()=>{
     counter++
     if(counter>=slides.length){
         counter = 0;
         
     }
     slideItem()
    
 }


 const slideItem = () =>{
     slides.forEach(
         (slide)=>{
             slide.style.transform = `translateX(-${counter * 100}%)`

     }
     )
 }
 
 
 function indicator(){
     document.getElementById('indicator' + counter).classList.toggle("indicator");
    
     }
//  function ham(){
//      document.getElementById('ham-menu').classList.toggle("hamburg");
    
//      }

   const hamburg = document.querySelector(".navbar-toggler");
   const navMenu = document.querySelector(".navMenu");
   hamburg.addEventListener("click",() => {
       hamburg.classList.toggle("hamburg");
       navMenu.classList.toggle("active");
   })
     document.querySelectorAll(".nav-item").forEach(n =>n.addEventListener("click",() => {
        navMenu.classList.remove("active");
        hamburg.classList.remove("hamburg");
    }))
    
  
    
 
 