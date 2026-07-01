/* ═══════════════════════════════════════════════
   MİNİ OYUNLAR 🎮
   Hepsi ilişkinin bir parçası gibi hissettirir:
   Sude ile "birlikte" oynanıyormuş duygusu verir.
   Her oyun bir Promise döndürür → hikaye devam eder.
   ═══════════════════════════════════════════════ */

const MiniOyun = (() => {
  const alan = () => UI.el("minigame-area");

  function ac(baslik, ipucu) {
    UI.el("minigame-title").textContent = baslik;
    UI.el("minigame-hint").textContent = ipucu;
    alan().innerHTML = "";
    UI.panel("minigame-panel", true);
  }

  function kapat() { UI.panel("minigame-panel", false); }

  function bilgi(metin) {
    let b = alan().querySelector(".mg-info");
    if (!b) { b = document.createElement("div"); b.className = "mg-info"; alan().prepend(b); }
    b.textContent = metin;
  }

  function karistir(dizi) {
    for (let i = dizi.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
    }
    return dizi;
  }

  /* ═══════ 1) HAFIZA KARTLARI 🃏 ═══════
     Emoji çiftlerini bul. Az hamle = çok kalp puanı. */
  function hafizaKartlari() {
    return new Promise(coz => {
      ac("🃏 Hafıza Oyunu", "Aynı emojileri eşleştir! Sude de senden hızlı olmaya çalışıyor 😌");
      const emojiler = karistir(["🌸","💌","🌙","☕","🎧","⭐"].flatMap(e => [e, e]));
      let aciklar = [], bulunan = 0, hamle = 0, kilit = false;

      const grid = document.createElement("div");
      grid.className = "mg-grid";
      grid.style.gridTemplateColumns = "repeat(4,64px)";

      emojiler.forEach((emoji, i) => {
        const kart = document.createElement("button");
        kart.className = "mg-card";
        kart.textContent = "💗";
        kart.onclick = () => {
          if (kilit || kart.classList.contains("open") || kart.classList.contains("done")) return;
          Ses.tik();
          kart.classList.add("open");
          kart.textContent = emoji;
          aciklar.push({ kart, emoji });
          if (aciklar.length === 2) {
            hamle++;
            bilgi("Hamle: " + hamle);
            kilit = true;
            setTimeout(() => {
              const [a, b] = aciklar;
              if (a.emoji === b.emoji) {
                a.kart.classList.add("done"); b.kart.classList.add("done");
                Ses.basari(); bulunan++;
                if (bulunan === 6) bitir();
              } else {
                a.kart.classList.remove("open"); b.kart.classList.remove("open");
                a.kart.textContent = "💗"; b.kart.textContent = "💗";
              }
              aciklar = []; kilit = false;
            }, 650);
          }
        };
        grid.appendChild(kart);
      });
      alan().appendChild(grid);
      bilgi("Hamle: 0");

      function bitir() {
        const puan = hamle <= 8 ? 3 : hamle <= 12 ? 2 : 1;
        setTimeout(() => { kapat(); coz({ puan, hamle }); }, 900);
      }
    });
  }

  /* ═══════ 2) SAYI EŞLEŞTİRME 🔢 ═══════
     Toplamı 10 eden çiftleri bul — "10 numara çift, tıpkı bizim gibi". */
  function sayiEslestirme() {
    return new Promise(coz => {
      ac("🔢 On Numara Çift", "Toplamı 10 eden iki sayıyı seç! Tıpkı bizim gibi, birbirini tamamlayanları bul 😉");
      const ciftler = [[1,9],[2,8],[3,7],[4,6],[5,5],[0,10]];
      const sayilar = karistir(ciftler.flat());
      let secili = null, bulunan = 0, hamle = 0;

      const grid = document.createElement("div");
      grid.className = "mg-grid";
      grid.style.gridTemplateColumns = "repeat(4,64px)";

      sayilar.forEach(sayi => {
        const kart = document.createElement("button");
        kart.className = "mg-card open";
        kart.textContent = sayi;
        kart.onclick = () => {
          if (kart.classList.contains("done")) return;
          Ses.tik();
          if (!secili) {
            secili = kart;
            kart.style.outline = "3px solid #f78fb3";
            return;
          }
          if (secili === kart) { kart.style.outline = ""; secili = null; return; }
          hamle++;
          const toplam = parseInt(secili.textContent) + parseInt(kart.textContent);
          if (toplam === 10) {
            secili.classList.add("done"); kart.classList.add("done");
            secili.style.outline = ""; Ses.basari(); bulunan++;
            if (bulunan === 6) bitir();
          } else {
            const s = secili;
            s.style.outline = "3px solid #b0a5c9";
            setTimeout(() => { s.style.outline = ""; }, 350);
            Ses.uzgun();
          }
          secili = null;
          bilgi("Deneme: " + hamle);
        };
        grid.appendChild(kart);
      });
      alan().appendChild(grid);
      bilgi("Deneme: 0");

      function bitir() {
        const puan = hamle <= 8 ? 3 : hamle <= 11 ? 2 : 1;
        setTimeout(() => { kapat(); coz({ puan, hamle }); }, 900);
      }
    });
  }

  /* ═══════ 3) KELİME OYUNU 📝 ═══════
     Karışık harflerden romantik Türkçe kelimeyi diz. */
  const KELIMELER = [
    { k: "ÖZLEM",  ip: "Kalbimin sana en çok yaptığı şey..." },
    { k: "SEVGİ",  ip: "Aramızdaki en güçlü bağ 💕" },
    { k: "YILDIZ", ip: "Gece aynı gökyüzünde baktığımız şey ✨" },
    { k: "MEKTUP", ip: "Sana yazmak istediğim en eski moda şey 💌" },
    { k: "KALBİM", ip: "Sende olan şey ❤️" },
    { k: "SARILMAK", ip: "Buluşunca ilk yapacağımız şey 🤗" },
  ];

  function kelimeOyunu(kacKelime) {
    return new Promise(coz => {
      const secilenler = karistir([...KELIMELER]).slice(0, kacKelime || 3);
      let sira = 0, toplamPuan = 0;

      function tur() {
        const { k, ip } = secilenler[sira];
        ac("📝 Kelime Oyunu", `${sira + 1}/${secilenler.length} — Harfleri doğru sıraya diz!`);

        const ipucu = document.createElement("div");
        ipucu.className = "word-hint";
        ipucu.textContent = "İpucu: " + ip;

        const slotlar = document.createElement("div");
        slotlar.className = "word-slots";
        const harfler = document.createElement("div");
        harfler.className = "word-letters";

        const hedef = [...k];
        let dizilen = [];

        hedef.forEach(() => {
          const s = document.createElement("div");
          s.className = "word-slot";
          slotlar.appendChild(s);
        });

        karistir([...k]).forEach((harf) => {
          const b = document.createElement("button");
          b.className = "word-letter";
          b.textContent = harf;
          b.onclick = () => {
            if (b.classList.contains("used")) return;
            Ses.tik();
            b.classList.add("used");
            dizilen.push({ harf, dugme: b });
            const slot = slotlar.children[dizilen.length - 1];
            slot.textContent = harf;
            slot.classList.add("filled");
            if (dizilen.length === hedef.length) kontrol();
          };
          harfler.appendChild(b);
        });

        const geriAl = document.createElement("button");
        geriAl.className = "btn btn-ghost";
        geriAl.textContent = "↩️ Geri Al";
        geriAl.onclick = () => {
          const son = dizilen.pop();
          if (!son) return;
          son.dugme.classList.remove("used");
          const slot = slotlar.children[dizilen.length];
          slot.textContent = ""; slot.classList.remove("filled");
        };

        alan().append(ipucu, slotlar, harfler, geriAl);

        function kontrol() {
          const yazilan = dizilen.map(d => d.harf).join("");
          if (yazilan === k) {
            Ses.basari(); toplamPuan++;
            [...slotlar.children].forEach(s => s.style.background = "#c9ecd4");
            setTimeout(sonraki, 800);
          } else {
            Ses.uzgun();
            [...slotlar.children].forEach(s => s.style.background = "#f5d5dc");
            setTimeout(() => {
              dizilen.forEach(d => d.dugme.classList.remove("used"));
              dizilen = [];
              [...slotlar.children].forEach(s => { s.textContent = ""; s.classList.remove("filled"); s.style.background = ""; });
            }, 700);
          }
        }

        function sonraki() {
          sira++;
          if (sira < secilenler.length) tur();
          else { kapat(); coz({ puan: toplamPuan }); }
        }
      }
      tur();
    });
  }

  /* ═══════ 4) YILDIZ DİLEĞİ ⭐ ═══════
     "Birlikte an" — kayan yıldız tam ortadayken dokun,
     aynı anda dilek tutmuş olun. */
  function yildizDilegi() {
    return new Promise(coz => {
      ac("⭐ Kayan Yıldız", "Yıldız tam parlayan bölgedeyken dokun — aynı anda dilek tutalım! 🥺 (3 hakkın var)");

      const gok = document.createElement("div");
      gok.className = "star-sky";
      const bolge = document.createElement("div");
      bolge.className = "zone";
      const yildiz = document.createElement("div");
      yildiz.className = "star-fall";
      yildiz.textContent = "🌠";
      gok.append(bolge, yildiz);

      // süs yıldızları
      for (let i = 0; i < 14; i++) {
        const nokta = document.createElement("div");
        nokta.style.cssText = `position:absolute;width:2px;height:2px;border-radius:50%;background:#fff8d0;left:${Math.random()*100}%;top:${Math.random()*100}%;opacity:${.3 + Math.random()*.7}`;
        gok.appendChild(nokta);
      }
      alan().appendChild(gok);

      let x = -30, hiz = 2.6, hak = 3, yakalanan = 0, calisiyor = true;
      bilgi("Yakalanan dilek: 0 / Hak: 3");

      function dongu() {
        if (!calisiyor) return;
        x += hiz;
        if (x > gok.clientWidth + 30) { x = -30; hiz = 2.2 + Math.random() * 2; yildiz.style.top = 14 + Math.random() * 60 + "px"; }
        yildiz.style.left = x + "px";
        requestAnimationFrame(dongu);
      }
      requestAnimationFrame(dongu);

      gok.onclick = () => {
        if (!calisiyor) return;
        const merkez = gok.clientWidth / 2;
        const fark = Math.abs(x + 13 - merkez);
        hak--;
        if (fark < 36) {
          yakalanan++;
          Ses.basari();
          UI.kalpYagmuru(4);
        } else {
          Ses.uzgun();
        }
        bilgi(`Yakalanan dilek: ${yakalanan} / Hak: ${hak}`);
        if (hak <= 0) {
          calisiyor = false;
          setTimeout(() => { kapat(); coz({ puan: yakalanan }); }, 700);
        }
      };
    });
  }

  return { hafizaKartlari, sayiEslestirme, kelimeOyunu, yildizDilegi };
})();
