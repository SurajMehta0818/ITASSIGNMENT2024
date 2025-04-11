// about.js - Interactive About Page Features
document.addEventListener('DOMContentLoaded', function() {
    // 1. Team Member Modal
    const members = document.querySelectorAll('.member');
    const modal = document.createElement('div');
    modal.className = 'member-modal';
    document.body.appendChild(modal);

    members.forEach(member => {
        member.addEventListener('click', function() {
            const name = this.querySelector('h4').textContent;
            const role = this.querySelector('p').textContent;
            const imgSrc = this.querySelector('img').src;
            
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${imgSrc}" alt="${name}">
                    <h3>${name}</h3>
                    <p class="role">${role}</p>
                    <div class="bio">This is a sample bio for ${name.split(' ')[0]}. 
                    Our educators have an average of 10+ years teaching experience.</div>
                    <button class="contact-btn">Contact ${name.split(' ')[0]}</button>
                </div>
            `;
            modal.style.display = 'flex';
            
            // Close modal
            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });

    // 2. Animated Counter for Stats
    const statCards = document.querySelectorAll('.card');
    const animateCounters = () => {
        statCards.forEach(card => {
            const target = parseInt(card.querySelector('.number').textContent);
            const suffix = card.querySelector('.number').textContent.replace(/[0-9]/g, '');
            let count = 0;
            const duration = 2000; // ms
            const increment = target / (duration / 16);
            
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    card.querySelector('.number').textContent = Math.floor(count) + suffix;
                    requestAnimationFrame(updateCount);
                } else {
                    card.querySelector('.number').textContent = target + suffix;
                }
            };
            updateCount();
        });
    };

    // Trigger when stats are visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    document.querySelector('.stats').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.stats').style.opacity = '1';
        observer.observe(document.querySelector('.stats'));
    }, 500);
});