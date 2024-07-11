function showPage(pageId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(pageId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('about');
});

document.addEventListener('DOMContentLoaded', function () {
   
    const backToTopButton = document.getElementById('back-to-top');

    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});