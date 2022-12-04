import styled from "styled-components"
import Logo from "./components/Logo";
import Deck from "./components/Deck";
import Counter from "./components/Counter"
import { useState } from "react";

export default function App() {

  const [contador, setContador] = useState(0)
  
  return (
    
    <ScreenContainer>
      <Logo />
      <Deck setContador={setContador} contador={contador}/>
      <Counter contador={contador} />
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