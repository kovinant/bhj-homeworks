document.addEventListener('DOMContentLoaded', () => {
    const book = document.getElementById('book');
    const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
    const textColorControls = document.querySelectorAll('.book__control_color .color');
    const bgColorControls = document.querySelectorAll('.book__control_background .color');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();
            fontSizeControls.forEach(c => c.classList.remove('font-size_active'));
            control.classList.add('font-size_active');
            
            book.classList.remove('book_fs-small', 'book_fs-big');
            const size = control.dataset.size;
            if (size) {
                book.classList.add(`book_fs-${size}`);
            }
        });
    });

    textColorControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();
            textColorControls.forEach(c => c.classList.remove('color_active'));
            control.classList.add('color_active');
            
            book.classList.remove('text_color_black', 'text_color_gray', 'text_color_whitesmoke');
            const textColor = control.dataset.textColor;
            if (textColor) {
                book.classList.add(`text_color_${textColor}`);
            }
        });
    });

    bgColorControls.forEach(control => {
        control.addEventListener('click', (e) => {
            e.preventDefault();
            bgColorControls.forEach(c => c.classList.remove('color_active'));
            control.classList.add('color_active');
            
            book.classList.remove('bg_color_black', 'bg_color_gray', 'bg_color_white');
            const bgColor = control.dataset.bgColor;
            if (bgColor) {
                book.classList.add(`bg_color_${bgColor}`);
            }
        });
    });
});