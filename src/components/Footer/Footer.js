/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { justifyContent, primaryFont } from "../../design";
import {
  IconMedium,
  IconCodepen,
  IconGithub,
  IconLinkedin
} from "../../design/icons";

export const links = [
  {
    Icon: IconMedium,
    name: "Medium",
    url: "https://medium.com/@sergioamjr91"
  },
  {
    Icon: IconCodepen,
    name: "CodePen",
    url: "https://codepen.io/sergioamjr"
  },
  {
    Icon: IconGithub,
    name: "Github",
    url: "https://github.com/Sergioamjr/"
  },
  {
    Icon: IconLinkedin,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sergioamjr/"
  }
];

const footerStyle = css`
  background: var(--theme);
  height: 60px;
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

const liStyle = css`
  margin: 0 15px;
`;

const linkStyle = css`
  ${primaryFont}
  color: var(--light)
`;

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <ul css={justifyContent}>
        {links.map(({ Icon, url, name }) => (
          <li
            key={name}
            css={css`
              ${liStyle}
            `}
          >
            <a
              aria-label={`Minha conta no ${name}`}
              title={`Minha conta no ${name}`}
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              css={linkStyle}
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
