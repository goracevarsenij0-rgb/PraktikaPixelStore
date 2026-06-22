document.addEventListener('DOMContentLoaded', function() {
    // Все карточки характеристик
    const specItems = document.querySelectorAll('.spec-item[data-modal]');
    // Все модальные окна
    const modals = document.querySelectorAll('.modal-overlay');
    // Кнопки закрытия
    const closeButtons = document.querySelectorAll('.modal-close');

    specItems.forEach(item => {
        item.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal-overlay');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });

    const loginButton = document.getElementById('openLoginModal');
    const loginModal = document.getElementById('modal-login');
    const closeLoginModal = document.getElementById('closeLoginModal');

    if (loginButton && loginModal) {
        loginButton.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        if (closeLoginModal) {
            closeLoginModal.addEventListener('click', function() {
                loginModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        loginModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    const buyButton = document.getElementById('openBuyModal');
    const buyModal = document.getElementById('modal-buy');
    const closeBuyModal = document.getElementById('closeBuyModal');

    if (buyButton && buyModal) {
        buyButton.addEventListener('click', function(e) {
            e.preventDefault();
            buyModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        if (closeBuyModal) {
            closeBuyModal.addEventListener('click', function() {
                buyModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        }

        buyModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            if (!email || !password) {
                alert('Пожалуйста, заполните все поля.');
                return;
            }

            if (password.length < 6) {
                alert('Пароль должен содержать минимум 6 символов.');
                return;
            }

            alert(
                '✅ Добро пожаловать!\n\n' +
                'Вы успешно вошли в аккаунт.\n' +
                'Email: ' + email
            );

            loginModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            loginForm.reset();
        });
    }

    const buyForm = document.getElementById('buyForm');
    if (buyForm) {
        buyForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('buyName').value.trim();
            const phone = document.getElementById('buyPhone').value.trim();
            const email = document.getElementById('buyEmail').value.trim();
            const color = document.getElementById('buyColor').value;
            const quantity = document.getElementById('buyQuantity').value;

            if (!name || !phone || !email) {
                alert('Пожалуйста, заполните все обязательные поля.');
                return;
            }

            alert(
                '✅ Заказ оформлен!\n\n' +
                'Имя: ' + name + '\n' +
                'Телефон: ' + phone + '\n' +
                'Email: ' + email + '\n' +
                'Цвет: ' + color + '\n' +
                'Количество: ' + quantity + '\n\n' +
                'Мы свяжемся с вами в ближайшее время.'
            );

            buyModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            buyForm.reset();
            document.getElementById('buyQuantity').value = 1;
        });
    }
});