import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 20px;
`
export const Heading = styled.h1`
  font-family: panda-bold;
  text-align: ${props => (props.center ? "center" : "left")};
`

export const BodyCopy = styled.p`
  font-family: panda;
`

export const List = styled.ul`
  font-family: panda;
`
