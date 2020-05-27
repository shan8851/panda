import React from "react"
import PostLink from "../components/shared/post-link"
import Header from "../components/shared/header"
import Contact from "../components/shared/contact"
import styled from "styled-components"

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <div>
      <Header />
      <BlogWrapper>{Posts}</BlogWrapper>
      <Contact />
    </div>
  )
}

const BlogWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60vw;
  margin: auto;
`

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 140)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
