console.log("hello world");

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function(){
    if (window.scrollY > 20){
      navbar.classList.add("bgchange");
    }
    else{
        navbar.classList.remove("bgchange");
    }
});