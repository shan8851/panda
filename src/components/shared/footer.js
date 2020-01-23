import React from "react"
import styled from "styled-components"
import { FaLinkedinIn } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterIcon href="https://twitter.com">
        <FaTwitter size={40} />
      </FooterIcon>
      <FooterIcon href="https://linkedin.com">
        <FaLinkedinIn size={40} />
      </FooterIcon>
      <FooterIcon href="https://facebook.com">
        <FaFacebook size={40} />
      </FooterIcon>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`

const FooterIcon = styled.a`
  margin: 0 10px;
  color: #000000;
`
