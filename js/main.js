/* ═══════════════════════════════════════════════
   ANA KONTROL 🌸
   Açılış, isim, menüler, hediyeler, hatıralar.
   ═══════════════════════════════════════════════ */

const Ana = (() => {
  const el = (id) => UI.el(id);

  /* ── açılış ekranı ── */
  function baslat() {
    UI.yildizlariKur();

    if (Durum.var()) {
      el("btn-continue").classList.remove("hidden");
      el("btn-memories-title").classList.remove("hidden");
    }

    el("btn-newgame").onclick = () => {
      Ses.baslat(); Ses.tik();
      if (Durum.var() && !confirm("Mevcut hikayen silinecek, emin misin? 🥺")) return;
      Durum.sil();
      UI.ekranGoster("screen-name");
      setTimeout(() => el("input-name").focus(), 300);
    };

    el("btn-continue").onclick = () => {
      Ses.baslat(); Ses.tik();
      if (!Durum.yukle()) return UI.bildirim("Kayıt bulunamadı 🥺");
      UI.ekranGoster("screen-chat");
      Motor.devamEt();
    };

    el("btn-memories-title").onclick = () => {
      Ses.tik();
      if (Durum.yukle()) hatiralariGoster();
    };

    el("btn-settings").onclick = () => { Ses.tik(); UI.panel("settings-panel", true); };

    /* isim ekranı */
    const isimOnay = () => {
      const isim = el("input-name").value.trim();
      if (!isim) { UI.bildirim("Adını yazmayı unuttun 🙈"); return; }
      Ses.baslat(); Ses.basari();
      Durum.yeni();
      Durum.veri.isim = isim;
      Durum.kaydet();
      UI.ekranGoster("screen-chat");
      UI.bagGuncelle();
      Motor.gunuOynat();
    };
    el("btn-name-ok").onclick = isimOnay;
    el("input-name").addEventListener("keydown", e => { if (e.key === "Enter") isimOnay(); });

    /* sohbet ekranı */
    el("btn-nextday").onclick = () => { Ses.tik(); Motor.sonrakiGun(); };
    el("btn-menu").onclick = () => { Ses.tik(); menuAc(); };

    menuKur();
    ayarlarKur();

    /* ilk kullanıcı dokunuşunda sesi başlat (tarayıcı kuralı) */
    document.body.addEventListener("pointerdown", () => Ses.baslat(), { once: true });
  }

  /* ── menü ── */
  function menuAc() {
    el("btn-toggle-music").textContent = "🎵 Müzik: " + (Ses.muzikDurumu() ? "Açık" : "Kapalı");
    el("btn-toggle-rain").textContent = "🌧️ Yağmur: " + (Ses.yagmurDurumu() ? "Açık" : "Kapalı");
    UI.panel("menu-panel", true);
  }

  function menuKur() {
    el("btn-close-menu").onclick = () => UI.panel("menu-panel", false);
    el("btn-open-memories").onclick = () => { UI.panel("menu-panel", false); hatiralariGoster(); };
    el("btn-open-gifts").onclick = () => { UI.panel("menu-panel", false); hediyeleriGoster(); };
    el("btn-open-journal").onclick = () => { UI.panel("menu-panel", false); gunlukGoster(); };
    el("btn-toggle-music").onclick = () => {
      const acik = Ses.muzikDegistir();
      el("btn-toggle-music").textContent = "🎵 Müzik: " + (acik ? "Açık" : "Kapalı");
    };
    el("btn-toggle-rain").onclick = () => {
      const acik = Ses.yagmurDegistir();
      el("btn-toggle-rain").textContent = "🌧️ Yağmur: " + (acik ? "Açık" : "Kapalı");
    };
    el("btn-back-title").onclick = () => {
      UI.panel("menu-panel", false);
      location.reload();
    };
    el("btn-close-memories").onclick = () => UI.panel("memories-panel", false);
    el("btn-close-gifts").onclick = () => UI.panel("gifts-panel", false);
    el("btn-close-journal").onclick = () => UI.panel("journal-panel", false);
  }

  function ayarlarKur() {
    el("btn-close-settings").onclick = () => UI.panel("settings-panel", false);
    el("btn-set-music").onclick = () => {
      const acik = Ses.muzikDegistir();
      el("btn-set-music").textContent = "🎵 Müzik: " + (acik ? "Açık" : "Kapalı");
    };
    el("btn-set-rain").onclick = () => {
      const acik = Ses.yagmurDegistir();
      el("btn-set-rain").textContent = "🌧️ Yağmur: " + (acik ? "Açık" : "Kapalı");
    };
    el("btn-reset").onclick = () => {
      if (confirm("Bütün hikaye ve hatıralar silinecek. Emin misin? 🥺")) {
        Durum.sil();
        location.reload();
      }
    };
  }

  /* ── hatıralar 📖 ── */
  function hatiralariGoster() {
    const liste = el("memories-list");
    liste.innerHTML = "";
    const hatiralar = (Durum.veri && Durum.veri.hatiralar) || [];
    if (!hatiralar.length) {
      liste.innerHTML = `<div class="memory-empty">Henüz hatıra biriktirmediniz...<br>Ama en güzel anlar yolda 🌸</div>`;
    } else {
      hatiralar.forEach((h, i) => {
        const kart = document.createElement("div");
        kart.className = "memory-card";
        kart.style.animationDelay = (i * 0.06) + "s";
        kart.innerHTML = `
          <div class="memory-emoji">${h.emoji}</div>
          <div>
            <div class="memory-title">${h.baslik}</div>
            <div class="memory-desc">${h.aciklama}</div>
            <div class="memory-day">Gün ${h.gun} 🌸</div>
          </div>`;
        liste.appendChild(kart);
      });
    }
    UI.panel("memories-panel", true);
  }

  /* ── hediyeler 🎁 ── */
  function hediyeleriGoster() {
    el("gift-hearts").textContent = Durum.veri.kalpPuani;
    const liste = el("gifts-list");
    liste.innerHTML = "";
    HEDIYELER.forEach(hediye => {
      const gonderildi = Durum.veri.hediyeler.includes(hediye.id);
      const kart = document.createElement("div");
      kart.className = "gift-item";
      kart.innerHTML = `
        <div class="gift-emoji">${hediye.emoji}</div>
        <div class="gift-name">${hediye.ad}<small>${hediye.fiyat} 💛 kalp puanı</small></div>`;
      const dugme = document.createElement("button");
      dugme.className = "gift-buy";
      if (gonderildi) {
        dugme.textContent = "Gönderildi ✔️";
        dugme.disabled = true;
      } else {
        dugme.textContent = "Gönder 💝";
        dugme.disabled = Durum.veri.kalpPuani < hediye.fiyat;
        dugme.onclick = () => hediyeGonder(hediye);
      }
      kart.appendChild(dugme);
      liste.appendChild(kart);
    });
    UI.panel("gifts-panel", true);
  }

  async function hediyeGonder(hediye) {
    if (Durum.veri.kalpPuani < hediye.fiyat) return;
    if (Motor.calisiyorMu()) { UI.bildirim("Şu an sohbetin ortasındasınız, birazdan dene 🙈"); return; }
    Durum.kalpEkle(-hediye.fiyat);
    Durum.veri.hediyeler.push(hediye.id);
    Durum.kaydet();
    UI.panel("gifts-panel", false);
    Ses.basari();
    UI.kalpYagmuru(10);

    UI.baloncuk("ben", `${hediye.emoji} Sana bir hediyem var: ${hediye.ad}!`);
    Durum.mesajKaydet("ben", `${hediye.emoji} Sana bir hediyem var: ${hediye.ad}!`);
    for (const satir of hediye.tepki) await Motor.sudeMesaji(satir);

    const fark = Durum.bagDegistir(hediye.etki);
    UI.bagBaloncugu(fark);
    UI.bagGuncelle();
  }

  /* ── günlük 📓 ── */
  function gunlukGoster() {
    const liste = el("journal-list");
    liste.innerHTML = "";
    const kayitlar = (Durum.veri && Durum.veri.gunluk) || [];
    if (!kayitlar.length) {
      liste.innerHTML = `<div class="memory-empty">Sude'nin günlüğü henüz boş...<br>Yaşadıkça dolacak 📓🌸</div>`;
    } else {
      kayitlar.forEach(kayit => {
        const giris = document.createElement("div");
        giris.className = "journal-entry";
        giris.innerHTML = `<div class="journal-day">📓 Gün ${kayit.gun} — Sude'nin günlüğünden</div>
                           <div class="journal-text">${kayit.metin.replaceAll("{isim}", Durum.veri.isim)}</div>`;
        liste.appendChild(giris);
      });
    }
    UI.panel("journal-panel", true);
  }

  return { baslat, hatiralariGoster };
})();

document.addEventListener("DOMContentLoaded", Ana.baslat);
