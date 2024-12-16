import styled  from 'styled-components'

//Criando um Container HTML com propriedades CSS
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

//Criando a calculadora
export const Content = styled.div`
    background-color: #FFF;
    width: 100%;
    max-width: 320px;     
`

//Linha flexbox
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
//Coluna flexbox
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
