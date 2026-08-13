# Proje Sunumu — Konuşma Metni (~4 dakika)

Not: Parantez içindeki süreler kabaca hedef, pratikle kendine göre ayarla. Köşeli parantezdeki yerleri kendi bilgilerinle değiştir.

---

## 1) Açılış (0:00 – 0:20)

> "Merhaba, ben [Adın Soyadın]. Bugün sizlere Workintech Frontend Bootcamp kapsamında geliştirdiğim kişisel portföy projemi sunacağım. Projeyi React ve Context API kullanarak, tamamen component tabanlı bir mimariyle geliştirdim. Önce arayüzü ve kullanıcı deneyimini göstereceğim, ardından kod tarafında nasıl bir veri akışı kurduğumu anlatacağım."

## 2) Arayüz / UX Turu (0:20 – 1:40)

> "Siteye girdiğimizde karşımıza Hero bölümü çıkıyor — ismim, unvanım ve kısa bir tanıtım metni burada yer alıyor. Sağ üstte iki önemli kontrol var: dil değiştirme butonu ve karanlık/aydınlık tema butonu.
>
> [Dil butonuna tıkla] Gördüğünüz gibi tüm site anında Türkçe'den İngilizce'ye geçiyor — bu sadece metinleri değiştirmiyor, `İ` gibi Türkçe'ye özgü karakterleri de doğru yönetiyor.
>
> [Tema butonuna tıkla] Karanlık temaya geçtiğimizde de tüm renkler, kartlar, butonlar tutarlı şekilde değişiyor.
>
> Aşağı indikçe sırasıyla Hakkımda, Yetenekler, Projeler ve İletişim bölümlerini görüyoruz. Yetenekler bölümünde her teknoloji için bir yüzde çubuğu var, Projeler bölümünde ise kartlar halinde çalışmalarım, kullandığım teknolojiler ve canlı demo/kaynak kod linkleri yer alıyor.
>
> [Mobil genişliğe küçült] Site tamamen responsive — mobilde navigasyon hamburger menüye dönüşüyor, grid yapıları tek sütuna iniyor.
>
> En altta bir iletişim formu var; formu doldurup gönderdiğimde [gönder butonuna bas] sağ altta bir bildirim (toast) ile işlemin durumunu görüyorum."

## 3) Kod Mimarisi ve Veri Akışı (1:40 – 3:20)

> "Şimdi kod tarafına geçelim. Projenin en kritik kısmı `AppContext.jsx` dosyasındaki Context API yapısı. Burada `useReducer` ile iki temel state tutuyorum: `language` ve `darkMode`. Component ağacının en tepesinde `AppProvider` ile tüm uygulamayı sarmalıyorum, böylece herhangi bir component, prop drilling yapmadan `useApp()` custom hook'u üzerinden bu state'e ve `dispatch` fonksiyonuna erişebiliyor.
>
> Bu state her değiştiğinde iki şey oluyor: birincisi, kendi yazdığım `useLocalStorage` hook'u sayesinde tercih tarayıcıya kaydediliyor — yani sayfayı yenilesem bile dil ve tema tercihim korunuyor. İkincisi, `document.documentElement` üzerine `data-theme` ve `lang` attribute'ları set ediliyor; CSS tarafında da `:root` ve `[data-theme='dark']` içinde tanımladığım CSS custom property'ler bu attribute'a göre otomatik renk değiştiriyor. Yani tema mantığını component'lerin CSS'ine değil, tek bir merkezi yere yazdım.
>
> İçerik tarafında ise i18n gibi bir kütüphane kullanmadım — bunun yerine `content.json` adında statik bir dosyada Türkçe ve İngilizce içerikleri ayrı ayrı tuttum. `useContent` adında bir custom hook, mevcut dile göre bu veriyi okuyup component'lere veriyor; dil değiştiğinde de `services/api.js` içindeki `fetchContent` fonksiyonu üzerinden — sanki gerçek bir API'den geliyormuş gibi bir Promise ile — veriyi güncelliyor. Bu, ileride gerçek bir backend'e bağlanacak olsam kodun büyük kısmını değiştirmeden geçiş yapabileceğim bir mimari kurmamı sağladı.
>
> Skills ve Projects bölümlerinde ise statik JSON dizilerini `.map()` ile geziyorum ve her eleman için `key` prop'u veriyorum; böylece yeni bir yetenek veya proje eklemek için tek yapmam gereken JSON dosyasına bir obje eklemek.
>
> Son olarak, dış servis entegrasyonu için iletişim formunda `axios` kullandım. Form submit edildiğinde `react-toastify` ile önce bir 'yükleniyor' bildirimi gösteriyorum, ardından `reqres.in` üzerindeki uç noktaya POST isteği atıyorum. İstek başarılı ya da başarısız olsun, `try/catch` bloğuyla her iki durumu da yönetip kullanıcıya anlık geri bildirim veriyorum; hata durumunda ayrıca `console.error` ile geliştirici tarafında da loglama yapıyorum."

## 4) Kapanış (3:20 – 4:00)

> "Özetlemek gerekirse: bu projede component tabanlı mimariyi, Context API ile global state yönetimini, statik veriyle çalışmayı, responsive tasarımı, karanlık tema desteğini ve axios ile dış servis entegrasyonunu bir araya getirmeye çalıştım. Sorularınızı almaktan memnuniyet duyarım."

---

## Olası Sorulara Hazırlık

- **"Neden Redux değil Context API?"** → Projenin state karmaşıklığı (sadece dil + tema) Redux'ın boilerplate'ini gerektirmeyecek kadar küçüktü; `useReducer` + Context, aynı öngörülebilir state güncelleme mantığını daha az kodla veriyor.
- **"i18n kütüphanesi neden kullanmadın?"** → Görev gereği kullanmamam istendi; veri (JSON) ile görüntüleme katmanını ayırarak kendi basit çözümümü kurdum.
- **"localStorage'da ne saklıyorsun?"** → Tek bir `portfolio-preferences` anahtarı altında `{ language, darkMode }` objesi; `useLocalStorage` hook'u bunu JSON olarak serialize/deserialize ediyor.
- **"reqres.in isteği neden hata veriyor / nasıl çalışıyor?"** → reqres.in artık ücretsiz bir API key istiyor; kod tarafı doğru şekilde isteği atıyor ve hem başarı hem hata senaryosunu yönetiyor, gerekirse `.env` üzerinden key eklenebiliyor.


yandaki boşlukları kaldır.
yazıları büyült apple vs
validasyonları 
react tool formurada