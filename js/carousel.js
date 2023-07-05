const buttons = document.querySelectorAll(".button")
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const activeSlide = document.querySelector(".active")
        activeSlide.classList.remove("active")
        if(button.classList.contains("next")){
            var change = 1
        } else{
            var change = -1
        }
        const slides = button.closest(".carousel").querySelector(".slides")
        let newActive = [...slides.children].indexOf(activeSlide) + change
        if(newActive < 0){
            newActive = slides.children.length - 1
        }else{
            if(newActive >= slides.children.length){
                newActive=0
            }
        }
        slides.children[newActive].classList.add("active")
    })
})