# 🌸 SUDE — Oyun Tasarım Dokümanı (GDD)

> **Tür:** Duygusal hikaye / ilişki simülasyonu / cozy görsel roman
> **Platform:** Web (mobil + masaüstü), tamamen çevrimdışı
> **Dil:** %100 Türkçe
> **Hedef:** Tek bir kişi için yapılmış, hediye niteliğinde bir oyun — Sude için. 💝

---

## 1. Vizyon

**"Sude"**, 3 yıllık bir uzak mesafe ilişkisinin bütün duygusal yolculuğunu —
tanışma gecesinden kavuşma kararına kadar — bir mesajlaşma ekranında yeniden
yaşatan, sıcacık bir oyun. Oyuncu bir "izleyici" değil; ilişkinin diğer yarısı.
Her seçim gerçek bir sohbetteki gibi hissettirir, her gün yeni bir anı bırakır.

**Duygusal hedefler:**
- Oyuncu Sude'ye gerçekten bağlansın (yazım dili doğal, mesajlar "gerçek insan" gibi)
- Kısa oturumlarda bile "birlikteymişiz" hissi (yazıyor... animasyonu, gecikmeli mesajlar)
- Nostalji ve birikim hissi (Hatıralar defteri, Sude'nin gizli günlüğü)
- Mesafenin ağırlığı VE sevginin onu yenmesi

## 2. Hikaye Yapısı — 12 Gün, 4 Perde

Oyun "gün" adı verilen 12 bölümden oluşur. Günler gerçek takvim günü değil,
3 yıllık ilişkinin duygusal kilometre taşlarıdır (zaman atlamalı anlatım):

| Perde | Günler | Tema |
|---|---|---|
| 🌱 Başlangıç | 1–3 | Gece yarısı online tanışma, utangaç ilk sohbetler, "bizim oyunumuz" |
| ☀️ Gelişim | 4–7 | Günaydın rutini, film gecesi, kötü günde teselli, **ilk "seni seviyorum"** |
| 🌧️ Derinlik | 8–10 | Özlem, zaman farkı, ilk ciddi kırgınlık ve barışma, hayal kurma gecesi |
| 💝 Final | 11–12 | Buluşma fikri, korkular, karar gecesi |

### Üç Final
Bağ puanı (0–100) + son karar belirler:

1. **🌸 Mutlu Buluşma** — bağ ≥ 70 ve "buluşalım" kararı. Otogar sahnesi,
   çiçek, üç yılın özleminin sığdığı tek sarılma.
2. **🌌 Umutla Devam** — bağ 40–69 veya "bekleyelim" kararı. Buruk ama umutlu;
   "her gün birbirimizi yeniden seçmek" teması.
3. **🍂 Duygusal Ayrılık** — bağ < 40. Nefretsiz, saygılı, "son kez aynı
   gökyüzüne bakalım" vedası. Ulaşması zordur (sürekli soğuk seçimler gerekir) —
   çünkü bu oyun bir hediye. 🙂

## 3. Ana Sistemler

### ❤️ Bağ Sistemi (Relationship)
- 0–100 arası **bağ çubuğu**, sohbet ekranının üstünde kalp animasyonuyla
- Etiketler eşiklere göre değişir: *Tanışıyorsunuz 🌱 → Isınıyorsunuz ☺️ →
  Yakınsınız 💕 → Birbirinize aitsiniz 💖 → Ruh eşisiniz 💞 → Sonsuz aşk 💍*
- Her seçim −9 ile +10 arası etki eder; değişim çubuğun üstünde "+5 ❤️"
  baloncuğu olarak uçar
- Denge (statik analizle doğrulanmıştır): en soğuk yol → 39 (ayrılık sınırının
  altında), en sıcak yol → 100 tavan

### 💬 Mesajlaşma Sistemi
- Gerçek sohbet uygulaması hissi: baloncuklar, saat damgası, çevrimiçi durumu
- **"yazıyor..."** animasyonu; gecikme mesaj uzunluğuna göre doğal hesaplanır
  (`550ms + 26ms × karakter`, üst sınır 2.6sn)
- Sude'nin kişiliği tutarlı: sıcak, hafif alaycı, bolca 🙈🥺😤, kendi kendine
  konuşan, duygularını "..." ile saklayıp sonra patlatan
- Oyuncunun adı bütün metinlere `{isim}` şablonuyla işlenir

### 📅 Günlük Yaşam Sistemi
- Her gün kendi atmosferiyle açılır: **gün kartı** (Gün 5 🍿 "Sanal film gecesi...")
- Arka plan atmosferi güne göre değişir: gündüz / gün batımı / yıldızlı gece
- Gün sonunda "Yeni Güne Başla ☀️" ile oyuncu temposunu kendisi belirler

### 🧠 Hatıra Sistemi
- 12 kilit an otomatik olarak **Hatıralar 📖** defterine işlenir
  (İlk Merhaba, Boncuk'la Tanışma, İlk 'Seni Seviyorum', İlk Fırtına...)
- Kırgınlık gününün hatırası seçime göre değişir: "İlk Fırtına 🌈" ya da
  "Soğuk Gece 🌩️"
- Sohbet geçmişi kaydedilir; oyuna dönünce eski mesajlar yerinde durur

### 📓 Sude'nin Günlüğü (ek sistem — tasarım kararı)
Her günün sonunda Sude'nin *o günü kendi ağzından* yazdığı gizli bir günlük
girdisi açılır. Oyuncu, Sude'nin ekrana yazmadığı duygularını buradan okur —
"söylenen" ile "hissedilen" arasındaki tatlı boşluk, bağlanmayı derinleştirir.

### 🎁 Hediye Sistemi + 💛 Kalp Puanı Ekonomisi
- Mini oyunlar **kalp puanı 💛** kazandırır (performansa göre 0–3)
- Puanlar hediyeye dönüşür; her hediyenin özel Sude tepkisi ve bağ etkisi vardır:

| Hediye | Fiyat | Bağ | Tepki teması |
|---|---|---|---|
| 🌸 Sanal Çiçek | 2 💛 | +3 | "vazoya koydum (ekran görüntüsü aldım yani 🙈)" |
| 🐱 Boncuk'a Mama | 2 💛 | +3 | Boncuk adına teşekkür: "miyav (çevirisi: seni seviyorum)" |
| 🎧 Bizim Şarkımız | 3 💛 | +4 | "bu şarkı çalınca aklıma hep sen geleceksin" |
| 💌 El Yazısı Mektup | 4 💛 | +5 | "yastığımın altında saklayacağım" |
| 🧸 Sarılma Kuponu | 5 💛 | +6 | "son kullanma tarihi: asla ❤️" |
| ⭐ İsmine Yıldız | 6 💛 | +7 | "her gece ona bakıp seni düşüneceğim" |

## 4. Mini Oyunlar — hep "birlikte" kurgusu

Hiçbiri ayrı bir mod değil; hepsini **Sude teklif eder** ve sonucuna tepki verir.

1. **🃏 Hafıza Oyunu** (Gün 3) — 12 kart, 6 emoji çifti. Az hamle = çok puan.
   Hikayede "bizim oyunumuz" olur.
2. **📝 Kelime Oyunu** (Gün 4, 10) — Karışık harflerden romantik Türkçe kelime
   dizme: ÖZLEM, SEVGİ, YILDIZ, MEKTUP, KALBİM, SARILMAK. İpuçları ilişkiye
   gönderme yapar ("Buluşunca ilk yapacağımız şey 🤗").
3. **⭐ Kayan Yıldız** (Gün 5) — "Birlikte an": yıldız parlayan bölgedeyken
   dokun, aynı anda dilek tutun. 3 hak.
4. **🔢 On Numara Çift** (Gün 7) — Toplamı 10 eden sayı çiftlerini bul.
   "Birbirini tamamlayanları bul — tıpkı bizim gibi." Sude'nin "seni seviyorum"
   öncesi heyecan atlatma bahanesi. 🙈

## 5. Görsel Dil

- **Palet:** pudra pembesi `#ffb6c9`, lavanta `#cdb4f0`, sıcak bej `#fff6ec`,
  pastel mavi `#bcd9f5`; metin moru `#6b5566`
- Telefon çerçevesi hissi (430×880), tamamı yuvarlatılmış köşeler (22px+),
  yumuşak pembe gölgeler
- Mikro animasyonlar: mesaj baloncuğu "pop" yayı, kalp atışı, sallanan çiçek,
  buton hover yükselmesi, kalp yağmuru efekti, gece ekranında parıldayan yıldızlar
- Duygusal anlarda ekran atmosferi değişir (gece moduna geçiş 2.5sn yumuşak)

## 6. Ses Tasarımı (tamamen prosedürel — sıfır ses dosyası)

- **Lo-fi müzik:** WebAudio ile Am7–Fmaj7–Cmaj7–G7 akor döngüsü, alçak geçiren
  filtre (1.4kHz) ile "kasetten çalıyor" sıcaklığı, ara sıra rastgele tatlı
  melodi kırıntıları
- **Yağmur ambiyansı:** filtrelenmiş kahverengi gürültü (isteğe bağlı, menüden)
- **Arayüz sesleri:** mesaj *bling*i, gönderme *pop*u, başarı arpeji, hüzün inişi
- **Kalp atışı:** "seni seviyorum" ve karar anlarında 90Hz'lik derin *gum-gum*

## 7. Oynanış Akışı (bir oturum)

```
Açılış 🌸 → (Devam Et / Yeni Başlangıç) → İsim → Gün Kartı
   → Sohbet: mesajlar akar → seçim → Sude tepkisi → mini oyun → hatıra 📖
   → Gün sonu → "Yeni Güne Başla ☀️" → ... → Gün 12 → Final → Kalp yağmuru
```

Menü (🎀): Hatıralar 📖 · Hediye Gönder 🎁 · Günlüğüm 📓 · Müzik/Yağmur · Ana Ekran

## 8. Neden Bu Kararlar? (tasarım notları)

- **Zaman atlamalı 12 gün**, gerçek zamanlı bekletme yerine: hediye alan kişi
  oyunu tek oturuşta da, 12 akşamda da bitirebilmeli. Tempoyu "Yeni Güne Başla"
  butonu oyuncuya verir.
- **Ayrılık finali kasıtlı olarak zor:** kötü son "mümkün" olmalı ki seçimler
  anlamlı olsun; ama bir hediyede kolay olmamalı.
- **Günlük sistemi** eklendi çünkü uzak mesafenin özü budur: karşındakinin
  yazmadıklarını merak etmek.
- **Kalp puanı ekonomisi** mini oyunları hikayeye bağlar: oynadıkça
  hediye edebilirsin; hediye ettikçe bağ büyür.
