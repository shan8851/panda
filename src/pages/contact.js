import React from "react"
import Layout from "../components/shared/layout"
import SEO from "../components/shared/seo"
import { Heading } from "../components/shared/sharedComponents.style"
import styled from "styled-components"
import PandaIcon from '../images/pandaicon.png'
import { FaPhone, FaLinkedinIn } from "react-icons/fa"

export default function Contact() {
  const [time, setTime] = React.useState('')
  const handleChange = e => {
    setTime(e.target.value)
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <Container>
        <Heading>CONNECT WITH PANDA</Heading>
        <ContactWrap>
          <Img src={PandaIcon} alt="Panda Icon" />
          <StyledA href="mailto:paul.anderson@pandasearch.co.uk">PAUL.ANDERSON@PANDASEARCH.CO.UK</StyledA>
        </ContactWrap>
        <ContactWrap>
          <PhoneIcon>
            <FaPhone size={30}/>
            <StyledA style={{paddingLeft: 10}} href="tel:447528204883">+44 (0)7528 204883</StyledA>
          </PhoneIcon>
        </ContactWrap>
        <ContactWrap>
          <PhoneIcon>
            <FaLinkedinIn size={30}/>
            <StyledA style={{paddingLeft: 10}} href="https://www.linkedin.com/in/paulanderson9/">Find me on LinkedIn</StyledA>
          </PhoneIcon>
        </ContactWrap>
        <Form
          name='contact'
          method='post'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          action="/success"
        >
          <Input type='hidden' name='bot-field' />
          <input type="hidden" name="form-name" value="contact" />
          <Input name="name" type="text" placeholder="Enter your name" />
          <Input name="business name" type="text" placeholder="Enter your business name" />
          <Input name="email" type="text" placeholder="Enter your email" />
          <Input name="phone number" type="text" placeholder="Enter your phone number" />
          <Input name="location" type="text" placeholder="Location" />
          <Select name="best time to call" value={time} onChange={handleChange}>
            <option>Best time to call</option>
            <option value="anytime">Anytime</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </Select>
          <Textarea rows="6" placeholder='Anything else?' name='message'  />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>


      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  width: 50%;
  margin: auto;
  @media (max-width: 1200px) {
    width: 70%
  }
  @media (max-width: 1000px) {
    width: 90%
  }
`

const ContactWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
const Img = styled.img`
  height: 30px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0;
`

const StyledA = styled.a`
  color: #000000;
  text-decoration: none;
  font-family: panda;
  @media (max-width: 510px) {
    font-size: 16px;
  }
`
const PhoneIcon = styled.a`
  margin: 0 10px;
  color: #000000;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  margin: 10px 0;
  border: 1px solid black;
  padding: 5px;
  font-family: panda;
  &::placeholder {
    opacity: 1;
    font-family: panda;
   }
`

const Textarea = styled.textarea`
  margin: 10px 0;
  border: 1px solid black;
  padding: 5px;
  font-family: panda;
  &::placeholder {
    opacity: 1;
    font-family: panda;
   }
`

const Select = styled.select`
  border: 1px solid black;
  font-family: panda;
  margin: 10px 0;  
`

const SubmitButton = styled.button`
  width: 270px;
  background-color: black;
  color: white;
  font-family: panda-bold;
  padding: 10px 0;
  margin-top: 10px;
  @media (max-width: 800px) {
    width: 100%;
  }
`


