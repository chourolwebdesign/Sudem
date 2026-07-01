# ⚙️ SUDE — Sistem Mimarisi

Sıfır bağımlılık, sıfır derleme adımı, tamamen çevrimdışı çalışan vanilla
JavaScript mimarisi. `index.html`'i açmak yeterli.

## Modül Haritası

```
index.html            → tüm ekran/panel iskeleti (tek sayfa)
css/style.css         → pastel tema, animasyonlar, responsive telefon çerçevesi
js/
 ├─ audio.js   (Ses)      → WebAudio: prosedürel lo-fi, yağmur, UI sesleri
 ├─ state.js   (Durum)    → oyun durumu + localStorage kayıt/yükleme
 ├─ ui.js      (UI)       → baloncuklar, bağ çubuğu, efektler, paneller
 ├─ minigames.js (MiniOyun)→ 4 mini oyun; her biri Promise<{puan}> döndürür
 ├─ story.js   (GUNLER/FINALLER/HEDIYELER) → saf veri: hikaye içeriği
 ├─ engine.js  (Motor)    → hikaye yorumlayıcısı (adım makinesi)
 └─ main.js    (Ana)      → açılış, menüler, hediye/hatıra/günlük panelleri
```

Bağımlılık yönü tek yönlüdür: `main → engine → (story verisi, minigames, ui, state, audio)`.
`story.js` hiçbir koda bağımlı değildir — **içerik ile motor tamamen ayrıktır**;
yeni gün/diyalog eklemek sadece veri eklemektir.

## Hikaye Motoru (engine.js)

Deklaratif bir adım makinesi. Her gün, sırayla işlenen adım nesnelerinden oluşur:

| Adım | Davranış |
|---|---|
| `{ s }` | Sude mesajı: yazıyor... göster → uzunluğa göre beklet → baloncuk + ses |
| `{ b }` | Oyuncunun otomatik mesajı |
| `{ n }` / `{ sys }` | Anlatım satırı / sistem çipi |
| `{ sec: [{m, e, cevap, bayrak}] }` | Seçim butonları (Promise ile bekler) → oyuncu baloncuğu → bağ ±e → Sude'nin cevap dizisi |
| `{ mini }` | Mini oyunu çalıştır → puana göre kalp 💛 + bağ + Sude tepkisi |
| `{ kosul, evet, hayir }` | Bayrağa göre dallanma (iç içe adımlar) |
| `{ hatira }` / `{ gunluk }` | Hatıra kilidi / günlük girdisi |
| `{ atmosfer }` / `{ fx }` / `{ bekle }` | Arka plan modu / kalp yağmuru, kalp atışı / duraklama |

**Kaldığın yerden devam:** her adımdan sonra `(gun, adim)` imleci kaydedilir.
Uygulama kapansa bile oyun tam o mesajdan sürer; sohbet geçmişi ayrı saklandığı
için ekran aynen geri çizilir. Efektler adım tamamlanınca kaydedildiğinden
tekrara düşmez.

**Final seçimi:** Gün 12 bitince `kararBulusma && bag ≥ 70 → bulusma`,
`bag < 40 → ayrilik`, aksi → `devam`. Seçilen final `bitti` alanına yazılır ve
o da adım adım oynatılır (final ortasında kapatılsa bile devam eder).

## Kayıt Şeması (localStorage, anahtar: `sude-kayit-v1`)

```json
{
  "isim": "…", "gun": 5, "adim": 12, "bag": 64, "kalpPuani": 7,
  "bayraklar": { "seniSeviyorum": true },
  "hatiralar": [{ "baslik": "İlk Merhaba", "emoji": "🌙", "aciklama": "…", "gun": 1 }],
  "gunluk":    [{ "gun": 1, "metin": "…" }],
  "gecmis":    [{ "tip": "sude", "metin": "…" }],
  "hediyeler": ["cicek"], "bitti": null, "gunBitti": false
}
```

Performans önlemleri: geçmiş 250 mesajla sınırlanır, ekrana son 120'si çizilir;
animasyonlar yalnız CSS transform/opacity kullanır; ses düğümleri çalma sonrası
serbest bırakılır.

## Mini Oyun Sözleşmesi

Her oyun `Promise<{puan: 0..3}>` döndürür. Motor puanı üçe kırpar:
`kalp += puan`, `bağ += min(3, puan)`, sonra puan eşiğine göre Sude'nin tepki
repliklerini oynatır. Yeni bir mini oyun eklemek = bir fonksiyon + `miniOyna`
içine bir satır.

## Test Altyapısı

Headless Chromium (Playwright) ile doğrulanan senaryolar:
- tam oynanış → 3 finalin üçü de tetikleniyor (en sıcak yol → buluşma,
  karışık → devam, en soğuk yol → ayrılık, bağ=39)
- kayıt/yükleme: sayfa yenilendikten sonra sohbet geçmişi ve imleç korunuyor
- 4 mini oyunun gerçek DOM etkileşimiyle çözülüp puan döndürmesi
- hediye gönderme: puan düşer, bağ artar, Sude tepki verir
- statik denge analizi: `GUNLER` verisi üzerinde min/max bağ toplamı
