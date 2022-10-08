const hamburger=document.querySelector(".hamburger");
const navvy=document.querySelector(".navvy");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navvy.classList.toggle("active");

})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navvy.classList.remove("active");

    
}))