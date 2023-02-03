import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Gallery from '@browniebroke/gatsby-image-gallery'

export const pageQuery = graphql`
    query {
      allStrapiPhoto {
        edges {
          node {
            id
            name
            image {
              formats {
                small {
                  url
                }
              }
              url
            }
          }
        }
      }
    }
  `

const IndexPage = ({data}) => {
  const images = data.allStrapiPhoto.edges.map(({ node }) => {})
  console.log(images)

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