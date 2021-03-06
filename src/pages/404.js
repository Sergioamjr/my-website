/** @jsx jsx */
import { jsx } from "@emotion/core";
import Template from "../components/Template";
import ProjectItem from "../components/ProjectItem";
import { Container, pageTitle } from "../design";

const Projects = () => (
  <Template>
    <Container small>
      <h2 css={pageTitle}>Projects</h2>
      {[1, 2, 3, 4, 5].map(i => (
        <ProjectItem key={i} />
      ))}
    </Container>
  </Template>
);

export default Projects;
