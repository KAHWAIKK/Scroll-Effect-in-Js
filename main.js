

const revealElements = document.querySelectorAll("[data-reveal]")

/* function for the scroll reveal */

const scrollReveal = () => {
    //run a loop

    for (let i = 0, len = revealElements.length; i < len ; i++) {
            const isElementOnScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight
        
        if (isElementOnScreen) {
            revealElements[i].classList.add("revealed")
        } else {
            revealElements[i].classList.remove("revealed")
        }

    }   

}

window.addEventListener("scroll",scrollReveal);
window.addEventListener("load",scrollReveal);