# Dev Links — Alvaro Gomes

Página de links pessoais com tema dark/light, fundo animado de constelação e design responsivo — feita com Vue 3, TypeScript e Vite.

![Página nos temas escuro e claro](.github/screenshot.png)

🔗 **[Ver online](https://alvarofgomes.github.io/Dev_Links/)**

---

## Funcionalidades

- Alternância dark/light com persistência via `localStorage` e respeito à preferência do sistema operacional, sem piscar o tema errado no carregamento
- Fundo animado com constelação de nós via Canvas, com interação pelo mouse
- Links em destaque para portfólio e certificados
- Ícones de redes sociais (GitHub, LinkedIn, Instagram)
- Indicador de status com animação de pulse
- Suporte a `prefers-reduced-motion`
- Acessibilidade: `aria-label`, `aria-pressed`, `focus-visible`
- Favicon próprio e `og:image` para pré-visualização ao compartilhar o link

---

## Tecnologias

- Vue 3 (Composition API) + TypeScript
- Vite
- ESLint + Prettier
- [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — Google Fonts
- [Ionicons](https://ionic.io/ionicons) — ícones
- GitHub Actions + GitHub Pages — deploy

---

## Rodando localmente

Requer Node.js 20 ou superior.

```bash
npm install
npm run dev
```

| Script               | O que faz                                  |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | servidor de desenvolvimento                |
| `npm run build`      | checagem de tipos + build de produção      |
| `npm run preview`    | serve o build localmente                   |
| `npm run type-check` | checagem de tipos com `vue-tsc`            |
| `npm run lint`       | ESLint com correção automática             |
| `npm run format`     | Prettier em `src/`                         |

---

## Estrutura

```
public/
├── assets/avatar.jpg   # foto de perfil
└── favicon.svg
src/
├── components/         # ProfileHeader, ThemeSwitch, LinkList, SocialLinks, AppFooter, NetworkBackground
├── composables/        # useTheme, useNetworkBackground
├── data/links.ts       # perfil, links em destaque e redes sociais
├── styles/index.css    # tokens de cor dos temas e estilos globais
├── types/
├── App.vue
└── main.ts
```

Para adicionar ou alterar um link, basta editar `src/data/links.ts`.

---

## Deploy

Todo push na `main` dispara o workflow [`deploy.yml`](.github/workflows/deploy.yml), que roda o build e publica o `dist/` no GitHub Pages. O desenvolvimento acontece na branch `dev` e chega à `main` via pull request.

---

## Contato

- **E-mail**: [alvarogomes098@gmail.com](mailto:alvarogomes098@gmail.com)
- **LinkedIn**: [linkedin.com/in/alvarofgomes](https://www.linkedin.com/in/alvarofgomes)
- **GitHub**: [github.com/alvarofgomes](https://github.com/alvarofgomes)
