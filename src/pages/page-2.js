import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Template from "../components/Template"

const SecondPage = () => (
  <Template>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Template>
)

export default SecondPage
