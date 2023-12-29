// function toggleMenu() {
//     const navbar = document.querySelector('.navbar');
//     navbar.classList.toggle('responsive');
//   }
  
//   function scrollToSection(sectionId) {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 50,
//         behavior: 'smooth'
//       });
//     }
//   }
  

//   // ... Existing JavaScript ...

// function showLoginForm() {
//     document.getElementById('loginForm').style.display = 'block';
//     document.getElementById('loginOverlay').style.display = 'block';
//   }
  
//   function showSignupForm() {
//     document.getElementById('signupForm').style.display = 'block';
//     document.getElementById('loginOverlay').style.display = 'block';
//   }
  
//   function hideForms() {
//     document.getElementById('loginForm').style.display = 'none';
//     document.getElementById('signupForm').style.display = 'none';
//     document.getElementById('loginOverlay').style.display = 'none';
//   }
  

// Function to toggle the mobile menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('responsive');
  }
  
  // Function to scroll to a specific section
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  // Function to show the login form
  function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const overlay = document.getElementById('loginOverlay');
    loginForm.style.display = 'block';
    overlay.style.display = 'block';
  }
  
  // Function to show the sign-up form
  function showSignupForm() {
    const signupForm = document.getElementById('signupForm');
    const overlay = document.getElementById('loginOverlay');
    signupForm.style.display = 'block';
    overlay.style.display = 'block';
  }
  
  // Function to hide overlay and forms
  function hideForms() {
    const forms = document.querySelectorAll('.login-form, .signup-form');
    const overlay = document.getElementById('loginOverlay');
    forms.forEach(form => {
      form.style.display = 'none';
    });
    overlay.style.display = 'none';
  }
  