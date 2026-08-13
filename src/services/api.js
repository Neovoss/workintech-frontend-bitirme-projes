import axios from 'axios'
import content from '../data/content.json'

const CONTACT_ENDPOINT = 'https://reqres.in/api/workintech'

const apiClient = axios.create({
  timeout: 8000,
})

// reqres.in artık /api/* uçları için ücretsiz bir x-api-key zorunlu tutuyor
// (bkz. app.reqres.in/api-keys). .env dosyasına VITE_REQRES_API_KEY=... eklenirse otomatik kullanılır.
const REQRES_API_KEY = import.meta.env.VITE_REQRES_API_KEY

// content.json'daki veriyi sanki bir API'den geliyormuş gibi Promise ile döner
export function fetchContent(language) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = content[language]
      if (data) {
        resolve(data)
      } else {
        reject(new Error(`Bilinmeyen dil: ${language}`))
      }
    }, 250)
  })
}

export function submitContactForm(payload) {
  return apiClient.post(CONTACT_ENDPOINT, payload, {
    headers: REQRES_API_KEY ? { 'x-api-key': REQRES_API_KEY } : {},
  })
}
