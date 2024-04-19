// interactive mobile nav
const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active"); // toggle the 'active' class to show/hide the menu
  headerMenu.classList.toggle("active");
});

// accordion logic
const faqItems = document.querySelectorAll(".faq__item"); // select all the FAQ items

faqItems.forEach((item) => {
  // loop through each FAQ item
  const faqQuestion = item.querySelector(".faq__question"); // select the question of the FAQ item
  const faqToggle = item.querySelector(".faq__toggle"); // select the toggle button of the FAQ item
  const faqAnswer = item.querySelector(".faq__answer"); // select the answer of the FAQ item

  faqQuestion.addEventListener("click", () => {
    // add a click event listener to the question
    // close all other open accordions
    document.querySelectorAll(".faq__answer").forEach((answer) => {
      // loop through each answer
      if (answer !== faqAnswer) {
        // if it's not the current answer
        answer.style.display = "none"; // hide the answer
        answer.previousElementSibling.querySelector(
          // select the toggle button of the previous question and change the toggle button text to '+'
          ".faq__toggle"
        ).textContent = "+";
        answer.previousElementSibling.style.color = "inherit"; // reset the color of the previous question
      }
    });

    // toggle the current accordion (show/hide)
    if (faqAnswer.style.display === "none") {
      // if the answer is hidden
      faqAnswer.style.display = "block"; // show the answer
      faqToggle.textContent = "-"; // change the toggle button text to '-'
      faqQuestion.style.color = "#6B3CC9"; // set the color of the question to a specific value

      // check if the opened accordion is below the viewport
      const rect = item.getBoundingClientRect(); // get the position of the FAQ item
      if (rect.bottom > window.innerHeight) {
        // if the bottom of the FAQ item is below the viewport
        // scroll the page to make the FAQ visible
        item.scrollIntoView({ behavior: "smooth", block: "center" }); // scroll the page to the center of the FAQ item
      }
    } else {
      // if the answer is already shown
      faqAnswer.style.display = "none"; // hide the answer
      faqToggle.textContent = "+";
      faqQuestion.style.color = "inherit";
    }
  });
});
