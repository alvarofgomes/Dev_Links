(function () {
    const html = document.documentElement;
    const avatar = document.getElementById("avatar");
    const btnDark = document.getElementById("btn-dark");
    const btnLight = document.getElementById("btn-light");

    const DARK_AVATAR = "./assets/Avatar.png";
    const LIGHT_AVATAR = "./assets/Avatar-light.png";

    function applyTheme(isLight) {
        html.classList.toggle("light", isLight);
        avatar.src = isLight ? LIGHT_AVATAR : DARK_AVATAR;
        btnLight.classList.toggle("active", isLight);
        btnDark.classList.toggle("active", !isLight);
        btnLight.setAttribute("aria-pressed", isLight);
        btnDark.setAttribute("aria-pressed", !isLight);
        readNetColors();
    }

    function getInitialTheme() {
        const saved = localStorage.getItem("theme");
        if (saved) return saved === "light";
        return window.matchMedia("(prefers-color-scheme: light)").matches;
    }

    btnDark.addEventListener("click", () => { applyTheme(false); localStorage.setItem("theme", "dark"); });
    btnLight.addEventListener("click", () => { applyTheme(true); localStorage.setItem("theme", "light"); });

    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
        if (!localStorage.getItem("theme")) applyTheme(e.matches);
    });

    /* ---------- Constelação ---------- */
    let net = { node: "155,182,230", a: "91,149,245", b: "139,92,246" };
    function readNetColors() {
        const cs = getComputedStyle(html);
        net.node = (cs.getPropertyValue("--net-node") || "155,182,230").trim();
        net.a = (cs.getPropertyValue("--net-a") || "91,149,245").trim();
        net.b = (cs.getPropertyValue("--net-b") || "139,92,246").trim();
    }

    function initNetwork() {
        const canvas = document.getElementById("bg-canvas");
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let w, h, dpr, nodes = [], mouse = { x: -9999, y: -9999 };
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = window.innerWidth; h = window.innerHeight;
            canvas.width = w * dpr; canvas.height = h * dpr;
            canvas.style.width = w + "px"; canvas.style.height = h + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.min(95, Math.floor((w * h) / 15000));
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * w, y: Math.random() * h,
                vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 1.6 + 0.6
            }));
        }

        function step() {
            ctx.clearRect(0, 0, w, h);
            for (const n of nodes) {
                n.x += n.vx; n.y += n.vy;
                if (n.x < 0 || n.x > w) n.vx *= -1;
                if (n.y < 0 || n.y > h) n.vy *= -1;
                const dxm = mouse.x - n.x, dym = mouse.y - n.y, dm = Math.hypot(dxm, dym);
                if (dm < 150) { n.x += dxm / dm * 0.4; n.y += dym / dm * 0.4; }
            }
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i], b = nodes[j];
                    const dx = a.x - b.x, dy = a.y - b.y, dist = Math.hypot(dx, dy);
                    if (dist < 128) {
                        const op = (1 - dist / 128) * 0.55;
                        const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
                        g.addColorStop(0, `rgba(${net.a},${op})`);
                        g.addColorStop(1, `rgba(${net.b},${op})`);
                        ctx.strokeStyle = g; ctx.lineWidth = 0.8;
                        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
                    }
                }
            }
            for (const n of nodes) {
                ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${net.node},0.9)`; ctx.fill();
            }
            if (!reduce) requestAnimationFrame(step);
        }

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
        window.addEventListener("mouseleave", () => { mouse.x = -9999; mouse.y = -9999; });
        resize();
        if (reduce) step(); else requestAnimationFrame(step);
    }

    applyTheme(getInitialTheme());
    initNetwork();
})();
