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
    description: "Me manda um email",
    url: "mailto: sergioamjr91@gmail.com"
  }
];

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
  }
];

export const providerCorretlyMenu = pathname => {
  const lang = useGetLang(pathname);
  return lang === "EN" ? menuOptionsEN : menuOptionsPT;
};

export const providerCorretlyFooter = pathname => {
  const lang = useGetLang(pathname);
  return lang === "EN" ? footerLinksEN : footerLinksPT;
};
