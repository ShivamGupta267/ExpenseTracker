import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layouts";

export default function Button({name, icon, onClick, bg, btnPadding, color, btnRadius}){
    return(
        <ButtonStyled style={{
            background: bg,
            padding: btnPadding,
            borderRadius: btnRadius,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}

            
        </ButtonStyled>
    )
   
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;
