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

  // Optional JavaScript for custom toggle behavior
  document.addEventListener("DOMContentLoaded", function() {
    const toggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');

    toggler.addEventListener('click', function() {
      navbarNav.classList.toggle('collapse');
    });
  });


            // Use Fetch API to submit the form data
            fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    responseMessage.textContent = 'Thank you for your message!';
                    form.reset(); // Reset the form
                } else {
                    responseMessage.textContent = 'Oops! There was a problem submitting your message.';
                }
            })
            .catch(error => {
                responseMessage.textContent = 'Oops! There was a problem submitting your message.';
            });
        

        // menu buttons
        function scrollToSection(sectionId) {
            // Scroll to the specified section
            const section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          
            // Handle active class for buttons
            const buttons = document.querySelectorAll('.category-buttons button');
            buttons.forEach(button => button.classList.remove('active')); // Remove active class from all buttons
          
            // Add active class to the clicked button
            const clickedButton = Array.from(buttons).find(
              button => button.textContent.trim().toLowerCase() === sectionId.toLowerCase()
            );
            if (clickedButton) {
              clickedButton.classList.add('active');
            }
          }
            // Scroll Left
            function scrollLeft() {
                const scroller = document.querySelector('.category-buttons');
                scroller.scrollBy({ left: -100, behavior: 'smooth' });
            }
            
            // Scroll Right
            function scrollRight() {
                const scroller = document.querySelector('.category-buttons');
                scroller.scrollBy({ left: 100, behavior: 'smooth' });
            }

            
            document.addEventListener("DOMContentLoaded", function () {
              const navbar = document.getElementById("navbar");
              
              // Check if the current page is the home page
              if (window.location.pathname.endsWith("home.html") || window.location.pathname === "/") {
                navbar.classList.add("transparent");
              } else {
                navbar.classList.remove("transparent");
              }
            });
          
          

            
                        



