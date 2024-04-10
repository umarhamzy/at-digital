// interactive mobile nav
const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerMenu.classList.toggle("active");
});

// accordion logic
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const faqQuestion = item.querySelector(".faq__question");
  const faqToggle = item.querySelector(".faq__toggle");
  const faqAnswer = item.querySelector(".faq__answer");

  faqQuestion.addEventListener("click", () => {
    // close all other open accordions
    document.querySelectorAll(".faq__answer").forEach((answer) => {
      if (answer !== faqAnswer) {
        answer.style.display = "none";
        answer.previousElementSibling.querySelector(
          ".faq__toggle"
        ).textContent = "+";
        answer.previousElementSibling.style.color = "inherit";
      }
    });

    // toggle the current accordion
    if (faqAnswer.style.display === "none") {
      faqAnswer.style.display = "block";
      faqToggle.textContent = "-";
      faqQuestion.style.color = "#6B3CC9";

      // check if the opened accordion is below the viewport
      const rect = item.getBoundingClientRect();
      if (rect.bottom > window.innerHeight) {
        // scroll the page to make the FAQ visible
        item.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else {
      faqAnswer.style.display = "none";
      faqToggle.textContent = "+";
      faqQuestion.style.color = "inherit";
    }
  });
});
