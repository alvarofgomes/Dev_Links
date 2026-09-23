# Dev Links — Alvaro Gomes

Página de links pessoais com tema dark/light, animação de constelação e design responsivo — feita com Vue 3, TypeScript e Vite.

![Preview](.github/Preview.png)

🔗 **[Ver online](https://alvarofgomes.github.io/Dev_Links/)**

---

## Funcionalidades

- Alternância dark/light com persistência via `localStorage` e respeito à preferência do sistema operacional
- Fundo animado com constelação de nós via Canvas (com interação pelo mouse)
- Avatar adaptado ao tema ativo
- Links para portfólio, certificados e LinkedIn
- Ícones de redes sociais (GitHub, LinkedIn, Instagram)
- Indicador de status com animação de pulse
- Suporte a `prefers-reduced-motion`
- Acessibilidade: `aria-label`, `aria-pressed`, `focus-visible`

---

## Tecnologias

- Vue 3 (Composition API) + TypeScript
- Vite
- ESLint + Prettier
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — Google Fonts
- [Ionicons](https://ionic.io/ionicons) — ícones
- Deploy no GitHub Pages via GitHub Actions

---

## Rodando localmente

```bash
npm install
npm run dev
```

Outros scripts: `npm run build`, `npm run preview`, `npm run type-check`, `npm run lint`, `npm run format`.

## Estrutura

```
src/
├── components/   # ProfileHeader, ThemeSwitch, LinkList, SocialLinks, AppFooter, NetworkBackground
├── composables/  # useTheme, useNetworkBackground
├── data/         # links.ts — perfil, links e redes sociais
├── styles/       # tokens de cor e estilos globais
└── types/
```

---

## Contato

- **E-mail**: [alvarogomes098@gmail.com](mailto:alvarogomes098@gmail.com)
- **LinkedIn**: [linkedin.com/in/alvarofgomes](https://www.linkedin.com/in/alvarofgomes)
- **GitHub**: [github.com/alvarofgomes](https://github.com/alvarofgomes)
