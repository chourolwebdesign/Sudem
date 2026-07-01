/* ═══════════════════════════════════════════════
   OYUN DURUMU & KAYIT SİSTEMİ 💾
   localStorage ile otomatik kayıt — çevrimdışı çalışır.
   ═══════════════════════════════════════════════ */

const KAYIT_ANAHTARI = "sude-kayit-v1";

const Durum = {
  veri: null,

  yeni() {
    this.veri = {
      isim: "",
      gun: 1,          // hangi gündeyiz
      adim: 0,         // gün içindeki adım (kaldığın yerden devam için)
      bag: 20,         // 0-100 bağ / sevgi puanı
      kalpPuani: 3,    // hediye almak için mini oyun parası
      ruhHali: "mutlu",
      bayraklar: {},   // hikaye seçim bayrakları
      hatiralar: [],   // {baslik, emoji, aciklama, gun}
      gunluk: [],      // {gun, metin} — Sude'nin günlüğü
      gecmis: [],      // sohbet geçmişi {tip, metin}
      hediyeler: [],   // gönderilen hediye kimlikleri
      bitti: null,     // final kimliği (bittiğinde)
      gunBitti: false, // gün sonu bekliyor mu
    };
    this.kaydet();
  },

  kaydet() {
    try {
      // sohbet geçmişini şişirmemek için son 250 mesajı tut
      if (this.veri.gecmis.length > 250)
        this.veri.gecmis = this.veri.gecmis.slice(-250);
      localStorage.setItem(KAYIT_ANAHTARI, JSON.stringify(this.veri));
    } catch (e) { /* depolama dolu olabilir, sessizce geç */ }
  },

  yukle() {
    try {
      const ham = localStorage.getItem(KAYIT_ANAHTARI);
      if (!ham) return false;
      this.veri = JSON.parse(ham);
      return true;
    } catch (e) { return false; }
  },

  sil() {
    localStorage.removeItem(KAYIT_ANAHTARI);
    this.veri = null;
  },

  var() {
    return !!localStorage.getItem(KAYIT_ANAHTARI);
  },

  /* ── bağ puanı ── */
  bagDegistir(fark) {
    const eski = this.veri.bag;
    this.veri.bag = Math.max(0, Math.min(100, this.veri.bag + fark));
    this.kaydet();
    return this.veri.bag - eski;
  },

  kalpEkle(adet) {
    this.veri.kalpPuani = Math.max(0, this.veri.kalpPuani + adet);
    this.kaydet();
  },

  hatiraEkle(h) {
    if (this.veri.hatiralar.some(x => x.baslik === h.baslik)) return false;
    this.veri.hatiralar.push({ ...h, gun: this.veri.gun });
    this.kaydet();
    return true;
  },

  gunlukEkle(metin) {
    this.veri.gunluk.push({ gun: this.veri.gun, metin });
    this.kaydet();
  },

  mesajKaydet(tip, metin) {
    this.veri.gecmis.push({ tip, metin });
    this.kaydet();
  },
};
