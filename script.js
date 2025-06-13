document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".contact-btn");
  button.addEventListener("click", function (event) {
    event.preventDefault();
     alert("You clicked the Contact Me button!");
      window.location.href = button.getAttribute("href");
  });
});