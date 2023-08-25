import logo from "../../imagens/logo.png"
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 35px;
    align-items: center;
`
const LogoImage = styled.img`
    width: 13%;
`
function Logo (){
    return (
        <LogoContainer>
            <LogoImage src={logo} alt="logo"/>
            <p><strong>Gerador</strong>Html</p>
        </LogoContainer>
    )
}

export default Logo