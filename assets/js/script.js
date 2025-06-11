  window.addEventListener('scroll', function () {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });


 
 
    window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  
    AOS.init();
    new Typed("#typed", {
      strings: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Flask",
        "Python",
        "MySQL",
        "Git & GitHub",
        "REST APIs",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "AWS",
        "Microsoft Azure",
        "CI/CD Pipelines",
        "Linux Shell Scripting",
        "Responsive Web Design",
        "Apache",
        "Terraform",
        "Agile Methodology"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true
    });
    function animateSkillBars() {
  const bars = document.querySelectorAll('#skills .progress-bar');
  bars.forEach((bar) => {
    const targetWidth = bar.getAttribute('data-width');
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 200);
  });
}


  let animated = false;
  window.addEventListener('scroll', function () {
    const skillsSection = document.getElementById('skills');
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (sectionTop < triggerPoint && !animated) {
      animateSkillBars();
      animated = true;
    }
  });
  
  function sendToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const phoneNumber = "916361285589"; 
    const encodedMessage = encodeURIComponent(`Hello, my name is ${name}.\n and Email is ${email}\n Message: ${message}`);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }
  document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    items.forEach(item => {
      observer.observe(item);
    });
  });

