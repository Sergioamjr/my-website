import { useGetLang } from "../hooks";

export const menuOptionsPT = [
  {
    name: "Início",
    url: "/"
  },
  {
    name: "Artigos",
    url: "/blog"
  },
  {
    name: "Projetos",
    url: "/projetos"
  },
  {
    name: "CV",
    url: "/resume"
  }
];

export const menuOptionsEN = [
  {
    name: "Home",
    url: "/en"
  },
  {
    name: "Articles",
    url: "/en/blog"
  },
  {
    name: "Projects",
    url: "/en/projects"
  },
  {
    name: "Resume",
    url: "/en-resume"
  }
];

export const providerCorretlyMenu = pathname => {
  const lang = useGetLang(pathname);
  return lang === "EN" ? menuOptionsEN : menuOptionsPT;
};
