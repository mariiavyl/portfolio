// Функция для копирования адреса электронной почты в буфер обмена
function copyEmail() {
    const email = "marivvyl@gmail.com"; // Ваш адрес электронной почты
    const tempInput = document.createElement("input"); // Создаем временное поле ввода
    document.body.appendChild(tempInput); // Добавляем его в документ
    tempInput.value = email; // Записываем адрес электронной почты в поле
    tempInput.select(); // Выделяем текст в поле
    tempInput.setSelectionRange(0, 99999); // Для мобильных устройств
    document.execCommand("copy"); // Копируем выделенный текст
    document.body.removeChild(tempInput); // Удаляем временное поле
    alert("Email address copied to clipboard: " + email); // Сообщаем об успешном копировании
}

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