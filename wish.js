document.addEventListener("DOMContentLoaded", function () {
  // Fade in on page load
  document.body.classList.add("fade-in");

  // Get the button by correct ID
  const redirectBtn = document.getElementById("redirectBtn");
  if (redirectBtn) {
    redirectBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.classList.remove("fade-in"); // start fade-out

      setTimeout(() => {
        // Redirect to your next page
        window.location.href = "nextpage.html"; 
      }, 800); // wait for fade-out before redirect
    });
  }
});
