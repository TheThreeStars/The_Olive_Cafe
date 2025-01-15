// Highlight the active link dynamically
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();
  
    // Select all navbar links
    const navLinks = document.querySelectorAll('.nav-link');
  
    // Loop through links and add the active class to the matching link
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });
  