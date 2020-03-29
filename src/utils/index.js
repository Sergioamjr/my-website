import { useGetLang } from "../hooks";
import {
  IconMedium,
  IconCodepen,
  IconGithub,
  IconLinkedin,
  IconEmail
} from "../design/icons";

export const footerLinksEN = [
  {
    Icon: IconMedium,
    name: "Medium",
    description: "My account on Medium",
    url: "https://medium.com/@sergioamjr91"
  },
  {
    Icon: IconCodepen,
    name: "CodePen",
    description: "My account on Codepen",
    url: "https://codepen.io/sergioamjr"
  },
  {
    Icon: IconGithub,
    description: "My account on GitHub",
    name: "Github",
    url: "https://github.com/Sergioamjr/"
  },
  {
    Icon: IconLinkedin,
    name: "LinkedIn",
    description: "My account on Linkedin",
    url: "https://www.linkedin.com/in/sergioamjr/"
  },
  {
    Icon: IconEmail,
    name: "Gmail",
    description: "Send me an e-mail",
    url: "mailto: sergioamjr91@gmail.com"
  }
];

export const footerLinksPT = [
  {
    Icon: IconMedium,
    name: "Medium",
    description: "Minha conta no Medium",
    url: "https://medium.com/@sergioamjr91"
  },
  {
    Icon: IconCodepen,
    name: "CodePen",
    description: "Minha conta no CodePen",
    url: "https://codepen.io/sergioamjr"
  },
  {
    Icon: IconGithub,
    description: "Minha conta no Github",
    name: "Github",
    url: "https://github.com/Sergioamjr/"
  },
  {
    Icon: IconLinkedin,
    name: "LinkedIn",
    description: "Minha conta no Linkedin",
    url: "https://www.linkedin.com/in/sergioamjr/"
  },
  {
    Icon: IconEmail,
    name: "Gmail",
    description: "Me mande um email",
    url: "mailto: sergioamjr91@gmail.com"
  }
];

export const menuOptionsPT = [
  {
    name: "Início",
    id: "home",
    url: "/"
  },
  {
    name: "Artigos",
    id: "blog",
    url: "/blog"
  },
  {
    name: "Projetos",
    id: "projects",
    url: "/projetos"
  }
];

export const menuOptionsEN = [
  {
    name: "Home",
    id: "home",
    url: "/en"
  },
  {
    name: "Articles",
    id: "blog",
    url: "/en/blog"
  },
  {
    name: "Projects",
    id: "projects",
    url: "/en/projects"
  }
];

const menuMap = {
  "/": "home",
  "/en": "home",
  "/blog": "blog",
  "/en/blog": "blog",
  "/projetos": "projects",
  "/en/projects": "projects"
};

export const providerCorretlyMenu = pathname => {
  const lang = useGetLang(pathname);
  return lang === "EN" ? menuOptionsEN : menuOptionsPT;
};

export const providerCorretlyFooter = pathname => {
  const lang = useGetLang(pathname);
  return lang === "EN" ? footerLinksEN : footerLinksPT;
};

export const returnActivedMenu = pathName => {
  return menuMap[pathName] || menuMap[`${pathName}/`] || "blog";
};

export const returnWebsiteLang = pathname => {
  const lang = useGetLang(pathname);
  return lang === "PT" ? "pt-br" : "en";
};

export const returnLocationProperty = property => {
  return typeof window !== "undefined" ? window.location[property] : "";
};
