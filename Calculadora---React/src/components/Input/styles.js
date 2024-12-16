import styled from 'styled-components'

//Criando uma div e dentro dela inserindo um input
export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #AAFFAA;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto', Arial;

    //Criando o input
    input{
        width: 100%;
        height: 75px;
        background-color: #AAFFAA;
        border: 0; 
        padding-right: 1rem;
        text-align: right;
        font-size: 16px;
    }

    input::placeholder{
        text-align: end;
        font-size: 16px;
    }
`