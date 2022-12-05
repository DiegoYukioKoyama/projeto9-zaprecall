import { useState } from "react"
import styled from "styled-components"
import setaVirar from "../assets/img/seta_virar.png"
import iconeCerto from "../assets/img/icone_certo.png"
import iconeErro from "../assets/img/icone_erro.png"
import iconeQuase from "../assets/img/icone_quase.png"

export default function FlashCard(props) {

    const {text, image, question, answer, contador, setContador} = props

    const [stage, setStage] = useState("start")

    function clickNLembrei() {
        setStage("Não lembrei")
        setContador(contador + 1)
    }

    function clickQNLembrei() {
        setStage("Quase não lembrei")
        setContador(contador+ 1)
    }

    function clickZap() {
        setStage("Zap!")
        setContador(contador + 1)
    }

    if (stage === "start") {
        return (
            <PerguntaFechada data-test="flashcard" cor="#333333" textDecoracion="none">
                <p data-test="flashcard-text">{text}</p>
                <img data-test="play-btn" onClick={() => setStage("question")} src={image} alt="play" />
            </PerguntaFechada>
        )
    }

    if (stage === "question") {
        return (
            <PerguntaAberta data-test="flashcard">
                <p data-test="flashcard-text">{question}</p>
                <img data-test="turn-btn" onClick={() => setStage("answer")} src={setaVirar} alt="setaVirar"/>
            </PerguntaAberta>
        )
    }

    if(stage === "answer"){
        return (
            <PerguntaAberta data-test="flashcard">
                <p data-test="flashcard-text">{answer}</p>
                    <ContainerButton>
                    <NaoLembrei data-test="no-btn" onClick={clickNLembrei}>Não lembrei</NaoLembrei>
                    <QuaseNaoLembrei data-test="partial-btn" onClick={clickQNLembrei}>Quase não lembrei</QuaseNaoLembrei>
                    <Zap data-test="zap-btn" onClick={clickZap}>Zap!</Zap>
                    </ContainerButton>
            </PerguntaAberta>
        )
    }

    if(stage === "Não lembrei"){
        return (
            <PerguntaFechada data-test="flashcard" cor="#FF3030" textDecoracion="line-through">
                <p data-test="flashcard-text">{text}</p>
                <img data-test="no-icon" src={iconeErro} alt="iconeErro"/>
            </PerguntaFechada>
        )
    }

    if(stage === "Quase não lembrei"){
        return (
            <PerguntaFechada data-test="flashcard" cor="#FF922E" textDecoracion="line-through">
                <p data-test="flashcard-text">{text}</p>
                <img data-test="partial-icon" src={iconeQuase} alt="iconeQuase"/>
            </PerguntaFechada>
        )
    }

    if(stage === "Zap!"){
        return (
            <PerguntaFechada data-test="flashcard" cor="#2FBE34" textDecoracion="line-through">
                <p data-test="flashcard-text">{text}</p>
                <img data-test="zap-icon" src={iconeCerto} alt="iconeCerto"/>
            </PerguntaFechada>
        )
    }

}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.cor};
        text-decoration: ${props => props.textDecoracion}
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const ContainerButton = styled.div`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    padding-left: 14px;
    padding-right: 14px;
`

const NaoLembrei = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    border: 1px solid #FF3030;
    padding:5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

const QuaseNaoLembrei = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
    border: 1px solid #FF922E;
    padding:5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Zap = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
    border: 1px solid #2FBE34;
    padding:5px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`