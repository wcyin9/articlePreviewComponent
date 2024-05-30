const shareOptions = document.querySelector(".shareMenu");
const shareButton = document.querySelector("button");
const shareImg = document.querySelector(".share");

shareButton.addEventListener("click", () => {
    if (shareOptions.classList.contains("active") & shareButton.classList.contains("active") & shareImg.classList.contains("active")) {
        shareOptions.classList.remove("active")
        shareButton.classList.remove("active")
        shareImg.classList.remove("active")
    } else {
        shareOptions.classList.add("active")
        shareButton.classList.add("active")
        shareImg.classList.add("active")
    }
})
