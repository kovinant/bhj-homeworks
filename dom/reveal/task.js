let scrollLocked = false;
let unlockScrollTimeout;
let processedReveals = new Set();

document.addEventListener('scroll', function() {
    if (scrollLocked) {
        return;
    }

    const reveals = document.querySelectorAll('.reveal');
    let stopScroll = false;

    reveals.forEach(function(reveal) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementBottom = reveal.getBoundingClientRect().bottom;
        const elementVisible = 150; 
        
        if (elementTop < windowHeight - elementVisible && elementTop > -elementVisible && !processedReveals.has(reveal)) {
            reveal.classList.add('reveal_active');
            stopScroll = true;
            processedReveals.add(reveal);
        }

        // Remove from processedReveals if the element is no longer visible
        if (elementBottom < 0 || elementTop > windowHeight) {
            reveal.classList.remove('reveal_active');
            processedReveals.delete(reveal);
        }
    });

    if (stopScroll) {
        scrollLocked = true;
        document.body.style.overflow = 'hidden';

        // Разрешить прокрутку снова через 2 секунды
        unlockScrollTimeout = setTimeout(() => {
            scrollLocked = false;
            document.body.style.overflow = '';
        }, 2000); // 2000 мс = 2 секунды
    }
});
