import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo seo={{ metaTitle: "Gear" }} />
      <main className="container flex mt-4">
        Gear
      </main>
    </Layout>
  )
}

export default IndexPage