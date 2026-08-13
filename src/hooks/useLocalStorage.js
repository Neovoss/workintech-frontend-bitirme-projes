import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
  const stored = window.localStorage.getItem(key)
  const [value, setValue] = useState(stored ? JSON.parse(stored) : initialValue)

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
