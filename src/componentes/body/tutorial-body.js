import styled from 'styled-components'
import image from '../../imagens/open-ai.png'
import imagetwo from '../../imagens/open-ai1.png'
import imagethree from '../../imagens/open-ai2.png'

const BodyContainer =  styled.body`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
function TutorialBody() {
    return(
        <BodyContainer>
            <ol>
                <li>
                    <p>Faça login na <a href='https://openai.com/'>OpenAI</a></p>
                </li>
                <li>
                    <p>Após o login entre em API</p>
                    <img src={image} alt='open ai login'/>
                </li>
                <li>
                    <p>No canto superior direito prossiga em Personal {'>'} View API Keys </p>
                    <img src={imagetwo} alt='open ai acesso a View API Keys'/>
                </li>
                <li>
                    <p>Em API Keys escolha a opção Create new secret key</p>
                    <img src={imagethree} alt='criando API key'/>
                </li>
                <li>
                    <p>Pronto! Agora que você possui sua API Key utilize ela na aplicação.</p>
                </li>
            </ol>
            
        </BodyContainer>
    )
}

export default TutorialBody