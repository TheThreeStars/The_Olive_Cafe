const form = document.getElementById('contact-form');
        const responseMessage = document.getElementById('response-message');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Show a loading message
            responseMessage.textContent = 'Sending...';

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

            
                        


