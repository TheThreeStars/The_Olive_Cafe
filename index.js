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