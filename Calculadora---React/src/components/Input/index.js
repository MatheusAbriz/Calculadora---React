//Importando o Container, O HTML + CSS dele
import { InputContainer, inputContainer } from './styles'

const Input = ({ value }) =>{
    return(
        <InputContainer>
        <input placeholder="Digite com os números..." disabled value= { value }/>
        </InputContainer>
    )
}

export default Input;