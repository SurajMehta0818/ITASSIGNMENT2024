document.addEventListener('DOMContentLoaded', () => {
  // Make phone numbers clickable
  document.querySelectorAll('p, .info-card').forEach(el => {
      if (el.textContent.match(/(\+\d[\d\-\(\) ]+)/)) {
          el.innerHTML = el.innerHTML.replace(/(\+\d[\d\-\(\) ]+)/g, 
              '<a href="tel:$1" class="phone-link">$1</a>'
          );
      }
  });

  // Animate cards on load
  const animateCards = () => {
      const cards = document.querySelectorAll('.info-card');
      cards.forEach((card, i) => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          card.style.transition = `all 0.4s ease ${i * 0.1}s`;
          setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
          }, 100);
      });
  };

  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const formStatus = document.getElementById('formStatus');
  
  if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          // Show loading state
          submitBtn.classList.add('loading');
          submitBtn.disabled = true;
          formStatus.style.display = 'none';
          
          try {
              // Get form values
              const formData = new FormData(contactForm);
              const data = Object.fromEntries(formData);
              
              // Simulate API call (replace with actual fetch)
              await new Promise(resolve => setTimeout(resolve, 1500));
              
              // Show success message
              formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
              formStatus.className = 'form-status success';
              formStatus.style.display = 'block';
              
              // Reset form
              contactForm.reset();
              
              // Scroll to success message
              formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          } catch (error) {
              // Show error message
              formStatus.textContent = 'There was an error submitting your message. Please try again.';
              formStatus.className = 'form-status error';
              formStatus.style.display = 'block';
          } finally {
              // Reset button state
              submitBtn.classList.remove('loading');
              submitBtn.disabled = false;
          }
      });
  }
  console.log(document.querySelector('footer'));

  // Initialize animations after a slight delay
  setTimeout(animateCards, 300);
});