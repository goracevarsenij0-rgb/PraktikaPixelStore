const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navMenu.classList.remove('open');
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const colorCards = document.querySelectorAll('.color-card');
    const phoneImage = document.getElementById('colorPhoneImage');
    const currentColorDisplay = document.getElementById('currentColorDisplay');

    let currentIndex = 0;
    const totalColors = colorCards.length;

    if (colorCards.length === 0) {
        console.warn('Цвета не найдены! Проверь класс .color-card.');
        return;
    }

    function setActiveColor(index) {
        colorCards.forEach(c => c.classList.remove('active'));

        const activeCard = colorCards[index];
        if (!activeCard) return;
        activeCard.classList.add('active');

        const newImage = activeCard.dataset.image;
        if (newImage && phoneImage) {
            phoneImage.src = newImage;
        }

        const colorName = activeCard.querySelector('span')?.textContent || 'Цвет';
        if (currentColorDisplay) {
            currentColorDisplay.textContent = colorName;
        }

        currentIndex = index;
    }

    colorCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            setActiveColor(index);
        });
    });

    document.getElementById('prevColor').addEventListener('click', function() {
        const newIndex = (currentIndex - 1 + totalColors) % totalColors;
        setActiveColor(newIndex);
    });

    document.getElementById('nextColor').addEventListener('click', function() {
        const newIndex = (currentIndex + 1) % totalColors;
        setActiveColor(newIndex);
    });

    setActiveColor(0);
});