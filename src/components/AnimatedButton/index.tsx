import React, { useEffect, useState } from "react";
import { ButtonProps } from "../../@types/types";
import { AnimatedButtonContainer, ButtonContainer, Text } from "./styles";


function AnimatedButton(props: ButtonProps) {
  const [coords, setCoords] = useState({x: 0, y: 0})

   useEffect(() => {
    function handleWindowMouseMove(event: any) {
      setCoords({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop
      }) 
    }
    window.addEventListener('mousemove', handleWindowMouseMove)
    return () => window.removeEventListener('mousemove', handleWindowMouseMove)
  }, [])

  function handleMousePosition() {
    const items = document.querySelectorAll('button')
    items.forEach( item => {
      let ripples = document.createElement('div')
      ripples.style.left = coords.x + 'px'
      ripples.style.top = coords.y + 'px'
      item.appendChild(ripples)
      setTimeout(() => {
        ripples.remove()
      }, 1000);
    })
  }


  return (
    <AnimatedButtonContainer onClick={handleMousePosition}>
      <ButtonContainer onClick={props.onClick && props.onClick}>
        <Text>{props.text}</Text>
      </ButtonContainer>
    </AnimatedButtonContainer>
  )
}

export default AnimatedButton