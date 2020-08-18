/** @jsx jsx */
import { jsx } from "@emotion/core";
import BlogCard from "../components/BlogCard";
import Page from "../views/page";

const projects = [
  {
    name: "WhatToWatch",
    description:
      "Receba sugestões do que assistir ou veja os filmes mais populares por gênero.",
    link: "https://whatto-watch.herokuapp.com/",
  },
  {
    name: "Snake Game",
    description: "O clássico jogo da cobrinha feito com React e Typescript.",
    link: "https://github.com/Sergioamjr/snakegame-ts",
  },
  {
    name: "Unguessing UI    ",
    description:
      "UnGuessing UI é um componente criado para ajudar a construir fieis UI’s sem dificuldades.    ",
    link: "https://github.com/Sergioamjr/unguessing-ui",
  },
];

const Projects = () => {
  return (
    <Page
      translateLabel="See in English"
      translateTo="en/projects"
      title="Projetos"
    >
      <div>
        {projects.map(({ name, link, description }, i) => {
          return (
            <BlogCard
              externalLink
              categories={[]}
              excerpt={description}
              path={link}
              title={name}
              label="Ver mais"
              key={i}
            />
          );
        })}
      </div>
    </Page>
  );
};
export default Projects;
