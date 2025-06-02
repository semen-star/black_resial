window.addEventListener('load', () => {
            const logo = document.getElementById('logo');
            const content = document.getElementById('main-content');
            
            // Показываем контент после анимации логотипа
            setTimeout(() => {
                content.style.display = 'block';
            }, 2000);
        });