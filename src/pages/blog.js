/** @jsx jsx */
import { jsx } from "@emotion/core";
import Template from "../components/Template";
import BlogCard from "../components/BlogCard";
import { Container, pageTitle } from "../design";

const Blog = () => (
  <Template>
    <Container small>
      <h2 css={pageTitle}>Articles</h2>
      {[1, 2, 3, 4, 5].map(i => (
        <BlogCard key={i} />
      ))}
    </Container>
  </Template>
);

export default Blog;
