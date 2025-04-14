import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../utils/useWindowSize";
import { useState } from "react";

export default function Orb() {
    const { width, height } = useWindowSize();

    const moveOrb = keyframes`
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(${width}px, ${height}px);
        }
        100% {
            transform: translate(0, 0);
        }
    `;

    const OrbStyled = styled.div`
        width: 70vh;
        height: 80vh;
        position: absolute;
        border-radius: 50%;
        background: linear-gradient(180deg, #F56692 0%, #f2994A 100%);
        filter: blur(400px);
        margin-left: -37vh;
        margin-top: -37vh;
        animation: ${moveOrb} 10s alternate linear infinite;
    `;

    return <OrbStyled />;
}
