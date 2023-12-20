import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
padding: 0 4rem;
`
const Button = styled.button`
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
`

// const Logo = styled.div`
//     height: 5rem;
// `

const Logo = styled.img`
    height: 5rem;
`

function Header(props) {
    const navigate = useNavigate();
    return (
        <Container className='flex a-center j-between'>
            {/* <Logo className="logo">
                <img src={logo} alt="logo" />
            </Logo> */}
            <div className="logo">
                <Logo src={logo} alt="logo" />
            </div>
            <Button onClick={() => navigate(props.login ? "/login" : "/signup")}>
                {props.login ? "Log in" : "Sign up"}
            </Button>
        </Container>
    )
}

export default Header