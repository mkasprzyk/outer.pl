import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Gallery from '@browniebroke/gatsby-image-gallery'

const IndexPage = () => {
  return (
    <Layout>
      <Seo seo={{ metaTitle: "Stories" }} />
      <main className="container flex mt-4">
        <Gallery/>
      </main>
    </Layout>
  )
}

export default IndexPage