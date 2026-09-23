import { readonly, ref } from "vue";

type Tema = "light" | "dark";

const CHAVE = "theme";
const html = document.documentElement;
const midiaClaro = window.matchMedia("(prefers-color-scheme: light)");

const isLight = ref(html.classList.contains("light"));

function aplicar(claro: boolean) {
  html.classList.toggle("light", claro);
  isLight.value = claro;
}

function lerSalvo(): Tema | null {
  try {
    const salvo = localStorage.getItem(CHAVE);
    return salvo === "light" || salvo === "dark" ? salvo : null;
  } catch {
    return null;
  }
}

midiaClaro.addEventListener("change", (e) => {
  if (!lerSalvo()) aplicar(e.matches);
});

export function useTheme() {
  function setTheme(tema: Tema) {
    aplicar(tema === "light");
    try {
      localStorage.setItem(CHAVE, tema);
    } catch {
      /* storage indisponível: o tema vale só para a sessão */
    }
  }

  return { isLight: readonly(isLight), setTheme };
}
