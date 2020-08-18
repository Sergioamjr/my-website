/** @jsx jsx */
import { jsx } from "@emotion/core";
import BlogCard from "../../components/BlogCard";
import Page from "../../views/page";

const projects = [
  {
    name: "WhatToWatch",
    description:
      "Get a suggestion or look at the most recommended movies nowadays.",
    link: "https://whatto-watch.herokuapp.com/",
  },
  {
    name: "Snake Game",
    description: "The classic snake game built with Typescript and React.",
    link: "https://github.com/Sergioamjr/snakegame-ts",
  },
  {
    name: "Unguessing UI",
    description:
      "UnGuessing UI is a React Component, created to help you build the perfect UI without struggle.",
    link: "https://github.com/Sergioamjr/unguessing-ui",
  },
];

const Projects = () => {
  return (
    <Page
      title="Projects"
      translateLabel="Ver em Português"
      translateTo="/projetos"
    >
      <div>
        {projects.map(({ name, description, link }, i) => {
          return (
            <BlogCard
              label="See more"
              externalLink
              categories={[]}
              excerpt={description}
              path={link}
              title={name}
              key={i}
            />
          );
        })}
      </div>
    </Page>
  );
};
export default Projects;
