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
            image {
              localFile {
                childImageSharp {
                  thumb: gatsbyImageData(
                    width: 270
                    height: 270
                    placeholder: BLURRED
                  )
                  full: gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  `

const IndexPage = ({data}) => {
  const images = data.allStrapiPhoto.edges.map(({ node }) => node.image.localFile.childImageSharp)
  console.log(images)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Stories" }} />
      <main className="container flex mt-4">
        <Gallery images={images}/>
      </main>
    </Layout>
  )
}

export default IndexPage