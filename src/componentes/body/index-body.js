import Form from "../form/form"
import styled from 'styled-components'

const BodyContainer =  styled.body`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
function Body (){
    return (
        <BodyContainer>
            <Form/>
        </BodyContainer>
    )
}

export default Body