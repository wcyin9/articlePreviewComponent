

const shareOptions = document.querySelector(".shareMenu")
const shareButton = document.querySelector("button")

shareButton.addEventListener("click", () => {
    const isOpen = shareOptions.classList.toggleClass("active")
    if (isOpen) {
        shareButton.style.backgroundColor = "#48556a"
    } else {
        shareButton.style.backgroundColor = ""
    }
})
