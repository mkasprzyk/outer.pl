import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo seo={{ metaTitle: "404 ¯\_(ツ)_/¯" }} />
      <main className="container flex mt-4">
        404 ¯\_(ツ)_/¯
      </main>
    </Layout>
  )
}

export default NotFoundPage