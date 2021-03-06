/*!
    * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict

  /* Form submission */

  // Function to submit form
  async function postForm(name, email, message) {
    const response = await fetch('https://formspree.io/mwkqjgal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
    return response.json()
  }

  const contactForm = document.getElementById('contact-form')
  const name = document.getElementById('name')
  const email = document.getElementById('email')
  const message = document.getElementById('message')
  const alertMsg = document.querySelector('.alert')
  contactForm.addEventListener('submit', event => {
    event.preventDefault()
    name.value = ''
    email.value = ''
    message.value = ''
    alertMsg.classList.add('show-alert')
    setTimeout(()=> {
      alertMsg.classList.remove('show-alert')
    }, 5000)
  })

// Function that hides all thumbnails
const thumbnails = document.querySelectorAll('.thumbnail')
const hideAllThumbnails = () => {
  thumbnails.forEach(thumbnail => {
    thumbnail.style.display = 'none'
  })
}

hideAllThumbnails()

let category = 'front-end'
const tabButtons = document.querySelectorAll('.tab-btn')
const focusedTabButton = Array.from(tabButtons).find(btn => btn.dataset.tabCategory === category)
tabButtons[0].style.border = '2px solid #000'
tabButtons[0].style.borderRadius = '5px'
console.log(focusedTabButton)
// Function that displays project of a default category at first, then
// responds to click events on category buttons
tabButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const selectedCategory = e.target.dataset.tabCategory
    category = selectedCategory
    hideAllThumbnails()
    showSelectedProjects(category)
  })
})

// Show thumbnails of category only
const showSelectedProjects = (category) => {
  const selectedProjects = Array.from(thumbnails).filter(thumbnail => thumbnail.dataset.category === category)
  selectedProjects.forEach(project => {
    project.style.display = 'block'
  })
}

showSelectedProjects(category)


  