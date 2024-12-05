document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const navMenu = document.querySelectorAll('.nav-menu a');
    const socialIcons = document.querySelector('.social-icons');

    // Sidebar toggle functionality
    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            
            // Ensure social icons stay fixed and aligned
            if (sidebar.classList.contains('collapsed')) {
                socialIcons.style.left = '50px'; // Adjust to match the collapsed sidebar width
            } else {
                socialIcons.style.left = '70px'; // Default position when sidebar is expanded
            }
        });
    }

    // Navigation menu item click handler (for smooth scrolling or section switching)
    navMenu.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = item.getAttribute('href');
            
            // If we're on a single-page site with sections
            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                // Hide all sections
                document.querySelectorAll('section').forEach(section => {
                    section.classList.add('hidden');
                });

                // Show selected section
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.classList.remove('hidden');
                }
            }
            // If we're on a multi-page site, the default link behavior will work
        });
    });

    // document.addEventListener('scroll', () => {
    //     const footer = document.querySelector('.site-footer');
    //     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //         footer.style.opacity = 1;
    //     } else {
    //         footer.style.opacity = 0;
    //     }
    // });

    // Form validation (for contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            // Basic validation
            let isValid = true;

            // Name validation
            if (!name.value.trim()) {
                alert('Please enter your name');
                e.preventDefault();
                isValid = false;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert('Please enter a valid email address');
                e.preventDefault();
                isValid = false;
            }

            // Message validation
            if (!message.value.trim()) {
                alert('Please enter a message');
                e.preventDefault();
                isValid = false;
            }

            return isValid;
        });
    }

    // Optional: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
