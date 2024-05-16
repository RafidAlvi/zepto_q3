const profileMenu = document.querySelector('.profile-menu');
const profilePicture = document.querySelector('.profile-picture');
const profileMenuToggle = document.querySelector('.profile-menu-toggle'); // Assuming a toggle element exists within the profile menu

let isProfileMenuOpen = false;

// Handle profile picture click event (or toggle element click if applicable)
profilePicture.addEventListener('click', function() {
  isProfileMenuOpen = !isProfileMenuOpen; // Toggle menu state

  if (isProfileMenuOpen) {
    profileMenu.classList.add('open'); // Add 'open' class for visibility
  } else {
    profileMenu.classList.remove('open'); // Remove 'open' class to hide
  }
});

// Handle clicks outside the profile menu (optional for better UX)
document.addEventListener('click', function(event) {
    if (!isProfileMenuOpen || profileMenu.contains(event.target)) {
      return;
    }
  
    event.stopPropagation(); // Prevent bubbling up
  
    isProfileMenuOpen = false;
    profileMenu.classList.remove('open');
  });
  
