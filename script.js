document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector('input[type="search"]');
    const mobileSearchIcon = document.querySelector(".mobile-search-icon");
  
    mobileSearchIcon.addEventListener("click", function () {
      searchInput.classList.toggle("search-bar-open");
    });
  });
  