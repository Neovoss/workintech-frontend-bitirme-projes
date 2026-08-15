# Kişisel Portföy Sitesi

Workintech Frontend Bootcamp S12 bitirme projesi. React + Vite ile geliştirilmiş, Context API tabanlı dil (TR/EN) ve karanlık tema yönetimine sahip, tamamen responsive bir kişisel portföy sitesi.

## Özellikler

- **Component mimarisi:** Navbar, Hero, About, Skills, Projects, Contact, Footer — her biri kendi klasöründe, kendi CSS'iyle
- **State yönetimi:** Context API + `useReducer` (`src/context/AppContext.jsx`), Redux kullanılmadı
- **Dil desteği:** i18n kütüphanesi kullanılmadan, statik `src/data/content.json` üzerinden TR/EN içerik
- **Karanlık tema:** CSS custom properties (`:root` / `[data-theme="dark"]`)
- **LocalStorage:** Dil ve tema tercihleri `useLocalStorage` custom hook'u ile saklanır (`src/hooks/useLocalStorage.js`)
- **Statik veri + `.map()`:** Skills ve Projects bölümleri JSON dosyalarından render edilir
- **react-toastify:** Contact formu geri bildirimleri
- **axios + reqres.in:** Contact formu, `src/services/api.js` üzerinden `https://reqres.in/api/workintech` adresine POST isteği atar
