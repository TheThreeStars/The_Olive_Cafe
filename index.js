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
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('#navbarNav');

  toggler.addEventListener('click', function () {
      navbarNav.classList.toggle('collapse');
  });
});

// Form submission logic
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#contactForm'); // Replace with your form's ID
  const responseMessage = document.querySelector('#responseMessage'); // Replace with your message container's ID

  if (form) {
      form.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevent the default form submission

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
              .catch(() => {
                  responseMessage.textContent = 'Oops! There was a problem submitting your message.';
              });
      });
  }
});

// Scroll to section functionality
function scrollToSection(sectionId) {
    // Scroll to the specified section
    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate the offset position accounting for the category buttons container height and additional space
      const offset = document.querySelector('.category-buttons-container').offsetHeight;
      const additionalSpace = 20; // Adjust this value to increase or decrease the space
      const sectionPosition = section.offsetTop - offset - additionalSpace;
  
      // Smoothly scroll to the calculated position
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
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

// Loader functionality
document.addEventListener('DOMContentLoaded', () => {
    const loaderLinks = document.querySelectorAll('.nav-link');
    const menuButton = document.getElementById('menu-button'); // The Explore Menu button
    const burgerLoader = document.getElementById('burger-loader');
    const overlay = document.getElementById('overlay');
    const categoryButtons = document.querySelector('.category-buttons-container');

    // Loop through all nav-link elements and attach an event listener
    loaderLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior

            // Show the loader
            overlay.classList.add('active');
            burgerLoader.classList.remove('hidden');

            // Hide category buttons smoothly but don't block the transition
            if (categoryButtons) {
                categoryButtons.classList.add('hidden');
            }

            // Get the target URL from the link's href attribute
            const targetUrl = link.getAttribute('href');

            // Set a minimum display time for the loader
            const minLoaderTime = 2000; // 2 seconds in milliseconds

            // Simulate loading time and redirect after the delay
            setTimeout(() => {
                window.location.href = targetUrl; // Redirect to the target URL
            }, minLoaderTime);
        });
    });

    // Add event listener to the menu button to trigger the same loader
    if (menuButton) {
        menuButton.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default behavior

            // Show the loader
            overlay.classList.add('active');
            burgerLoader.classList.remove('hidden');

            // Hide category buttons smoothly but don't block the transition
            if (categoryButtons) {
                categoryButtons.classList.add('hidden');
            }

            // Get the target URL from the menu button's href attribute
            const targetUrl = menuButton.getAttribute('href');

            // Set a minimum display time for the loader
            const minLoaderTime = 2000; // 2 seconds in milliseconds

            // Simulate loading time and redirect after the delay
            setTimeout(() => {
                window.location.href = targetUrl; // Redirect to the target URL
            }, minLoaderTime);
        });
    }
});

// homepage
  // Function to check if an element is in the viewport
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight * 0.9 && // Trigger slightly before it enters the viewport
      rect.bottom > 0 // Ensure it's not scrolled past the viewport
    );
  }
  
  // Add scroll listener to apply 'in-view' class
  document.addEventListener("scroll", () => {
    const images = document.querySelectorAll(".grid-item img");
    const title = document.querySelector(".title"); // Target the title
  
    // Check for the title
    if (title && isInViewport(title) && !title.classList.contains("in-view")) {
      title.classList.add("in-view");
    }
  
    // Check for images
    images.forEach((img) => {
      if (isInViewport(img) && !img.classList.contains("in-view")) {
        img.classList.add("in-view");
      }
    });
  });
  
  
