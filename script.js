  const videos = document.querySelectorAll(".work-video");
  const cursor = document.getElementById('cursor');
  const contactSection = document.getElementById("contact");

  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .work-item, .skill-tag').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.r').forEach(el => io.observe(el));

  function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = 'Sent ✓';
    btn.style.background = '#2A2A27';
    btn.style.color = '#888884';
    setTimeout(() => {
      btn.textContent = 'Send it →';
      btn.style.background = '';
      btn.style.color = '';
      e.target.reset();
    }, 3000);
  }

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;

    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.6 // play when ~60% visible
});

videos.forEach(video => {
  observer.observe(video);
});

contactSection.addEventListener("mouseenter", () => {
  cursor.style.background = "#F8F7F5"; // off-white
});

contactSection.addEventListener("mouseleave", () => {
  cursor.style.background = "#111110"; // back to default
});

contactSection.addEventListener("mouseenter", () => {
  cursor.style.background = "#F8F7F5";
  cursor.style.borderColor = "#F8F7F5";
});

contactSection.addEventListener("mouseleave", () => {
  cursor.style.background = "#111110";
  cursor.style.borderColor = "#111110";
});