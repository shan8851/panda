import React from "react"
import { graphql, Link } from "gatsby"
import Contact from "../components/shared/contact"
import styled from "styled-components"
import Header from "../components/shared/header"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div>
      <Header />
      <BlogContainer>
        <BlogDate>
          {frontmatter.date} • Written By {frontmatter.author}
        </BlogDate>
        <BlogTitle>{frontmatter.title}</BlogTitle>
        <BlogContent
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <BackLink to="/blog/">← Back to index</BackLink>
      </BlogContainer>
      <Contact />
    </div>
  )
}

const BlogContainer = styled.div`
  padding: 50px 100px;
`

const BlogContent = styled.div`
  font-family: panda;
  margin-bottom: 50px;
`

const BlogTitle = styled.h1`
  font-family: panda-bold;
  font-size: 68px;
`

const BackLink = styled(Link)`
  font-family: panda-bold;
  font-size: 36px;
  margin-top: 100px;
  text-decoration: none;
  color: black;
`

const BlogDate = styled.p`
  font-family: panda-bold;
`

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        author
      }
    }
  }
`
