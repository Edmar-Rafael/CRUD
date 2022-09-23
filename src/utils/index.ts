import { useEffect, useState } from 'react';

export function debounce(func: (value: string) => void, timeout: number) {
  let delay: NodeJS.Timeout | number
  return () => {
    clearTimeout(delay)
    delay = setTimeout(func, timeout)
  }
}

const [coords, setCoords] = useState({x: 0, y: 0})
const [globalCoords, setGlobalCoords] = useState({x: 0, y: 0})

useEffect(() => {
  const handleWindowMouseMove = (event: MouseEvent) => {
    setGlobalCoords({
    x: event.screenX,
    y: event.screenY
    })
  }
  window.addEventListener('click', handleWindowMouseMove)
  return () => {
    window.removeEventListener('click', handleWindowMouseMove)
  }
}, [])

const handleMouseMove = (event: any) => {
  setCoords({
    x: event.clientX - event.target.offsetLeft,
    y: event.clientY - event.target.offsetTop
  })
}