(function () {
    const html = document.documentElement;
    const btn = document.getElementById('toggle-btn');
    const avatar = document.getElementById('avatar');
    const switchEl = document.querySelector('.switch');

    const DARK_AVATAR = './assets/Avatar.png';
    const LIGHT_AVATAR = './assets/Avatar-light.png';

    function applyTheme(isLight) {
        if (isLight) {
            html.classList.add('light');
            btn.setAttribute('aria-label', 'Alternar para modo escuro');
            btn.setAttribute('aria-pressed', 'true');
            avatar.src = LIGHT_AVATAR;
        } else {
            html.classList.remove('light');
            btn.setAttribute('aria-label', 'Alternar para modo claro');
            btn.setAttribute('aria-pressed', 'false');
            avatar.src = DARK_AVATAR;
        }
    }

    function getInitialTheme() {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'light';
        return window.matchMedia('(prefers-color-scheme: light)').matches;
    }

    applyTheme(getInitialTheme());

    switchEl.addEventListener('click', function () {
        const isNowLight = !html.classList.contains('light');
        applyTheme(isNowLight);
        localStorage.setItem('theme', isNowLight ? 'light' : 'dark');
    });

    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches);
        }
    });
})();
