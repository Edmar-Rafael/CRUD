import styled from "styled-components";
import Colors from "../../resources/Colors";


export const LanguageToggleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 3px;
  font-weight: 600;
  border-radius: 6px;
  background-color: ${Colors.background};
  box-shadow: ${Colors.boxShadow};
  border: 2px solid blue;
`

export const BorderToggle = styled.div<{selectedLang: boolean}>`
  display: flex;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({selectedLang}) => selectedLang ? 'blue' : ''};
  border: ${({selectedLang}) => selectedLang ? `3px solid blue` : '3px solid transparent'};
  transition: all .3s linear;
`

export const Drop = styled.div<{show: boolean}>`
  opacity: ${({show}) => show ? 1 : 0};
  pointer-events: ${({show}) => show ? 'visible' : 'none'};
  width: 91px;
  transform: translate(0, 27px);
  padding: 7px 0;
  background-color: ${Colors.background};
  border: 2px solid blue;
  border-style: none inset inset inset;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  box-shadow: ${Colors.boxShadow};
  position: fixed;
  z-index: 19;
  transition: all .3s linear;
`

export const ArrowBox = styled.div`
  padding: 3px 5px 0 5px;
`