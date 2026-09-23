import type { LinkDestaque, Perfil, RedeSocial } from "@/types";

const base = import.meta.env.BASE_URL;

export const perfil: Perfil = {
  nome: "Alvaro Gomes",
  usuario: "@alvarofgomes",
  status: "Desenvolvedor Back-end · Recife, BR",
  avatar: `${base}assets/avatar.jpg`
};

export const linksDestaque: LinkDestaque[] = [
  {
    url: "https://alvarofgomes.github.io/Portfolio_alvarofgomes/",
    icone: "code-slash",
    titulo: "Veja meu Portfólio",
    descricao: "projetos, experiência e mais"
  },
  {
    url: "https://github.com/alvarofgomes/Certificados",
    icone: "ribbon",
    titulo: "Certificados",
    descricao: "cursos, bootcamps e formações"
  }
];

export const redesSociais: RedeSocial[] = [
  { nome: "GitHub", url: "https://github.com/alvarofgomes", icone: "logo-github" },
  { nome: "LinkedIn", url: "https://www.linkedin.com/in/alvarofgomes/", icone: "logo-linkedin" },
  { nome: "Instagram", url: "https://www.instagram.com/_alvarogomes_/", icone: "logo-instagram" }
];

export const linkRodape = "https://www.linkedin.com/in/alvarofgomes/";
