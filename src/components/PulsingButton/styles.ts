import styled from "styled-components";

export const PulsingButtonContainer = styled.button<{pulse: boolean}>`
  width: 100px;
  height: 30px;
  background-color: transparent;
  border-radius: 999px;
  border: none;
  position: absolute;
  
  animation: ${({pulse}) => pulse ? 'pulse 2s' : ''};

  @keyframes pulse {
    0% {
      transform: scale(.0);
      opacity: 0.6;
      border: 2px solid black;
      background-color: #111111;
    }

    100% {
      opacity: 0;
      transform: scale(3.5);
      border: 2px solid black;
      background-color: #111111;
    }
  }
`