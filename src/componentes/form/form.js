import styled from 'styled-components'
import React, { useState } from 'react';

const FormContainer = styled.form`
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    text-align: center;
    
`
const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`

const Button = styled.button`
    background-color: black;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
    }
`


function Form() {
const [inputApiValue, setApiInputValue] = useState('')
const [inputPromptValue, setPromptInputValue] = useState('')

  const apiInputChange = (event) => {
    setApiInputValue(event.target.value)
  };

  const promptInputChange = (event) => {
    setPromptInputValue(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Você digitou: ${inputApiValue} e ${inputPromptValue}`)
  };
    return(
        <FormContainer onSubmit={handleSubmit}>
            <Input  
            type="text"
            value={inputApiValue}
            onChange={apiInputChange} 
            placeholder="API Key" 
            />

            <Input 
            type="text"
            value={inputPromptValue}
            onChange={promptInputChange}  
            placeholder="Prompt" 
            />
            <Button type="submit">Enviar</Button>
        </FormContainer>
    )
}

export default Form