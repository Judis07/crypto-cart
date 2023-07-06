// character gallery slider

// let scrollContainer = document.querySelector(".character-gallery");
// let backBtn = document.getElementById("backBtn");
// let nextBtn = document.getElementById("nextBtn");

// scrollContainer.addEventListener("wheel", (event) => {
//   event.preventDefault();
//   scrollContainer.scrollLeft += event.deltaY;
// });

// nextBtn.addEventListener("click", () => {
//   scrollContainer.style.scrollBehavior = "smooth";
//   scrollContainer.scrollLeft += 1000;
// });

// backBtn.addEventListener("click", () => {
//   scrollContainer.style.scrollBehavior = "smooth";

//   scrollContainer.scrollLeft -= 1000;
// });

// accordion
const accordions = document.querySelectorAll(".accordion-content");

accordions.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
