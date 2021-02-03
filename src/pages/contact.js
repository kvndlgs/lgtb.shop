import React from 'react';
import { Wrapper } from './'
import styled from 'styled-components';


const StyledContactPage = styled.div`

`

const ContactPage = () => {
    return (
        <StyledContactPage>
            <h1> CONTACT </h1>
        </StyledContactPage>
    )
}

export default function Contact(){
    return (
        <Wrapper content={<ContactPage title="LGTB Beat Shop | Contact" />} />
    )
}