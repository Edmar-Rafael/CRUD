import styled from 'styled-components';
import { Colors } from '../../resources';

export const AnimatedButtonContainer = styled.div`
  width: 90%;
  height: 37px;
  background-color: ${Colors.font.white};
  border-radius: 6px;
  box-shadow: ${Colors.boxShadow};
  overflow: hidden;
  transition: all .3s;

  &:hover{
    background-color: ${Colors.dragons};
  }
`

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: inherit;
  background-color: transparent;
  position: relative;
  cursor: pointer;

  div {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: white;
    border: 1px solid black;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    pointer-events: none;

    animation: pulse 1s linear infinite;

    @keyframes pulse {
      0%{
        opacity: .6;
      }
      100%{
        width:1000px;
        height: 1000px;
        opacity: 0;
      }
    }
  }
`

export const Text = styled.span`
  font-weight: 700;
  pointer-events: none;
`