import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo seo={{ metaTitle: "About" }} />
      <main className="container flex mt-4">
        About
      </main>
    </Layout>
  )
}

export default IndexPage