window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "rgba(0,0,0,0.95)";

    }

    else {

        nav.style.background = "rgba(0,0,0,0.7)";

    }

});


console.log("Sulim Web Design loaded successfully");