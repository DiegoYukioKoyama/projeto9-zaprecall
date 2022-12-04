import styled from "styled-components"
import FlashCard from "./FlashCard"
import play from "../assets/img/seta_play.png"
import { useState } from "react"

export default function Deck(props) {

    const {setContador, contador} = props

    const cards = [
        { text: "Pergunta 1", image: play, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { text: "Pergunta 2", image: play, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { text: "Pergunta 3", image: play, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { text: "Pergunta 4", image: play, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { text: "Pergunta 5", image: play, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { text: "Pergunta 6", image: play, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { text: "Pergunta 7", image: play, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { text: "Pergunta 8", image: play, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    return (

         
            <>
            {cards.map((cards) => 
                <FlashCard key={cards.text} text={cards.text} image={cards.image} question={cards.question}  answer={cards.answer} setContador={setContador} contador={contador} cor="#FF3030" />
            )}
            </>




    )
}



