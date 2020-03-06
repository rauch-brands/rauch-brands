import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = ({ src }) => {
  const data = useStaticQuery(graphql`
    {
      radko: markdownRemark(frontmatter: { path: { eq: "/radko" } }) {
        frontmatter {
          content
        }
      }
      jay: markdownRemark(frontmatter: { path: { eq: "/jay" } }) {
        frontmatter {
          content
        }
      }
      kat: markdownRemark(frontmatter: { path: { eq: "/kat" } }) {
        frontmatter {
          content
        }
      }
    }
  `)
  const renderDescription = () => {
    switch (src) {
      case "radko":
        return data.radko.frontmatter.content
      case "jay":
        return data.jay.frontmatter.content
      case "kat":
        return data.kat.frontmatter.content

      default:
        return null
    }
  }
  return <p>{renderDescription()}</p>
}

export default ComponentName
