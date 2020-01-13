/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "gatsby";
import Template from "../../components/Template";
import {
  Container,
  pageTitle,
  secondTitle,
  largeMgBottom,
  text,
  linkStyle
} from "../../design";

const Home = () => {
  return (
    <Template title="Home">
      <Container small>
        <h2 css={pageTitle}>Hi</h2>
        <div css={largeMgBottom}>
          <p css={secondTitle}>Hi</p>
          <p css={text}>
            Im from São Paulo, Brazil and Ive been working as a Frontend
            Developer for 4 years, specially with JavaScript and React. Im
            looking for new challenges, achievements and growth in my
            professional and personal life. Im an open-minded, analytical,
            proactive and respectful person. Im totally willing to learn new
            things to solve new problems and be able to build a better internet
            and reach other people with my work.
          </p>
          <p css={text}>
            Feel free to see my
            <Link css={linkStyle} to="/blog">
              last articles,
            </Link>
            ,{" "}
            <Link css={linkStyle} to="/projetos">
              projects
            </Link>{" "}
            or{" "}
            <Link css={linkStyle} to="/resume">
              my resume
            </Link>
            .
          </p>
        </div>
      </Container>
    </Template>
  );
};

export default Home;
