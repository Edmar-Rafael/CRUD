
export function debounce(func: (value: string) => void, timeout: number) {
  let delay: NodeJS.Timeout | number
  return () => {
    clearTimeout(delay)
    delay = setTimeout(func, timeout)
  }
}