
import styled from 'styled-components'

const ListaHeader = styled.ul`
    list-style: none; 
    display: flex; 
    padding: 0; 
    justify-content: center;
    font-size: 20px;
`
const LiHeader = styled.li`
    margin-right: 50px; 
`

function HeaderItens (){
    const itens = ["Gerador HTML","Tutorial", "Sobre"]
    return (
        <ListaHeader>
            {
                itens.map( (item) => {
                    return <LiHeader>{item}</LiHeader>
                })
            }
        </ListaHeader>
    )
}

export default HeaderItens