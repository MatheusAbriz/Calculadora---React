import { ButtonContainer } from "./styles"

const Button = ({ onClick, numero }) =>{
    /*const HandleMatheus = () =>{
        return <h1>Olá { numero }!</h1>
    } 

    const HandleUsers = () =>{
        return <h1>Tchau! Você não é o matheus!</h1>
    }*/

    return(
        /*
        <ButtonContainer>
            { nome === "Matheus" ? <HandleMatheus/>  : <HandleUsers/> }
        </ButtonContainer>*/
        <ButtonContainer onClick = { onClick }>
            { numero }
        </ButtonContainer>
    )
}


export default Button;