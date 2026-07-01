/* ═══════════════════════════════════════════════
   HİKAYE MOTORU ⚙️
   Günleri adım adım oynatır: yazıyor animasyonu,
   gecikmeli mesajlar, seçimler, mini oyunlar,
   koşullu dallar ve finaller.
   ═══════════════════════════════════════════════ */

const Motor = (() => {
  let calisiyor = false;

  const kisisellestir = (metin) =>
    metin.replaceAll("{isim}", Durum.veri.isim || "canım");

  /* Sude mesajı: yazıyor... → gecikme → baloncuk */
  async function sudeMesaji(metin) {
    const m = kisisellestir(metin);
    UI.yaziyor(true);
    // mesaj uzunluğuna göre doğal gecikme
    const sure = Math.min(2600, 550 + m.length * 26);
    await UI.bekle(sure);
    UI.yaziyor(false);
    UI.baloncuk("sude", m);
    Ses.mesaj();
    await UI.bekle(420);
  }

  async function benimMesajim(metin) {
    UI.baloncuk("ben", kisisellestir(metin));
    Ses.gonder();
    await UI.bekle(500);
  }

  /* seçim ekranı — Promise ile bekler */
  function secimBekle(secenekler) {
    return new Promise(coz => {
      const kutu = UI.el("choices");
      kutu.innerHTML = "";
      secenekler.forEach(secim => {
        const dugme = document.createElement("button");
        dugme.className = "choice-btn";
        dugme.textContent = kisisellestir(secim.m);
        dugme.onclick = () => { kutu.innerHTML = ""; Ses.tik(); coz(secim); };
        kutu.appendChild(dugme);
      });
      UI.el("chat-log").scrollTop = UI.el("chat-log").scrollHeight;
    });
  }

  /* mini oyun çalıştır + Sude'nin tepkisi + kalp puanı */
  async function miniOyna(tur) {
    UI.baloncuk("sistem", "🎮 Mini oyun başlıyor...");
    let sonuc;
    if (tur === "hafiza") sonuc = await MiniOyun.hafizaKartlari();
    else if (tur === "sayi") sonuc = await MiniOyun.sayiEslestirme();
    else if (tur === "kelime") sonuc = await MiniOyun.kelimeOyunu(3);
    else sonuc = await MiniOyun.yildizDilegi();

    const puan = Math.max(0, sonuc.puan || 0);
    if (puan > 0) {
      Durum.kalpEkle(puan);
      Durum.bagDegistir(Math.min(3, puan));
      UI.bagBaloncugu(Math.min(3, puan));
      UI.bagGuncelle();
      UI.bildirim(`+${puan} kalp puanı kazandın! 💛`);
    }

    const tepkiler = {
      3: ["VAYY ne kadar iyisin sen 😍", "benimle oynadığın her şeyde harikasın galiba 🥹"],
      2: ["çok iyiydik!! iyi bi takımız biz 😌✨"],
      1: ["eğlendik ya, gerisi teferruat 😆"],
      0: ["olsun be, önemli olan beraber oynamak 🥰"],
    };
    const secilen = tepkiler[Math.min(3, puan)] || tepkiler[1];
    for (const satir of secilen) await sudeMesaji(satir);
  }

  /* tek bir adımı çalıştır */
  async function adimCalistir(adim) {
    if (adim.s) return sudeMesaji(adim.s);
    if (adim.b) return benimMesajim(adim.b);
    if (adim.n) { UI.baloncuk("narr", kisisellestir(adim.n)); return UI.bekle(1300); }
    if (adim.sys) { UI.baloncuk("sistem", adim.sys); return UI.bekle(900); }
    if (adim.bekle) return UI.bekle(adim.bekle);
    if (adim.atmosfer) { UI.atmosfer(adim.atmosfer); return; }
    if (adim.mini) return miniOyna(adim.mini);

    if (adim.fx === "kalp") { UI.kalpYagmuru(14); Ses.kalp(); return UI.bekle(1000); }
    if (adim.fx === "kalpatisi") { Ses.kalpAtisi(3); return UI.bekle(800); }

    if (adim.hatira) {
      if (Durum.hatiraEkle(adim.hatira)) {
        UI.bildirim(`📖 Yeni hatıra: ${adim.hatira.baslik} ${adim.hatira.emoji}`, 3200);
        Ses.basari();
      }
      return UI.bekle(600);
    }

    if (adim.gunluk) { Durum.gunlukEkle(kisisellestir(adim.gunluk)); return; }

    if (adim.sec) {
      const secim = await secimBekle(adim.sec);
      await benimMesajim(secim.m);
      if (secim.bayrak) { Durum.veri.bayraklar[secim.bayrak] = true; Durum.kaydet(); }
      if (secim.e) {
        const fark = Durum.bagDegistir(secim.e);
        UI.bagBaloncugu(fark);
        UI.bagGuncelle();
        if (fark < 0) Ses.uzgun();
      }
      if (secim.cevap) for (const satir of secim.cevap) await sudeMesaji(satir);
      return;
    }

    if (adim.kosul) {
      const dal = Durum.veri.bayraklar[adim.kosul] ? adim.evet : adim.hayir;
      for (const alt of (dal || [])) await adimCalistir(alt);
      return;
    }
  }

  /* günü kaldığı adımdan oynat */
  async function gunuOynat() {
    if (calisiyor) return;
    calisiyor = true;
    const v = Durum.veri;
    const gun = GUNLER[v.gun - 1];
    if (!gun) { calisiyor = false; return finalOynat(); }

    UI.el("daybar").classList.add("hidden");
    UI.atmosfer(gun.atmosfer);

    if (v.adim === 0) {
      await UI.gunKarti(gun.baslik, gun.alt, gun.emoji);
    }

    while (v.adim < gun.adimlar.length) {
      await adimCalistir(gun.adimlar[v.adim]);
      v.adim++;
      Durum.kaydet();
    }

    /* gün bitti */
    v.gunBitti = true;
    Durum.kaydet();
    calisiyor = false;

    if (v.gun >= GUNLER.length) return finalOynat();

    UI.baloncuk("sistem", `🌙 ${gun.baslik} sona erdi`);
    UI.el("daybar").classList.remove("hidden");
  }

  function sonrakiGun() {
    const v = Durum.veri;
    if (!v.gunBitti) return;
    v.gun++;
    v.adim = 0;
    v.gunBitti = false;
    Durum.kaydet();
    UI.el("daybar").classList.add("hidden");
    gunuOynat();
  }

  /* finali belirle ve oynat */
  async function finalOynat() {
    if (calisiyor) return;
    const v = Durum.veri;

    let final;
    if (v.bitti) {
      final = FINALLER[v.bitti];
    } else {
      if (v.bayraklar.kararBulusma && v.bag >= 70) final = FINALLER.bulusma;
      else if (v.bag < 40) final = FINALLER.ayrilik;
      else final = FINALLER.devam;
      v.bitti = final.kimlik;
      v.adim = 0;
      Durum.kaydet();
    }

    calisiyor = true;
    while (v.adim < final.adimlar.length) {
      await adimCalistir(final.adimlar[v.adim]);
      v.adim++;
      Durum.kaydet();
    }
    calisiyor = false;

    UI.kalpYagmuru(20);
    const kutu = UI.el("choices");
    kutu.innerHTML = "";
    const tekrar = document.createElement("button");
    tekrar.className = "choice-btn";
    tekrar.textContent = "🌸 Hikayeyi baştan yaşa";
    tekrar.onclick = () => {
      if (confirm("Yeni bir başlangıç yapılsın mı? (Hatıraların gidecek 🥺)")) {
        Durum.sil();
        location.reload();
      }
    };
    const hatiralar = document.createElement("button");
    hatiralar.className = "choice-btn";
    hatiralar.textContent = "📖 Hatıralara bak";
    hatiralar.onclick = () => Ana.hatiralariGoster();
    kutu.append(tekrar, hatiralar);
  }

  /* oyuna devam: kayıttan dön */
  function devamEt() {
    UI.gecmisiCiz();
    UI.bagGuncelle();
    const v = Durum.veri;

    if (v.bitti) {
      const final = FINALLER[v.bitti];
      if (v.adim < final.adimlar.length) return finalOynat();
      UI.baloncuk("sistem", "🌸 Hikayeniz tamamlandı — hatıralar hep sizinle 🌸", true);
      return;
    }
    if (v.gunBitti) {
      if (v.gun >= GUNLER.length) return finalOynat();
      UI.el("daybar").classList.remove("hidden");
      return;
    }
    gunuOynat();
  }

  return { gunuOynat, sonrakiGun, devamEt, sudeMesaji, calisiyorMu: () => calisiyor };
})();
