document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab__content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('tab_active'));
            contents.forEach(c => c.classList.remove('tab__content_active'));

            this.classList.add('tab_active');
            document.querySelector(`.tab__content[data-tab="${tabId}"]`).classList.add('tab__content_active');
        });
    });
});
