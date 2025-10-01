// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// ✅ Autoplay video once on page load + reset to thumbnail when finished
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector("#about video");
  if (video) {
    video.play().catch(err => {
      console.log("Autoplay blocked:", err);
    });

    // ✅ Reset to thumbnail after video finishes
    video.addEventListener("ended", () => {
      video.pause();
      video.currentTime = 0;
      video.load(); // reloads poster (thumbnail)
    });
  }
});

