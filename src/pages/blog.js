/** @jsx jsx */
import { jsx } from "@emotion/core"
import Template from "../components/Template"
import ProfessionalExperienceItem from "../components/ProfessionalExperienceItem"
import Tags from "../components/Tags"
import BlogCard from "../components/BlogCard"
import {
  Container,
  pageTitle,
  secondTitle,
  largeMgBottom,
  text,
  liStyle,
  wrapStyle,
  linkStyle,
} from "../design"

const IndexPage = () => (
  <Template>
    <Container small>
      <h2 css={pageTitle}>Articles</h2>
      {[1, 2, 3, 4, 5].map(i => (
        <BlogCard key={i} />
      ))}
    </Container>
  </Template>
)

export default IndexPage
