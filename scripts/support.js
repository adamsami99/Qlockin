//ensures the JavaScript runs only after the page has fully loaded. 
document.addEventListener("DOMContentLoaded", function () {
const searchInput = document.querySelector('.js-search-section');
const supportBoxes = document.querySelectorAll('.js-support-box');


//When user types, the function inside runs automatically.
searchInput.addEventListener("keyup", function () {
  const query = searchInput.value.toLowerCase();

  supportBoxes.forEach(box => {
    const title = box.querySelector('h2').textContent.toLowerCase();
  //.toLowerCase() makes sure the search is case insensitive (e.g., "ClockIn" = "clockin").
    const description = box.querySelector('p').textContent.toLowerCase();

    if (title.includes(query) || description.includes(query)) {
      box.style.display = "flex";  // Ensures the flex layout remains
      box.style.flexDirection = "column"; // Ensures proper structure
      box.style.justifyContent = "space-between"; 
  } else {
      box.style.display = "none";
  }
    });
  });
});




