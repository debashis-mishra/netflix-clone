import React from 'react'
import styled from 'styled-components'
import background from '../assets/login.jpg'

const Container = styled.div`
height: 100vh;
width: 100vw;
`

const Image = styled.img`
height: 100vh;
width: 100vw;
`

function BackgroundImage() {
  return (
    <Container>
      <Image src={background} alt="background"/>
    </Container>
  )
}

export default BackgroundImage