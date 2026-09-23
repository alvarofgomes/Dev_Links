import { onBeforeUnmount, onMounted, watch, type Ref } from "vue";

interface No {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const DISTANCIA_LINHA = 128;
const RAIO_MOUSE = 150;

export function useNetworkBackground(canvas: Ref<HTMLCanvasElement | null>, tema: Ref<boolean>) {
  const cores = { node: "155,182,230", a: "91,149,245", b: "139,92,246" };
  const mouse = { x: -9999, y: -9999 };
  const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let ctx: CanvasRenderingContext2D | null = null;
  let w = 0;
  let h = 0;
  let nos: No[] = [];
  let frame = 0;

  function lerCores() {
    const cs = getComputedStyle(document.documentElement);
    cores.node = cs.getPropertyValue("--net-node").trim() || cores.node;
    cores.a = cs.getPropertyValue("--net-a").trim() || cores.a;
    cores.b = cs.getPropertyValue("--net-b").trim() || cores.b;
  }

  function redimensionar() {
    const el = canvas.value;
    if (!el || !ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    el.width = w * dpr;
    el.height = h * dpr;
    el.style.width = `${w}px`;
    el.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const total = Math.min(95, Math.floor((w * h) / 15000));
    nos = Array.from({ length: total }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.6
    }));
    if (reduzirMovimento) desenhar();
  }

  function mover() {
    for (const n of nos) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      const dx = mouse.x - n.x;
      const dy = mouse.y - n.y;
      const d = Math.hypot(dx, dy);
      if (d > 0 && d < RAIO_MOUSE) {
        n.x += (dx / d) * 0.4;
        n.y += (dy / d) * 0.4;
      }
    }
  }

  function desenhar() {
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < nos.length; i++) {
      for (let j = i + 1; j < nos.length; j++) {
        const a = nos[i];
        const b = nos[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < DISTANCIA_LINHA) {
          const op = (1 - dist / DISTANCIA_LINHA) * 0.55;
          const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          g.addColorStop(0, `rgba(${cores.a},${op})`);
          g.addColorStop(1, `rgba(${cores.b},${op})`);
          ctx.strokeStyle = g;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    ctx.fillStyle = `rgba(${cores.node},0.9)`;
    for (const n of nos) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    mover();
    desenhar();
    frame = requestAnimationFrame(loop);
  }

  function aoMoverMouse(e: MouseEvent) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function aoSairMouse() {
    mouse.x = -9999;
    mouse.y = -9999;
  }

  watch(tema, () => {
    lerCores();
    if (reduzirMovimento) desenhar();
  });

  onMounted(() => {
    ctx = canvas.value?.getContext("2d") ?? null;
    if (!ctx) return;
    lerCores();
    window.addEventListener("resize", redimensionar);
    window.addEventListener("mousemove", aoMoverMouse);
    document.documentElement.addEventListener("mouseleave", aoSairMouse);
    redimensionar();
    if (!reduzirMovimento) frame = requestAnimationFrame(loop);
  });

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", redimensionar);
    window.removeEventListener("mousemove", aoMoverMouse);
    document.documentElement.removeEventListener("mouseleave", aoSairMouse);
  });
}
