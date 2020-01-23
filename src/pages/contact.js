import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import { Heading, Container } from "../components/shared/sharedComponents.style"
import styled from "styled-components"
import { FaFileExcel } from "react-icons/fa"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Heading>Contact Us</Heading>
        <Wrapper>
          <Info>
            <Title>Get In Touch</Title>
            <div style={{ marginBottom: 10 }}>
              <BoldText>+44(0) 1234 567 890</BoldText>
              <BoldText>email@email.com</BoldText>
            </div>
            <div style={{ marginBottom: 10 }}>
              <RegText>Address line 1</RegText>
              <RegText>Address line 2</RegText>
              <RegText>Address line 3</RegText>
              <RegText>Address line 4</RegText>
              <RegText>Address line 5</RegText>
            </div>
          </Info>
          <Form>
            <InputWrap>
              <BoldTextForm white>Name:</BoldTextForm>
              <ShortField type="text" placeholder="Click to type..." />
            </InputWrap>
            <InputWrap>
              <BoldTextForm white>Email:</BoldTextForm>
              <ShortField type="text" placeholder="Click to type..." />
            </InputWrap>
            <InputWrap>
              <BoldTextForm white>Message:</BoldTextForm>
              <LongField type="text" placeholder="Add message..." />
            </InputWrap>
            <div
              style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SubmitButton>SUBMIT</SubmitButton>
            </div>
          </Form>
        </Wrapper>
      </Container>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  flex-grow: 1;
  margin: auto;
  @media (max-width: 1030px) {
    flex-direction: column;
  }
`

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 360px;
  background-color: white;
  padding-left: 20px;
  padding-top: 10px;
  border: 3px solid black;
  margin: auto;
  @media (max-width: 1030px) {
    width: 80%;
  }
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 360px;
  padding-top: 10px;
  border: 3px solid black;
  background-color: black;
  padding-left: 20px;
  margin: auto;
  @media (max-width: 1030px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    height: 400px;
  }
`

const Title = styled.h2`
  color: ${props => (props.white ? "#ffffff" : "#000000")};
  margin: 0;
  padding: 10px 0;
  font-family: panda-bold;
`
const BoldText = styled.p`
  color: ${props => (props.white ? "#ffffff" : "#000000")};
  margin: 0;
  padding: 0;
  font-family: panda-bold;
`

const BoldTextForm = styled.p`
  color: ${props => (props.white ? "#ffffff" : "#000000")};
  margin: 0;
  padding: 0;
  width: 25%;
  font-family: panda-bold;
  @media (max-width: 700px) {
    width: 100%;
  }
`

const RegText = styled.p`
  color: ${props => (props.white ? "#ffffff" : "#000000")};
  margin: 0;
  padding: 0;
  font-family: panda;
`

const ShortField = styled.input`
  background-color: #fff;
  color: #000;
  width: 65%;
  font-family: panda-bold;
  border: none;
  border-bottom: 3px solid white;
  margin: 10px;
  @media (max-width: 700px) {
    width: 90%;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: panda-bold;
    color: #000;
  }
  :-ms-input-placeholder {
    color: #000;
  }
`

const LongField = styled.textarea`
  background-color: #fff;
  color: #000;
  width: 65%;
  font-family: panda-bold;
  border: none;
  border-bottom: 3px solid white;
  margin: 10px;
  @media (max-width: 700px) {
    width: 90%;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: panda-bold;
    color: #000;
  }
  :-ms-input-placeholder {
    color: #000;
  }
`

const SubmitButton = styled.button`
  background-color: #ffffff;
  height: 50px;
  width: 220px;
  font-family: panda-bold;
`
