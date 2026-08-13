import { useEffect, useState } from 'react'
import { useApp } from '../context/AppContext'
import { fetchContent } from '../services/api'
import contentJson from '../data/content.json'

// Component'ler bu hook üzerinden mevcut dile göre içeriği okuyor
export function useContent() {
  const { language } = useApp()
  const [content, setContent] = useState(contentJson[language])

  useEffect(() => {
    fetchContent(language).then((data) => setContent(data))
  }, [language])

  return content
}
