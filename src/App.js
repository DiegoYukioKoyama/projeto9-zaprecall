import styled from "styled-components"
import Logo from "./components/Logo";
import Deck from "./components/Deck";

export default function App() {
  return (
    
    <ScreenContainer>
      <Logo />
      <Deck />
    </ScreenContainer>

  )
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`