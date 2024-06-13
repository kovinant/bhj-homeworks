document.addEventListener("DOMContentLoaded", function() {
    var timerElement = document.getElementById('timer');
    var timeLeft = parseInt(timerElement.textContent, 10);

    var countdown = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft -= 1;
            timerElement.textContent = timeLeft;
        } else {
            clearInterval(countdown);
            alert('Вы победили в конкурсе!');
        }
    }, 1000);
});
