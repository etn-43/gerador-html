import styled from 'styled-components'
import { Link } from 'react-router-dom';

const ListaUl = styled.ul`
    list-style: none; 
    display: flex; 
    padding: 0; 
    justify-content: center;
    font-size: 20px;
`
const ListaLi = styled.li`
    margin-right: 50px; 
`

const LinkList = ({ links }) => {
    return (
        <ListaUl>
            {links.map((link, index, comp) => (
                <ListaLi key={index}>
                    <Link to={link.url}>
                        {link.text}
                    </Link>
                </ListaLi>
                ))}
        </ListaUl>
    );
};
  
export default LinkList;