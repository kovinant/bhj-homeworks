document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');


    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });


    items.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            valueElement.textContent = link.textContent;
            listElement.classList.remove('dropdown__list_active');
        });
    });
});