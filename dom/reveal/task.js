document.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(function(reveal) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150; // Threshold for when to reveal element

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
});
