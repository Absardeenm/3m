document.addEventListener("DOMContentLoaded", () => {
  /* -----------------
     Slideshow logic
  ----------------- */
  const images = document.querySelectorAll(".slideshow img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.remove("active", "prev");
      if (i === index) {
        img.classList.add("active");
      } else if (i === current) {
        img.classList.add("prev");
      }
    });
    current = index;
  }

  prevBtn?.addEventListener("click", () => {
    const newIndex = (current - 1 + images.length) % images.length;
    showImage(newIndex);
  });

  nextBtn?.addEventListener("click", () => {
    const newIndex = (current + 1) % images.length;
    showImage(newIndex);
  });

  /* -----------------
     Page fade-in (JS only; no CSS needed)
  ----------------- */
  const body = document.body;
  body.style.opacity = "0";
  body.style.transition = "opacity 600ms ease";
  requestAnimationFrame(() => {
    body.style.opacity = "1";
  });

  /* -----------------
     Balloon generator
  ----------------- */
  function generateBalloons(containerId, count) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (let i = 0; i < count; i++) {
      const balloon = document.createElement("div");
      balloon.classList.add("balloon");

      const img = document.createElement("img");
      img.src = "baloons.png";
      balloon.appendChild(img);

      // random horizontal start position
      balloon.style.left = Math.random() * 100 + "vw";

      // random size (40px – 120px)
      const size = 40 + Math.random() * 80;
      balloon.style.width = size + "px";

      // random animation speed (10s – 18s)
      balloon.style.animationDuration = 10 + Math.random() * 8 + "s";

      // random delay
      balloon.style.animationDelay = Math.random() * 10 + "s";

      container.appendChild(balloon);
    }
  }

  // Generate 30 balloons
  generateBalloons("balloon-container", 30);

  /* -----------------
     Show bottom-right button after 5s
  ----------------- */
  const clickmeBtn = document.getElementById("clickme-btn");
  if (clickmeBtn) {
    setTimeout(() => clickmeBtn.classList.add("show"), 5000);

    // Click → bounce + fade-out + redirect
    clickmeBtn.addEventListener("click", () => {
      clickmeBtn.style.transform = "scale(1.2)";
      setTimeout(() => {
        clickmeBtn.style.transform = "scale(1)";
      }, 200);

      // Fade out entire page, then go
      body.style.opacity = "0";
      setTimeout(() => {
        window.location.href = "fourthpage.html";
      }, 600); // match the 600ms transition above
    });
  }
});
