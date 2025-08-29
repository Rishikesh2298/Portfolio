const reveals = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Fade in
      entry.target.classList.add("active");
    } else {
      // Fade out when leaving viewport
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.2 }); // trigger when 20% visible

reveals.forEach(r => observer.observe(r));
