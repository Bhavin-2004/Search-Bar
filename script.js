const container = document.querySelector(".container");
const searchIcon = document.querySelectorAll(".search-bar i");

searchIcon.forEach((searchIcon) => {
  searchIcon.addEventListener("click", () => {
    container.classList.toggle("change");
  });
});
