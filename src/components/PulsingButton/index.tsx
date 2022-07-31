import React, { useState } from 'react'
import { PulsingButtonContainer } from './styles'


function PulsingButton() {
  const [pulse, setPulse] = useState(false)

  let delay: NodeJS.Timeout

  function togglePulse() {
    clearTimeout(delay)
    setPulse(true)
    delay = setTimeout(() => {
      setPulse(false)
    }, 1500);
  }

  return (
    <PulsingButtonContainer onClick={togglePulse} pulse={pulse}/>
  )
}

export default PulsingButton