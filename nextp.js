document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("fade-in"); // fade-in on load

  // Show button after 20s (use 2000 for quick test)
  setTimeout(() => {
    const btnDiv = document.getElementById("btn");
    if (btnDiv) {
      btnDiv.classList.add("show"); // <-- fade-in button
    }
  }, 20000); // 20s

  // Redirect on button click
  const clickBtn = document.getElementById("clickme-btn");
  if (clickBtn) {
    clickBtn.addEventListener("click", function () {
      window.location.href = "thirdpage.html"; // change to your page
    });
  }
});
