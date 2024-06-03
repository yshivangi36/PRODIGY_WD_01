window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
   
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#333'; // Darker background on scroll
    } else {
        navbar.style.backgroundColor = '#540348'; // Original background
    }
});
