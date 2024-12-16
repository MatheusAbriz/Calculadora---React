import Input from './components/Input'
import Button from './components/Buttons'
import { Container, Content, Row } from './styles'
import { useState } from 'react'


//Esse Componente Container é somente uma div estilizada
const App = () => {
  //Criando um estado
  const [currentNumber, setCurrentNumber ] = useState(0); 
  const [ prevNumber, setPrevNumber ] = useState(1);
  const [ currentProperty, setCurrentProperty ] = useState("");

  //funcao para lidar com a funcao de adicionar numero
  const handleAddNumber = (number) =>{
    currentNumber === 0 || currentNumber === "0" ? setCurrentNumber(`${ number }`) : setCurrentNumber(prev => `${ prev }${ number }`)
  }

  //Funcao que zera os números
  const handleClearNumber = () =>{
    setCurrentNumber(0);
    setCurrentProperty("")
    setPrevNumber(1)
  }

  //Funcao para somar
  const handleAdditionNumber = (property) =>{
    setCurrentProperty(property)
    setPrevNumber(currentNumber)
    setCurrentNumber(0)
  }
  
  //Funcao para subtrair
  const handleSubtractionNumber = (property) =>{
    setCurrentProperty(property)
    setPrevNumber(currentNumber)
    setCurrentNumber(0)
  }

  //Funcao para multiplicar
  const handleMultiplicationNumber = (property) =>{
    setCurrentProperty(property)
    setPrevNumber(currentNumber)
    setCurrentNumber(0)
  }

  //Funcao para dividir
  const handleDivisionNumber = (property) =>{
    setPrevNumber(currentNumber)
    setCurrentProperty(property)
    setCurrentNumber(0)
  }

  //Funcao para exibir o resultado
  const handleEqualsToNumber = () =>{
    if(currentNumber === 0){
      setCurrentNumber("Error")
    }else{
      switch(currentProperty){
        case '/':
          setCurrentNumber(prevNumber / currentNumber)
          break;
        case '*':
          setCurrentNumber(prevNumber * currentNumber)
          break;
        case '+':
          setCurrentNumber(Number(prevNumber) + Number(currentNumber))
          break;
        case '-':
          setCurrentNumber(prevNumber - currentNumber)
          break;
        default:
        break;
        }
    }
  }

  return (
    <Container>
      
      <Content>
        <Input value= { currentNumber }/>
        <Row>
          <Button numero="x" onClick={ () => handleMultiplicationNumber("*")}/>
          <Button numero="/" onClick={ () => handleDivisionNumber('/') }/>
          <Button numero="C" onClick={ () => handleClearNumber() }/>
          <Button numero="X"/>
        </Row>
        <Row>
          <Button numero="1" onClick={() => handleAddNumber('1')}/>
          <Button numero="2" onClick={() => handleAddNumber('2')}/>
          <Button numero="3" onClick={() => handleAddNumber('3')}/>
          <Button numero="=" onClick={() => handleEqualsToNumber()}/>
        </Row>

        <Row>
          <Button numero="4" onClick={() => handleAddNumber('4')}/>
          <Button numero="5" onClick={() => handleAddNumber('5')}/>
          <Button numero="6" onClick={() => handleAddNumber('6')}/>
          <Button numero="+" onClick={() => handleAdditionNumber('+')}/>
        </Row>

        <Row>
          <Button numero="7" onClick={() => handleAddNumber('7')}/>
          <Button numero="8" onClick={() => handleAddNumber('8')}/>
          <Button numero="9" onClick={() => handleAddNumber('9')}/>
          <Button numero="-" onClick={() => handleSubtractionNumber('-')}/>
        </Row>

        <Row>
          <Button numero="0" onClick={() => handleAddNumber('0')}/>
          <Button numero="," onClick={() => handleAddNumber('.')}/>
        </Row>
      </Content>

    </Container>
  );
}

export default App;
