import React from 'react'
import styled from 'styled-components'


export default()=>{
    const Button = styled.button`
        background:none;
        border:solid #d246fc 2px;
        border-radius:3px;
        color: #d246fc;
    `

    return(
        <>
            <h1>THIS IS CONTACT</h1>
            <Button>CONTACT</Button>
            <button>HELLO</button>
        </>
    );
}