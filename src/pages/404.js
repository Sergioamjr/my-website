import React from "react"

import SEO from "../components/seo"
import Template from "../components/Template"

const NotFoundPage = () => (
  <Template>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Template>
)

export default NotFoundPage
