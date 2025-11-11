window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
 
        const carouselContainer = document.querySelector('.carousel-container');
        const carouselItems = document.querySelectorAll('.carousel-item');
        const prevBtn = document.querySelector('.carousel-btn.prev');
        const nextBtn = document.querySelector('.carousel-btn.next');
        let currentIndex = 0;
 
        function updateCarousel() {
            carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
 
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
            updateCarousel();
        });
 
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });
 
        (function() {
  emailjs.init("oS126UZnRl1bYGhb1Pbtq"); 
})();

document.querySelectorAll('.nav-links a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        window.addEventListener('scroll', function() {
            const skillsSection = document.getElementById('skills');
            const skillBars = document.querySelectorAll('.skill-progress');
           
            const sectionPosition = skillsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
           
            if(sectionPosition < screenPosition) {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }
        });

(function() {
  // Asegúrate de pegar aquí tu Public Key correcta desde EmailJS
  emailjs.init("NJIhYeDKXDUcVfjpo"); 
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const btn = document.getElementById('button');
  btn.textContent = 'Sending...';

  const serviceID = 'service_pocvk1h'; // Tu Service ID correcto
  const templateID = 'template_8wgioi9'; // Tu Template ID correcto

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.textContent = 'Send';
      alert('✅ Message sent successfully!');
      this.reset();
    }, (err) => {
      btn.textContent = 'Send';
      alert('❌ Failed to send message: ' + JSON.stringify(err));
    });
});
