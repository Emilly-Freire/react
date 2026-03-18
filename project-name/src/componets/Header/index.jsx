import styled from 'styled-components'
import React from "react"

const Container = styled.div`
    display: flex;
    position: relative;
    background-color: ${props => props.backcolor || 'lightblue'};
    width: 100%;
    height: 120px;
    color: white;
`

const Logo = styled.div`
    flex: 4;
    margin-left: 10px;
`

const Nav = styled.div`
    flex: 2;
    padding: 10px;
`

const ItemNav = styled.div`
    flex: 2;
    padding: 10px;
`

function Titulo(props) {

    return (
        <Container>
            <Logo>
                <h1>{props.title}</h1>
            </Logo>

            <Nav>
                <ItemNav>Home</ItemNav>
                <ItemNav>Contact</ItemNav>
                <ItemNav>Profile</ItemNav>
            </Nav>
        </Container>
        
    )
}

export default Titulo;