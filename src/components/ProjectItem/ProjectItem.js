/** @jsx jsx */
import { jsx } from "@emotion/core";
import Tags from "../Tags";
import { text, secondTitle, xLargeMgBottom, mgBottom } from "../../design";

const ProjectItem = () => {
  return (
    <div css={xLargeMgBottom}>
      <p css={secondTitle}>WhatToWatch?</p>
      <p css={text}>A platform to recommend what you can watch.</p>
      <div css={mgBottom}>
        {["React", "Next", "Styled Components"].map((text, index) => (
          <Tags key={index} name={text} />
        ))}
      </div>
      <a href="/#">Githubs Link</a>
    </div>
  );
};

export default ProjectItem;
