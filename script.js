document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // Handle form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      formMessage.style.display = "block";
      contactForm.reset();
    }, 1000); // Simulate a delay for form submission
  });
});
