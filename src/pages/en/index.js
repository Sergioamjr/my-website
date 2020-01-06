/** @jsx jsx */
import { jsx } from "@emotion/core";
import Template from "../../components/Template";
import Tags from "../../components/Tags";
import {
  Container,
  pageTitle,
  secondTitle,
  largeMgBottom,
  text,
  liStyle,
  wrapStyle,
  linkStyle
} from "../../design";
import { links } from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Template title="Home">
      <Container small>
        <h2 css={pageTitle}>Resume</h2>
        <div css={largeMgBottom}>
          <p css={secondTitle}>Front End Developer</p>
          <p css={text}>
            Im from São Paulo, Brazil and Ive been working as a Frontend
            Developer for 4 years, specially with JavaScript and React. Im
            looking for new challenges, achievements and growth in my
            professional and personal life. Im an open-minded, analytical,
            proactive and respectful person. Im totally willing to learn new
            things to solve new problems and be able to build a better internet
            and reach other people with my work.
          </p>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Certificates</p>
          <ul>
            <li css={liStyle}>
              <p css={text}>IT Management - Sumaré College</p>
            </li>
            <li css={liStyle}>
              <p css={text}>Front End Development - Caelum</p>
            </li>
            <li css={liStyle}>
              <p css={text}>English General Course - ISI Dublin</p>
            </li>
          </ul>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Contact</p>
          <ul>
            <li css={liStyle}>
              <p css={text}>E-mail: Sergioamjr91@gmail.com</p>
            </li>
            <li css={liStyle}>
              <p css={text}>Phone: +55 11 97383-6084</p>
            </li>
          </ul>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Links</p>
          <ul>
            {links.map(({ url, name }) => (
              <li key={name} css={liStyle}>
                <a
                  aria-label={`Minha conta no ${name}`}
                  title={`Minha conta no ${name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  css={linkStyle}
                  href={url}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div css={largeMgBottom}>
          <p css={secondTitle}>Tech Skills</p>
          <div css={wrapStyle}>
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "React Native",
              "Gatsby",
              "Redux",
              "SCSS",
              "Stylus",
              "CSS-in-JS",
              "Typescript",
              "GIT",
              "CI",
              "WordPress",
              "Mobile Friendly",
              "Responsible Design",
              "UX",
              "MongoDB",
              "MySQL",
              "Node JS",
              "Express",
              "Rest API",
              "SEO",
              "Semantic",
              "Kanban",
              "TDD",
              "E2E",
              "Accessibility"
            ].map((text, index) => (
              <Tags key={index} name={text} />
            ))}
          </div>
        </div>
      </Container>
    </Template>
  );
};

export default Home;
