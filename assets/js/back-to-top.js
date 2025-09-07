document.addEventListener('DOMContentLoaded', function() {
    // Create the back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '&uarr;';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    backToTopButton.setAttribute('title', 'Back to top');
    
    // Add the button to the body
    document.body.appendChild(backToTopButton);
    
    // Show/hide the button based on scroll position
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }
    
    // Smooth scroll to top when clicked
    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Add event listeners
    window.addEventListener('scroll', toggleBackToTop);
    backToTopButton.addEventListener('click', scrollToTop);
    
    // Initial check in case page is loaded with scroll position
    toggleBackToTop();
});
