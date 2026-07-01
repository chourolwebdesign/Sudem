/* ═══════════════════════════════════════════════
   ARAYÜZ YARDIMCILARI 🎀
   Ekran geçişleri, baloncuklar, efektler.
   ═══════════════════════════════════════════════ */

const UI = {
  el: (id) => document.getElementById(id),

  ekranGoster(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    this.el(id).classList.add("active");
  },

  /* ── sohbet baloncukları ── */
  saat() {
    const d = new Date();
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  },

  baloncuk(tip, metin, kayitsiz) {
    const log = this.el("chat-log");
    const div = document.createElement("div");
    div.className = "msg " + tip;
    if (tip === "narr" || tip === "sistem") {
      div.textContent = metin;
    } else {
      div.textContent = metin;
      const t = document.createElement("span");
      t.className = "msg-time";
      t.textContent = this.saat();
      div.appendChild(t);
    }
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
    if (!kayitsiz) Durum.mesajKaydet(tip, metin);
    return div;
  },

  gecmisiCiz() {
    const log = this.el("chat-log");
    log.innerHTML = "";
    // performans: son 120 mesajı çiz
    const son = Durum.veri.gecmis.slice(-120);
    son.forEach(m => this.baloncuk(m.tip, m.metin, true));
    log.scrollTop = log.scrollHeight;
  },

  yaziyor(goster) {
    this.el("typing").classList.toggle("hidden", !goster);
    this.el("sude-status").textContent = goster ? "yazıyor..." : "çevrimiçi 💚";
    if (goster) {
      const log = this.el("chat-log");
      log.scrollTop = log.scrollHeight;
    }
  },

  /* ── bağ çubuğu ── */
  bagGuncelle() {
    const b = Durum.veri.bag;
    this.el("aff-fill").style.width = b + "%";
    const etiketler = [
      [15, "Tanışıyorsunuz 🌱"], [30, "Isınıyorsunuz ☺️"], [50, "Yakınsınız 💕"],
      [70, "Birbirinize aitsiniz 💖"], [90, "Ruh eşisiniz 💞"], [101, "Sonsuz aşk 💍"],
    ];
    for (const [esik, ad] of etiketler) {
      if (b < esik) { this.el("aff-label").textContent = ad; break; }
    }
    this.el("hearts-count").textContent = Durum.veri.kalpPuani;
  },

  bagBaloncugu(fark) {
    if (!fark) return;
    const pop = document.createElement("div");
    pop.className = "aff-pop " + (fark > 0 ? "artis" : "azalis");
    pop.textContent = (fark > 0 ? "+" : "") + fark + " ❤️";
    const bar = this.el("affection-wrap").getBoundingClientRect();
    const app = this.el("app").getBoundingClientRect();
    pop.style.left = (bar.left - app.left + bar.width * (0.3 + Math.random() * 0.4)) + "px";
    pop.style.top = (bar.top - app.top + 6) + "px";
    this.el("fx-layer").appendChild(pop);
    setTimeout(() => pop.remove(), 1500);
  },

  /* ── efektler ── */
  kalpYagmuru(adet) {
    const fx = this.el("fx-layer");
    const semboller = ["❤️", "💕", "💖", "🌸", "✨", "💗"];
    for (let i = 0; i < (adet || 12); i++) {
      setTimeout(() => {
        const k = document.createElement("div");
        k.className = "fx-heart";
        k.textContent = semboller[Math.floor(Math.random() * semboller.length)];
        k.style.left = Math.random() * 90 + 5 + "%";
        k.style.fontSize = 16 + Math.random() * 20 + "px";
        k.style.animationDuration = 2.4 + Math.random() * 1.6 + "s";
        fx.appendChild(k);
        setTimeout(() => k.remove(), 4200);
      }, i * 130);
    }
  },

  bildirim(metin, sure) {
    const t = this.el("toast");
    t.textContent = metin;
    t.classList.remove("hidden");
    clearTimeout(this._toastZaman);
    this._toastZaman = setTimeout(() => t.classList.add("hidden"), sure || 2600);
  },

  /* ── gün kartı ── */
  gunKarti(baslik, alt, emoji) {
    return new Promise(coz => {
      this.el("daycard-title").textContent = baslik;
      this.el("daycard-sub").textContent = alt || "";
      this.el("daycard-emoji").textContent = emoji || "🌸";
      const kart = this.el("daycard");
      kart.classList.remove("hidden");
      setTimeout(() => {
        kart.style.transition = "opacity .8s";
        kart.style.opacity = "0";
        setTimeout(() => {
          kart.classList.add("hidden");
          kart.style.opacity = "1";
          coz();
        }, 800);
      }, 2200);
    });
  },

  /* ── gökyüzü / atmosfer ── */
  atmosfer(mod) { // "gunduz" | "aksam" | "gece"
    document.body.classList.remove("gece", "aksam");
    if (mod === "gece") document.body.classList.add("gece");
    if (mod === "aksam") document.body.classList.add("aksam");
  },

  yildizlariKur() {
    const s = this.el("stars");
    for (let i = 0; i < 40; i++) {
      const y = document.createElement("i");
      y.style.left = Math.random() * 100 + "%";
      y.style.top = Math.random() * 100 + "%";
      y.style.animationDelay = Math.random() * 3 + "s";
      s.appendChild(y);
    }
  },

  panel(id, ac) {
    this.el(id).classList.toggle("hidden", !ac);
  },

  bekle: (ms) => new Promise(coz => setTimeout(coz, ms)),
};
