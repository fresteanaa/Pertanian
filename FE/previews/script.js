// PehTani - Agriculture Marketplace
// Interactive JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initStatsCounter();
    initNavbarScroll();
});

/* Sticky Navbar Shadow Enhancement */
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
        }
    });
}

/* Animated Stats Counter */
function initStatsCounter() {
    const counters = document.querySelectorAll('.stat-number[data-target]');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 1800;
                    const stepTime = 20;
                    const steps = duration / stepTime;
                    const increment = target / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.innerText = target.toLocaleString('id-ID');
                            clearInterval(timer);
                        } else {
                            counter.innerText = Math.floor(current).toLocaleString('id-ID');
                        }
                    }, stepTime);
                });
            }
        });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) observer.observe(statsSection);
}
