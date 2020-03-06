import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      radko: file(relativePath: { eq: "images/radko.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jay: file(relativePath: { eq: "images/jay.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kat: file(relativePath: { eq: "images/kat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const renderImage = () => {
    switch (src) {
      case "radko":
        return <Img fluid={data.radko.childImageSharp.fluid} />
      case "jay":
        return <Img fluid={data.jay.childImageSharp.fluid} />
      case "kat":
        return <Img fluid={data.kat.childImageSharp.fluid} />

      default:
        return null
    }
  }
  return renderImage()
}

Image.propTypes = {
  src: PropTypes.string,
}

Image.defaultProps = {
  src: `jay`,
}

export default Image
