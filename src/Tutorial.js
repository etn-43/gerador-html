import Header from './componentes/header'
import styled from 'styled-components'
import TutorialBody from './componentes/body/tutorial-body';

const Conteiner = styled.div`
  width: 100vw;
  height: 250vh;
  background-image: linear-gradient(to bottom, #f0f0f0, #ccc);
`
function Tutorial() {
  return (
    <Conteiner>
        <Header/>
        <TutorialBody/>
    </Conteiner>
  );
}

export default Tutorial;
