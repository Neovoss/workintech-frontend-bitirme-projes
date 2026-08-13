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

## Kurulum

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` adresini açın.

## Build

```bash
npm run build
npm run preview
```

## reqres.in API Key (önemli not)

reqres.in artık `/api/*` uçları için ücretsiz bir API key zorunlu tutuyor (401 `missing_api_key` hatası alırsınız aksi halde). Contact formu isteği yine de doğru şekilde gönderilir ve hata düzgün yakalanıp hem `console.error` ile hem toast bildirimiyle gösterilir — bu haliyle de axios entegrasyonu değerlendirilebilir durumda.

Gerçek bir başarılı yanıt görmek isterseniz:

1. https://app.reqres.in/api-keys adresinden ücretsiz bir API key alın.
2. Proje köküne `.env` dosyası oluşturun (`.env.example` dosyasını kopyalayabilirsiniz):
   ```
   VITE_REQRES_API_KEY=aldığınız_key
   ```
3. Dev server'ı yeniden başlatın.

## Deploy (Vercel)

1. Projeyi bir GitHub reposuna push edin.
2. [vercel.com](https://vercel.com) üzerinden "New Project" ile repoyu içe aktarın.
3. Framework olarak Vite otomatik algılanır (Build Command: `npm run build`, Output Directory: `dist`).
4. `.env` içindeki `VITE_REQRES_API_KEY` değerini kullanmak isterseniz Vercel proje ayarlarındaki "Environment Variables" kısmına aynı isimle ekleyin.
5. Deploy edin ve verilen linki bu projenin sunumunda paylaşın.

## İçerik Güncelleme

- Kişisel bilgiler, projeler ve yetenekler `src/data/*.json` dosyalarında — kendi bilgilerinizle güncelleyin.
- Proje görselleri şu an gradyan + baş harf placeholder olarak gösteriliyor (`src/components/Projects/Projects.jsx`); gerçek proje görselleri eklemek isterseniz `<img>` etiketiyle değiştirebilirsiniz.
