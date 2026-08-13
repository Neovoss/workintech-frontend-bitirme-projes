import { createContext, useContext, useEffect, useReducer } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const AppContext = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { ...state, language: action.payload }
    case 'TOGGLE_LANGUAGE':
      return { ...state, language: state.language === 'tr' ? 'en' : 'tr' }
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode }
    default:
      return state
  }
}

const getDefaultLanguage = () => (navigator.language.slice(0, 2) === 'tr' ? 'tr' : 'en')

export function AppProvider({ children }) {
  const [preferences, setPreferences] = useLocalStorage('portfolio-preferences', {
    language: getDefaultLanguage(),
    darkMode: window.matchMedia('(prefers-color-scheme: dark)').matches,
  })

  const [state, dispatch] = useReducer(reducer, preferences)

  useEffect(() => {
    setPreferences(state)
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light')
    document.documentElement.setAttribute('lang', state.language)
  }, [state, setPreferences])

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
