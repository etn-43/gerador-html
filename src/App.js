import Header from './componentes/header'
import styled from 'styled-components'

const AppConteiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #f0f0f0, #ccc);
`
function App() {
  return (
    <AppConteiner>
        <Header/>
    </AppConteiner>
  );
}

export default App;
