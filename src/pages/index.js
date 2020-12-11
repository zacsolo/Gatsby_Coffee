import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGulp } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <FaGulp style={{ fontSize: 100 }} />
    <p>Welcome to your new Gatsby site.</p>
  </Layout>
)

export default IndexPage
