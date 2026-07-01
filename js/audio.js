/* ═══════════════════════════════════════════════
   SES SİSTEMİ 🎧
   WebAudio ile üretilen lo-fi müzik, yağmur
   ambiyansı ve yumuşak arayüz sesleri.
   Hiç ses dosyası gerekmez — tamamen çevrimdışı.
   ═══════════════════════════════════════════════ */

const Ses = (() => {
  let ctx = null;
  let muzikAcik = true;
  let yagmurAcik = false;
  let muzikDugumler = null;
  let yagmurDugum = null;
  let muzikZamanlayici = null;

  function baglam() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  /* ── yumuşak tek nota (lo-fi elektrik piyano hissi) ── */
  function nota(frekans, zaman, sure, kazanc, hedef) {
    const c = baglam();
    const osc = c.createOscillator();
    const osc2 = c.createOscillator();
    const g = c.createGain();
    osc.type = "sine";
    osc2.type = "triangle";
    osc.frequency.value = frekans;
    osc2.frequency.value = frekans * 2.001; // hafif detune, sıcaklık
    const g2 = c.createGain();
    g2.gain.value = 0.18;
    g.gain.setValueAtTime(0, zaman);
    g.gain.linearRampToValueAtTime(kazanc, zaman + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, zaman + sure);
    osc.connect(g); osc2.connect(g2); g2.connect(g);
    g.connect(hedef);
    osc.start(zaman); osc2.start(zaman);
    osc.stop(zaman + sure + 0.1); osc2.stop(zaman + sure + 0.1);
  }

  /* ── lo-fi akor döngüsü ── */
  const AKORLAR = [
    [220.0, 261.63, 329.63, 392.0],   // Am7
    [174.61, 220.0, 261.63, 349.23],  // Fmaj7
    [130.81, 196.0, 246.94, 329.63],  // Cmaj7
    [196.0, 246.94, 293.66, 349.23],  // G7
  ];
  const MELODI = [523.25, 587.33, 659.25, 783.99, 659.25, 587.33];

  function muzikDongusu() {
    if (!muzikAcik || !ctx) return;
    const c = ctx;
    const lp = c.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 1400; lp.Q.value = 0.6;
    const ana = c.createGain();
    ana.gain.value = 0.5;
    lp.connect(ana); ana.connect(c.destination);
    muzikDugumler = { lp, ana };

    let akorNo = 0;
    const bar = 3.2; // saniye / akor

    function calBar() {
      if (!muzikAcik) return;
      const t = c.currentTime + 0.05;
      const akor = AKORLAR[akorNo % AKORLAR.length];
      // pad akoru
      akor.forEach((f, i) => nota(f, t + i * 0.03, bar * 0.95, 0.045, lp));
      // bas
      nota(akor[0] / 2, t, bar * 0.9, 0.07, lp);
      // tatlı melodi kırıntısı (her iki barda bir)
      if (akorNo % 2 === 0) {
        const m = MELODI[Math.floor(Math.random() * MELODI.length)];
        nota(m, t + bar * 0.45, 1.2, 0.028, lp);
        if (Math.random() < 0.5) nota(m * 1.25, t + bar * 0.7, 1.0, 0.02, lp);
      }
      akorNo++;
      muzikZamanlayici = setTimeout(calBar, bar * 1000);
    }
    calBar();
  }

  /* ── yağmur ambiyansı (filtrelenmiş gürültü) ── */
  function yagmurBaslat() {
    const c = baglam();
    const boyut = 2 * c.sampleRate;
    const tampon = c.createBuffer(1, boyut, c.sampleRate);
    const veri = tampon.getChannelData(0);
    let son = 0;
    for (let i = 0; i < boyut; i++) {
      const beyaz = Math.random() * 2 - 1;
      son = (son + 0.02 * beyaz) / 1.02; // kahverengi gürültüye yakın
      veri[i] = son * 3.5;
    }
    const kaynak = c.createBufferSource();
    kaynak.buffer = tampon; kaynak.loop = true;
    const bp = c.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.value = 900; bp.Q.value = 0.4;
    const g = c.createGain(); g.gain.value = 0;
    kaynak.connect(bp); bp.connect(g); g.connect(c.destination);
    kaynak.start();
    g.gain.linearRampToValueAtTime(0.16, c.currentTime + 2);
    yagmurDugum = { kaynak, g };
  }

  function yagmurDurdur() {
    if (!yagmurDugum) return;
    const c = ctx;
    yagmurDugum.g.gain.linearRampToValueAtTime(0, c.currentTime + 1.2);
    const k = yagmurDugum.kaynak;
    setTimeout(() => { try { k.stop(); } catch (e) {} }, 1400);
    yagmurDugum = null;
  }

  /* ── arayüz sesleri ── */
  function blip(frekans, sure, tip, kazanc) {
    try {
      const c = baglam();
      const o = c.createOscillator();
      const g = c.createGain();
      o.type = tip || "sine";
      o.frequency.value = frekans;
      g.gain.setValueAtTime(kazanc || 0.08, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + sure);
      o.connect(g); g.connect(c.destination);
      o.start(); o.stop(c.currentTime + sure + 0.05);
    } catch (e) {}
  }

  return {
    baslat() { baglam(); if (muzikAcik && !muzikZamanlayici) muzikDongusu(); if (yagmurAcik && !yagmurDugum) yagmurBaslat(); },

    muzikDegistir() {
      muzikAcik = !muzikAcik;
      if (muzikAcik) { baglam(); muzikDongusu(); }
      else { clearTimeout(muzikZamanlayici); muzikZamanlayici = null;
             if (muzikDugumler) { try { muzikDugumler.ana.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.8); } catch(e){} } }
      return muzikAcik;
    },
    yagmurDegistir() {
      yagmurAcik = !yagmurAcik;
      if (yagmurAcik) { baglam(); yagmurBaslat(); } else yagmurDurdur();
      return yagmurAcik;
    },
    muzikDurumu: () => muzikAcik,
    yagmurDurumu: () => yagmurAcik,

    /* olay sesleri */
    mesaj()   { blip(660, 0.14, "sine", 0.06); setTimeout(() => blip(880, 0.12, "sine", 0.05), 70); },
    gonder()  { blip(520, 0.10, "sine", 0.05); },
    tik()     { blip(760, 0.06, "triangle", 0.04); },
    basari()  { blip(523, 0.15, "sine", 0.07); setTimeout(() => blip(659, 0.15, "sine", 0.07), 120); setTimeout(() => blip(784, 0.25, "sine", 0.07), 240); },
    uzgun()   { blip(392, 0.25, "sine", 0.05); setTimeout(() => blip(330, 0.35, "sine", 0.05), 200); },
    kalp()    { blip(196, 0.12, "sine", 0.10); setTimeout(() => blip(196, 0.12, "sine", 0.07), 300); },
    kalpAtisi(kere) {
      let n = 0;
      const at = () => {
        if (n >= (kere || 3)) return;
        blip(90, 0.14, "sine", 0.14); setTimeout(() => blip(80, 0.12, "sine", 0.10), 220);
        n++; setTimeout(at, 900);
      };
      at();
    },
  };
})();
