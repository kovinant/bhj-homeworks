document.addEventListener("DOMContentLoaded", () => {
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    let clickCount = 0;
    let isCookieBig = false;
    
    cookie.addEventListener('click', () => {
        clickCount++;
        counter.textContent = clickCount;

        if (isCookieBig) {
            cookie.style.width = '200px';
            cookie.style.height = 'auto';
        } else {
            cookie.style.width = '220px';
            cookie.style.height = 'auto';
        }
        isCookieBig = !isCookieBig;
    });
});
