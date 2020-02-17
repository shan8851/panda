import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 20px;
`

export const Heading = styled.h1`
  font-family: panda;
  letter-spacing: 3px;
  text-align: ${props => (props.center ? "center" : "left")};
  margin-top: 20px;
  @media (max-width: 500px) {
    font-size: 26px;
  }
`

export const BodyCopy = styled.p`
  font-family: panda;
  margin-bottom: 40px;
`

export const List = styled.ul`
  font-family: panda;
`
