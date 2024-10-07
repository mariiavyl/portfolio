// Ждем, когда весь документ будет загружен
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top'); // Находим кнопку "Наверх"


    // Проверяем прокрутку страницы
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block'; // Показываем кнопку, если прокручено более 100px
        } else {
            backToTopButton.style.display = 'none'; // Скрываем кнопку, если меньше
        }
    };

    // Обработчик клика на кнопку "Наверх"
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Прокручиваем плавно к верхней части страницы
    });
});