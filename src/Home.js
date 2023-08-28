import Header from './componentes/header'
import styled from 'styled-components'
import Body from './componentes/body/index-body';

const AppConteiner = styled.div`
  width: 100vw;
  height: 150vh;
  background-image: linear-gradient(to bottom, #f0f0f0, #ccc);
`
function Home() {
  return (
    <AppConteiner>
        <Header/>
        <Body/>
    </AppConteiner>
  );
}

export default Home;
