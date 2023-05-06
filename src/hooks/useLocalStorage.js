import { useState, useEffect } from 'react'

const useLocalStorage = (key, defaultValue = null) => {
  // Creates a new state with `value` as `localStorage` try/catch or `setValue` return
  const [value, setvalue] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      if (item !== null) {
        return JSON.parse(item)
      }
      return defaultValue
    } catch (error) {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return { value, setvalue }
}

export default useLocalStorage
