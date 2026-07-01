# 🎮 SUDE — Godot 4 Taşıma / Genişletme Planı

Web sürümü oyunun "kalbi"dir ve tek başına eksiksizdir. Bu doküman, oyunu
Steam/mobil mağazalara taşımak istenirse önerilen Godot 4 yol haritasıdır.
(Godot tercih sebebi: ücretsiz, hafif, tek tıkla Android/iOS/masaüstü dışa
aktarım, UI ağırlıklı oyunlar için Control düğüm sistemi çok güçlü.)

## Proje Yapısı

```
res://
 ├─ sahneler/
 │   ├─ Acilis.tscn          # başlık ekranı
 │   ├─ Sohbet.tscn          # ana oyun (MarginContainer tabanlı)
 │   ├─ paneller/            # Hatiralar, Hediyeler, Gunluk, Ayarlar
 │   └─ mini_oyunlar/        # Hafiza.tscn, Sayi.tscn, Kelime.tscn, Yildiz.tscn
 ├─ betikler/
 │   ├─ Durum.gd             # autoload (singleton) — kayıt + bağ + bayraklar
 │   ├─ Motor.gd             # hikaye yorumlayıcısı (await tabanlı)
 │   ├─ Ses.gd               # autoload — müzik/ambiyans/SFX yönetimi
 │   └─ mini_oyun_temel.gd   # ortak mini oyun arayüzü (signal bitti(puan))
 ├─ veri/
 │   └─ hikaye.json          # GUNLER/FINALLER/HEDIYELER birebir taşınır
 └─ tema/
     └─ sude_tema.tres       # pastel Theme kaynağı (StyleBoxFlat, yuvarlak köşe)
```

## Sistem Eşlemeleri (web → Godot)

| Web sürümü | Godot karşılığı |
|---|---|
| adım makinesi `async/await` | GDScript `await` + `Signal` (birebir aynı akış kurulur) |
| `localStorage` | `FileAccess` ile `user://kayit.json` (+ isteğe bağlı şifreli kayıt) |
| CSS animasyonları | `Tween` + `AnimationPlayer`; baloncuk "pop" için `scale` tween |
| yazıyor... göstergesi | `AnimatedSprite2D` ya da 3 nokta `Tween` döngüsü |
| WebAudio prosedürel müzik | gerçek lo-fi parçalar (`AudioStreamOggVorbis`) + `AudioStreamPlayer` katmanları; yağmur için loop'lu ses dosyası |
| `hikaye verisi (story.js)` | `JSON.parse_string` ile yüklenen `hikaye.json` — motor koduna dokunmadan içerik güncellenir |
| emoji metinleri | Noto Color Emoji fontu gömülür (`FontVariation` fallback zinciri) |

## Aşamalı Plan

**Aşama 1 — Çekirdek (1. hafta):** Durum + Motor autoload'ları, Sohbet sahnesi
(`ScrollContainer` + `VBoxContainer` baloncuklar), seçim butonları, JSON hikaye
yükleme, kayıt/yükleme. *Çıktı: hikaye baştan sona oynanır.*

**Aşama 2 — His (2. hafta):** Tema (StyleBoxFlat yuvarlak köşeler, pastel
palet), tween animasyonları, gün kartları, atmosfer geçişleri
(`CanvasModulate` + gradyan arka plan), kalp yağmuru (`GPUParticles2D`).

**Aşama 3 — Sistemler (3. hafta):** 4 mini oyun sahnesi, hediye/hatıra/günlük
panelleri, kalp puanı ekonomisi, ses katmanları.

**Aşama 4 — Cila + dağıtım (4. hafta):** dokunmatik hedef boyutları (min 44px),
titreşim (`Input.vibrate_handheld`) duygusal anlarda, Android/iOS/HTML5 dışa
aktarım, başarımlar (Steam) — "İlk Seni Seviyorum", "Üç Final".

## Godot'a Geçince Eklenebilecekler

- 🔔 **Gerçek zamanlı mod (isteğe bağlı):** günde bir bölüm + Sude'den yerel
  bildirimle "günaydıııın 🌞" mesajı — uzak mesafe hissini gerçeğe taşır
- 🎙️ kısa "sesli mesaj" klipleri (dalga formu baloncuğu)
- 📷 Hatıralar ekranında polaroid görselleri (piksel-art çizimler)
- ☁️ bulut kaydı (Steam Cloud)
