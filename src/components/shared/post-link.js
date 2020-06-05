import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const PostLink = ({ post }) => (
  <BlogItem>
    <BlogDate>{post.frontmatter.date}</BlogDate>
    <BlogTitle>{post.frontmatter.title}</BlogTitle>
    <BlogContent>{post.excerpt}</BlogContent>
    <BlogLink to={post.frontmatter.slug}>Read More</BlogLink>
  </BlogItem>
)

export default PostLink

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 500px;
  padding: 20px;
`

const BlogContent = styled.div`
  font-family: panda;
  padding-bottom: 30px;
`

const BlogTitle = styled.h1`
  font-family: panda-bold;
  font-size: 36px;
  margin-bottom: 50px;
`

const BlogDate = styled.p`
  font-family: panda-bold;
`

const BlogLink = styled(Link)`
  font-family: panda;
  text-decoration: underline;
  color: inherit;
`
