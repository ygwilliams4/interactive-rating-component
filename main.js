var ratingCard = document.querySelector(".rating-card");
var activeState = document.querySelector(".active-card");
var rating = document.querySelectorAll(".rating");
const btn = document.getElementById("submit");
const rated = document.getElementById("rated");

btn.addEventListener("click", () => {
    ratingCard.classList.add("hidden");
    activeState.classList.remove("hidden");
});

rating.forEach((rate) => {
    rate.addEventListener("click", () => {
        rated.innerHTML = rate.innerHTML
    } )
});