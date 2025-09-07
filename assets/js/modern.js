// Main initialization function
function initAll() {

    // Form validation and submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                    field.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
                } else {
                    field.style.borderColor = '#27ae60';
                    field.style.boxShadow = '0 0 0 3px rgba(39, 174, 96, 0.1)';
                }
            });

            if (isValid) {
                // Show success message
                showNotification('Message sent successfully!', 'success');
                this.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    }

   

   
    
    // Back to Top Button
    document.addEventListener('DOMContentLoaded', function() {
        const backToTopButton = document.getElementById('back-to-top');
        
        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Smooth scroll to top when button is clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });


    
    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.id = 'back-to-top';
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
    
    // Show/hide button on scroll
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
    
    // Smooth scroll to top
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleBackToTop);
    
    // Initial check
    toggleBackToTop();
}
