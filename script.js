document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#download") {
        // Redirect to download page (to be built later)
        window.location.href = "download.html";
        return;
      }

      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
