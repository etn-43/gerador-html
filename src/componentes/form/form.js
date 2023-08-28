import styled from 'styled-components';
import React, { useState } from 'react';
import { OpenAI } from 'openai'

const FormContainer = styled.form`
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
    text-align: center;
    
`
const DivContainer = styled.div`
  justify-content: center;
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
const [inputApiValue, setApiInputValue] = useState('');
const [inputPromptValue, setPromptInputValue] = useState('');
const [result, setResult] = useState();

  const apiInputChange = (event) => {
    setApiInputValue(event.target.value);
  };

  const promptInputChange = (event) => {
    setPromptInputValue(event.target.value);
  };

  const generatePrompt = (input) => {
    return `Quero que você atue como um console Html. 
        Eu vou digitar comandos e você deverá responder com 
        o que o console deveria mostrar. Quero que você apenas 
        responda com a saída do console dentro de um único bloco de código e nada mais. 
        Não escreva explicações ou diga que entendeu, somente o codigo.
    
        input: gere um a
        output: <a href="https://www.example.com">Clique aqui</a>
        input: ${input}
        output:`;
}

  const TextToHtml = ({ text }) => {
    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const openai = new OpenAI({apiKey: inputApiValue, dangerouslyAllowBrowser: true} );
      const completion = openai.completions.create({
        model: "text-davinci-003",
        prompt: generatePrompt(inputPromptValue),
        max_tokens: 300,
    })
    .then(res => {
        console.log(res.choices[0].text);
        setResult(res.choices[0].text);
        setApiInputValue("");
        setPromptInputValue("");
      })
      .catch(error => {
        console.error("Erro:", error.message);
        setResult("Erro " + error.message);
      });
      
    } catch(error) {
      console.error(error)
      alert(error.message);
    }

  }
    return(
      <DivContainer>
        <FormContainer onSubmit={handleSubmit}>
            <Input  
            type="text"
            value={inputApiValue}
            onChange={apiInputChange} 
            placeholder="OpenAI API Key" 
            />

            <Input 
            type="text"
            value={inputPromptValue}
            onChange={promptInputChange}  
            placeholder="Prompt" 
            />
            <Button type="submit">Enviar</Button>
            <br/>
            {result}
        </FormContainer>
        <TextToHtml text={result}/>
      </DivContainer> 
    )
}

export default Form