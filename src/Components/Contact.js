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
            <div>
                <h1 className="sticky-margin">Contact</h1>
            </div>
            


            <Button>CONTACT</Button>
            <Button>HELLO</Button>
        </>
    );
}