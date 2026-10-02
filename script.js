/* ==========================================================================
   AgriNusa - Interactive JavaScript Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileNav();
    initProductFilters();
    initStatsCounter();
});

/* Navbar Scroll Effect */
function initHeaderScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/* Mobile Menu Navigation */
function initMobileNav() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });

        // Close menu when clicking links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
            });
        });
    }
}

/* Interactive Product Category Filters */
function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.4s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* Animated Counter Effect for Stats */
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    window.addEventListener('scroll', () => {
        const statsSection = document.getElementById('dampak');
        if (!statsSection) return;

        const sectionPos = statsSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.2;

        if (sectionPos < screenPos && !animated) {
            animated = true;
            statNumbers.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const stepTime = 20;
                const totalSteps = duration / stepTime;
                const increment = target / totalSteps;
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
}

/* Product Detail Modal Handling */
function openModal(title, desc, price, imgUrl) {
    const modal = document.getElementById('productModal');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = imgUrl;

    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
}

/* Form Submit Handler */
function handleFormSubmit(event) {
    event.preventDefault();
    const successMsg = document.getElementById('formSuccessMsg');
    const form = document.getElementById('contactForm');

    if (successMsg) {
        successMsg.style.display = 'block';
        form.reset();
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }
}
