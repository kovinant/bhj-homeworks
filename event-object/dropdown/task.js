document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');

    // Открытие/закрытие списка
    valueElement.addEventListener('click', () => {
        listElement.classList.toggle('dropdown__list_active');
    });

    // Обработка выбора элемента списка
    items.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Запрещаем переход по ссылке
            valueElement.textContent = link.textContent;
            listElement.classList.remove('dropdown__list_active');
        });
    });
});
