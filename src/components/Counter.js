import styled from "styled-components"

export default function Counter(props){

    const {contador} = props

    return (
        <Count>
            {contador}/8 CONCLUÍDOS
        </Count>
    )
}

const Count = styled.footer`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`