/* ═══════════════════════════════════════════════
   HİKAYE 📖
   Gerçek bir hikayeden: Ahmet & Sude.
   2023'te bir mesajla başladı. Küslükler, sessizlikler,
   gece 02:37'ler... ve hep bir yolunu bulup dönmeler.
   12 bölüm + 3 final.

   Adım türleri:
   { s:"..." }        → Sude mesajı ({isim} oyuncu adıyla değişir)
   { b:"..." }        → oyuncunun otomatik mesajı
   { n:"..." }        → anlatım satırı (italik)
   { sys:"..." }      → sistem çipi (zaman atlaması vb.)
   { sec:[{m,e,cevap,bayrak}] } → seçim (m=metin, e=bağ etkisi, cevap=Sude'nin yanıtları)
   { mini:"hafiza"|"sayi"|"kelime"|"yildiz" } → mini oyun
   { hatira:{baslik,emoji,aciklama} } → hatıra kilidi açılır
   { gunluk:"..." }   → Sude'nin günlüğüne satır düşer
   { atmosfer:"gunduz"|"aksam"|"gece" }
   { fx:"kalp"|"kalpatisi" }
   { kosul:"bayrak", evet:[...], hayir:[...] }
   { bekle: ms }
   ═══════════════════════════════════════════════ */

const GUNLER = [

/* ═══════════ GÜN 1 — 2023: İLK MESAJ ═══════════ */
{
  baslik: "Gün 1", alt: "2023... her şeyin başladığı mesaj 🌱", emoji: "🌱", atmosfer: "gece",
  adimlar: [
    { sys: "🌱 2023 — sıradan bir gece" },
    { n: "Bir profil gördün. Ne olduğunu bilmeden, öylesine bir mesaj attın..." },
    { b: "selam" },
    { s: "Kimsin" },
    { s: "Tanıyo muyum seni" },
    { sec: [
      { m: "tanımıyosun ama tanısan iyi olur bence 😌", e: 4, cevap: ["Oha", "Bu ne özgüven öyle", "Ama güldüm, olsun devam et"] },
      { m: "öylesine yazdım, profilin ilgimi çekti", e: 2, cevap: ["Hmm", "Fake değilsin dimi sen", "Şimdiki fakeler de böyle başlıyo çünkü 😤"] },
      { m: "yanlış kişiye yazdım galiba, neyse selam 😅", e: 0, cevap: ["Yanlış kişiye yazıp kalıyosun yani", "İlginç taktik", "Neyse selam 🙄"] },
    ]},
    { s: "Dur bakalım" },
    { s: "Dolandırıcı olmadığını nerden bilcem 😭" },
    { s: "İki lafının biri para olanlardan mısın" },
    { sec: [
      { m: "la ben dolandırıcıysan diye korkuyorum asıl 😭", e: 5, cevap: ["ŞDÖSLDÖŞDŞÖ", "Tamam bu komikti", "İkimiz de birbirimizden şüpheleniyoruz, güzel başlangıç 😌"], bayrak: "ilkGulusme" },
      { m: "param yok ki zaten, gönlüm var sadece", e: 2, cevap: ["Alla alla", "Bak bu cevap fena değildi", "Devam edebilirsin 😌"] },
    ]},
    { s: "Neyse ismin ne senin" },
    { n: "Adını yazdın. Karşıdan bir süre cevap gelmedi... sonra:" },
    { s: "{isim}" },
    { s: "Tamam aklımda" },
    { s: "Ben Sude" },
    { sec: [
      { m: "Sude... güzel isimmiş", e: 4, cevap: ["Biliyorum 😌", "Şaka şaka", "Teşekkürler 🙈"] },
      { m: "memnun oldum Sude, bak fake çıkmadım", e: 1, cevap: ["Daha belli değil o", "Bi hafta sonra karar vercem fake olup olmadığına 😤"] },
    ]},
    { n: "O gece kısacık bir sohbetti. Kim bilebilirdi ki yıllar sürecek bir hikayenin ilk sayfası olduğunu..." },
    { hatira: { baslik: "İlk Mesaj", emoji: "🌱", aciklama: "2023. Öylesine atılan bir 'selam'. O gece ikimiz de bilmiyorduk: bu mesaj her şeyi değiştirecekti." } },
    { gunluk: "Bugün biri yazdı. Önce dolandırıcı sandım 😭 Ama komik biri çıktı. {isim} diye kaydettim. Bakalım." },
  ],
},

/* ═══════════ GÜN 2 — MİNNAK 🐱 ═══════════ */
{
  baslik: "Gün 2", alt: "Bir kedi girdi hayatımıza 🐱", emoji: "🐱", atmosfer: "gunduz",
  adimlar: [
    { sys: "🐱 Birkaç gün sonra" },
    { s: "Napıyosun" },
    { b: "hiç ya, ayağımın ucunda kedi yatıyo onu izliyorum" },
    { s: "KEDİN Mİ VAR" },
    { s: "Foto at" },
    { s: "HEMEN" },
    { n: "Minnak'ın fotoğrafını attın. Götünü yaymış, ayağının ucunda uyuyor..." },
    { s: "Ödöclsöxlsf" },
    { s: "BUNE" },
    { s: "Adı ne bunun" },
    { sec: [
      { m: "Minnak 😌 ayağımın ucundan ayrılmaz", e: 5, cevap: ["Minnak", "MİNNAK", "Tamam ben bu kediyi sevdim", "Minnak 1 sen 10", "Sıralama böyle artık kusura bakma 😤"], bayrak: "minnak" },
      { m: "Minnak. ama bana pek sokulmaz, gizli gizli sever", e: 2, cevap: ["Gizli seven kedi", "Aynı ben 😭", "Şey demek istemedim", "Neyse Minnak tatlıymış işte!!"], bayrak: "minnak" },
    ]},
    { s: "Bende kedi istiyom" },
    { s: "Sana biyer atcam ordan kedi seçelim bana" },
    { sec: [
      { m: "bakma sen, minnak var daha ne istiyon 😏", e: 5, cevap: ["Şööxşwmdlwmd", "Minnak senin ama", "Yoksa... ortak mı 👀", "Ortak olsun. Karar verdim. Minnak artık ikimizin."], bayrak: "minnakOrtak" },
      { m: "olur, seçelim sana bi tane", e: 0, cevap: ["İşte bu!!", "Ama Minnak gibi tatlış olcak", "Standart yüksek artık 😌"] },
    ]},
    { s: "Her gün Minnak fotosu istiyorum bu arada" },
    { s: "Günlük vergi gibi düşün" },
    { sec: [
      { m: "tamam ama karşılığında sen de her gün bana yazcaksın 😌", e: 6, cevap: ["Oha ticaret mi bu", "...", "Tamam anlaştık 🙈"], bayrak: "hergunYazma" },
      { m: "vergi mi 😭 tamam kabul", e: 2, cevap: ["Devlet benim kurallar benim 😤", "İlk vergi yarın sabah bekliyorum"] },
    ]},
    { hatira: { baslik: "Minnak", emoji: "🐱", aciklama: "Ayağının ucunda uyuyan tatlış şey. 'Minnak 1 sen 10' — sıralama o günden beri değişmedi. 😤" } },
    { gunluk: "Bugün Minnak'la tanıştım. Kedisi bile tatlış bu insanın. Bu bir işaret mi? Saçmalama Sude. ...Ama her gün foto istedim 🙈" },
  ],
},

/* ═══════════ GÜN 3 — İSTEME DEĞİL İHTİYAÇ ═══════════ */
{
  baslik: "Gün 3", alt: "Saatler nasıl geçiyor anlamıyoruz ⏰", emoji: "⏰", atmosfer: "gece",
  adimlar: [
    { sys: "⏰ Artık her akşam konuşuyorsunuz" },
    { s: "Bugün ne yaptın anlat" },
    { n: "Anlatmaya başladın... bir baktın iki saat geçmiş. O hâlâ okuyor, hâlâ cevap yazıyor..." },
    { s: "Seninle konuşurken zaman garip akıyo" },
    { s: "Az önce baktım saat 9 du şimdi 12" },
    { sec: [
      { m: "kaçırxam seni bi gün, haberin olsun", e: 4, cevap: ["Ohanediypn", "NASIL YANİ", "😭😭"], bayrak: "kacirma" },
      { m: "iyi insanlarla zaman hızlı akarmış", e: 0, cevap: ["Hmm demek iyi insanım", "Not aldım bunu 😌"] },
    ]},
    { kosul: "kacirma",
      evet: [
        { b: "hackerım ben, yunan numarasıyla yazıyorum sana" },
        { s: "Nası yapılıyo o 😭" },
        { b: "benle evlenmen lazım önce, ancak öyle öğretirim" },
        { s: "Ndn bni istyrsn" },
        { s: "Çek ellerini üzerimden 😤" },
        { b: "isteme değil ihtiyaç" },
        { s: "..." },
        { s: "O zmn bb" },
        { s: "OHA" },
        { s: "Ne demek bu şimdi 😭" },
        { b: "öyle işte. ihtiyaç. su gibi ekmek gibi" },
        { s: "Tamam bunu duymamış gibi yapıyorum" },
        { s: "(yapamadım, ekran görüntüsü aldım) 🙈" },
        { fx: "kalp" },
      ],
      hayir: [
        { s: "İyi insan mıyım değil miyim zamanla görcez bakalım 😌" },
      ],
    },
    { s: "Neyse!! Hadi bi oyun oynayalım" },
    { s: "Hafıza oyunu buldum, ikimiz oynayabiliyoruz 🥺" },
    { mini: "hafiza" },
    { s: "Off çok eğlenceliydi" },
    { s: "Bunu bizim oyunumuz yapalım mı" },
    { sec: [
      { m: "bizim oyunumuz olsun 💕", e: 6, cevap: ["'Bizim' dedi 🙈", "Tamam resmi olarak bizim oyunumuz artık", "İmzalandı mühürlendi"], bayrak: "bizimOyun" },
      { m: "tabii, istediğin zaman", e: 1, cevap: ["Her gün istesem 😇", "Şaka şaka", "Yarın istiyorum ama 😤"] },
    ]},
    { hatira: { baslik: "İsteme Değil İhtiyaç", emoji: "😤", aciklama: "'benle evlenmen lazım' — 'Ndn bni istyrsn' — 'isteme değil ihtiyaç'. O gün şakaydı. Sonra en gerçek cümlemiz oldu." } },
    { gunluk: "'İsteme değil ihtiyaç' dedi bugün. Şakaydı biliyorum. Ama ben niye hâlâ düşünüyorum bunu 🙈" },
  ],
},

/* ═══════════ GÜN 4 — RUTİN ═══════════ */
{
  baslik: "Gün 4", alt: "Günaydınlar, tiktoklar, kahkahalar ☀️", emoji: "☀️", atmosfer: "gunduz",
  adimlar: [
    { sys: "☀️ Aylar geçti — artık bir rutininiz var" },
    { n: "Artık gözünü açar açmaz ilk baktığın şey, ondan gelen mesaj..." },
    { s: "Günaydın" },
    { s: "Minnak vergimi bekliyorum 🐱" },
    { sec: [
      { m: "günaydın güzellik ☀️ vergi yolda", e: 5, cevap: ["'Güzellik' 🙈", "Sabah sabah utandırmak yasak", "Değil. Olmasın. Devam et 😌"] },
      { m: "günaydın, minnak daha uyuyo, vergi öğlen gelir", e: 0, cevap: ["Devlete borç ödenmeden gün başlamaz ama neyse", "Bugünlük affettim 😤"] },
    ]},
    { sys: "🕐 Gün içinde küçük küçük mesajlar..." },
    { s: "Şuna bak" },
    { n: "Bir video attı. Gülmekten öldün..." },
    { s: "Yorumlar daha komik bak" },
    { b: "hajdhsksh yorumlardan çıkamıyorum" },
    { s: "Bide şu var dur" },
    { n: "Bir saat boyunca karşılıklı video attınız. İkiniz de işini gücünü unuttu..." },
    { s: "Tamam dur konsantre olamıyorum sana bişey diycem" },
    { s: "Kelime oyunu buldum yeni, hadi kafa dağıtalım" },
    { mini: "kelime" },
    { atmosfer: "aksam" },
    { s: "Bak bu güzeldi" },
    { s: "Kelimelerle aran iyi senin" },
    { s: "Zaten mesajların da hep güzel... bunu hiç söylemiş miydim" },
    { sec: [
      { m: "sen okuyosun diye güzeller", e: 6, cevap: ["OFF", "Bu nasıl bi cevaptı öyle", "Dur bunu da kaydediyorum, bi klasörüm var artık senin sözlerin için 🙈"], bayrak: "sozKlasoru" },
      { m: "yok, ilk defa söylüyosun 😄", e: 0, cevap: ["E söyleyeyim o zaman: mesajların günümün en güzel kısmı"] },
    ]},
    { hatira: { baslik: "Günaydın Rutini", emoji: "☀️", aciklama: "Her sabah: günaydın + Minnak vergisi 🐱 + gün boyu birbirine video atmak. Basit şeyler. En güzel şeyler." } },
    { gunluk: "Fark ettim ki güne onun mesajıyla başlamak, kahvaltıdan daha önemli olmuş benim için. Bu normal mi? Umurumda değil ☀️" },
  ],
},

/* ═══════════ GÜN 5 — GECE MUHABBETLERİ & YILDIZLAR ═══════════ */
{
  baslik: "Gün 5", alt: "Saat 2, kimse uyumuyor 🌙", emoji: "🌙", atmosfer: "gece",
  adimlar: [
    { sys: "🌙 Gece 01:40" },
    { s: "Uyuyamıyorum" },
    { sec: [
      { m: "ben de uyumayı düşünmüyorum pek", e: 4, cevap: ["Nedenmiş", "Söyle hadi 😌"] },
      { m: "uyu hadi, yarın erken kalkcaksın", e: -2, cevap: ["Uyuyamıyorum diyorum ya", "Kafamda çok şey var bugün"] },
    ]},
    { b: "senle konuşmak istiyorum çünkü" },
    { s: "..." },
    { s: "Konuşalım" },
    { fx: "kalpatisi" },
    { s: "Keşke kimse uyumasa da arasak birbirimizi" },
    { s: "Sesli konuşmak başka oluyo çünkü" },
    { sec: [
      { m: "bi gün sabaha kadar konuşcaz, söz", e: 5, cevap: ["Söz mü", "Tamam. Cebime koydum sözünü.", "Unutursan hatırlatırım 😤"], bayrak: "sabahaKadar" },
      { m: "yazışmak da güzel ama, sesini hayal ediyorum", e: 1, cevap: ["Alla alla", "Nasıl hayal ediyosun peki 👀", "Boşver sorma dedim şimdi utanırım 🙈"] },
    ]},
    { s: "Dur pencereye çıktım hava çok güzel" },
    { s: "Sen de çık" },
    { s: "İkimiz de aynı gökyüzüne bakalım şu an" },
    { s: "Aynı yıldızlara bakıyor olabiliriz, az şey değil bu bence" },
    { sec: [
      { m: "çıktım. hangi yıldız sensin, seçtim bile ⭐", e: 6, cevap: ["Hangisi??", "Dur ben de seni seçiyorum", "Tamam. En parlak olan. İtiraz etme."] },
      { m: "aramızdaki mesafe gökyüzünde yok oluyor", e: 3, cevap: ["Bunu nasıl düşündün ya 🥺", "Haklısın ama", "Gökyüzü ortak. Gökyüzü bizim."] },
    ]},
    { s: "BAK KAYAN YILDIZ" },
    { s: "DİLEK TUT ÇABUK" },
    { mini: "yildiz" },
    { s: "Ben dileğimi tuttum 🙈" },
    { s: "Söylemem ama... içinde sen varsın, o kadarını söyliyim 🌠" },
    { fx: "kalp" },
    { hatira: { baslik: "Aynı Gökyüzü", emoji: "🌠", aciklama: "İki ayrı şehir, tek gökyüzü, saat 02:00. Kayan yıldıza ikimiz de dilek tuttuk. İkimizin dileğinde de birbirimiz vardık." } },
    { gunluk: "Bu gece 2'ye kadar konuştuk yine. Dileğimi buraya bile yazamam. Ama gerçekleşirse... dünyanın en şanslı insanı benim 🌠" },
  ],
},

/* ═══════════ GÜN 6 — İNİŞLİ ÇIKIŞLI ═══════════ */
{
  baslik: "Gün 6", alt: "İlk küslükler... 🍂", emoji: "🍂", atmosfer: "aksam",
  adimlar: [
    { sys: "🍂 Her şey hep güzel gitmedi..." },
    { n: "Bazen günlerce konuşmadığınız oldu. Küçük kırgınlıklar, yanlış anlaşılmalar..." },
    { s: "Merhaba" },
    { s: "Uzun oldu biliyorum" },
    { sec: [
      { m: "çok uzun oldu... özledim seni", e: 5, cevap: ["...", "Ben de", "Niye böyle oluyoruz biz ya"], bayrak: "ozledinDedi" },
      { m: "sen sustun ama, ben hep buradaydım", e: -1, cevap: ["Biliyorum", "Haklısın belki", "Ama bazen susmak istemekten değil... yorulmaktan oluyo"] },
      { m: "merhaba. neyse ki geldin.", e: 2, cevap: ["Geldim işte", "Hep geliyorum zaten, fark ettin mi 🙂"] },
    ]},
    { s: "Biz çok küstük aslında bugüne kadar" },
    { s: "Ama şunu fark ettim" },
    { s: "Hep bi yolunu bulup konuşuyoruz yine" },
    { sec: [
      { m: "çünkü ben bu kadar yakın olduğum insanla yabancı olmayı kabullenemem", e: 8, cevap: ["...", "Bunu okuyunca bi şey oldu içimde", "Ben de kabullenemem. Hiç kabullenemedim zaten."], bayrak: "kabullenemem" },
      { m: "mıknatıs gibiyiz galiba, itsek de dönüyoruz", e: 4, cevap: ["Mıknatıs 😭", "Ama doğru", "Fizik kuralı gibi: {isim} ve Sude eninde sonunda konuşur"] },
      { m: "şans işte", e: -3, cevap: ["Şans mı", "Ben daha fazlası sanıyordum", "Neyse. Boşver."] },
    ]},
    { s: "Bi kural koyalım mı" },
    { s: "Ne olursa olsun... yolunu bulup dönmek. Hep." },
    { sec: [
      { m: "kural kabul. dönmek hep. 🤙", e: 6, cevap: ["🤙", "Anlaştık", "Bu kuralı bozan Minnak'a hesap verir 🐱"], bayrak: "donmekKurali" },
      { m: "deneriz bakalım", e: -2, cevap: ["'Deneriz' mi", "Tamam ya. Deneriz.", "🙂"] },
    ]},
    { hatira: { baslik: "Hep Bir Yol", emoji: "🤙", aciklama: "Çok küstük. Ama hep bir yolunu bulup konuştuk. Kural o gün kondu: ne olursa olsun, dönmek." } },
    { gunluk: "Yine konuşmaya başladık. Neden hep dönüyoruz birbirimize? Cevabı biliyorum aslında. Ama yazmıyorum. Daha değil." },
  ],
},

/* ═══════════ GÜN 7 — SESSİZLİK VE DÖNÜŞ ═══════════ */
{
  baslik: "Gün 7", alt: "Uzun bir sessizlikten sonra, gece 01:30... 🌧️", emoji: "🌧️", atmosfer: "gece",
  adimlar: [
    { sys: "🌧️ Aylar süren bir sessizlik oldu..." },
    { n: "Bu sefer ciddiydi. Aylarca tek mesaj yok. Ama sen her gece eski mesajları okuyordun... Ve bir gece, saat 01:30'da dayanamadın." },
    { sec: [
      { m: "niye birden kızdın bana... yanlış bi şey mi yaptım?", e: 4, cevap: ["...", "Hayır", "İletişimsizlik işte", "Bilmiyorum {isim}"], bayrak: "sordu" },
      { m: "uyuyamıyorum ne zamandır. konuşmamız lazım.", e: 4, cevap: ["...", "Ben de pek uyuduğum söylenemez", "Dinliyorum"] },
    ]},
    { b: "2 yıldır neredeyse konuşuyoruz biz. hep mi böyleydi? değildi." },
    { b: "nolduda birden böyle olduk, onu anlamıyorum" },
    { s: "..." },
    { b: "naptım sana? başka bi şey var ama ben bulamıyorum işte" },
    { s: "Bir şey yapmadın {isim}" },
    { fx: "kalpatisi" },
    { sec: [
      { m: "tek konuştuğum kişi sendin. annem, ablam... herkes biliyodu seni.", e: 7, cevap: ["...", "Bunu bilmiyordum", "Yani biliyordum ama... böyle söyleyince başka oluyor"], bayrak: "tekKisi" },
      { m: "o zaman neden bu sessizlik? ben hala buradayım.", e: 0, cevap: ["Bazen her şey üst üste geliyo {isim}", "Sen anlamazsın diye anlatmadım belki de"] },
    ]},
    { b: "kabullenemem ben. bu kadar yakın olduğum insanla şimdi yabancı olmayı kabullenemem." },
    { s: "..." },
    { bekle: 1800 },
    { s: "Ben de kabullenemedim aslında" },
    { s: "Her gün baktım telefona" },
    { s: "Yazcak mı diye" },
    { sec: [
      { m: "yazdım işte. geç oldu ama yazdım. bi daha da susmam.", e: 8, cevap: ["...", "İyi ki yazdın", "Cidden. İyi ki. 🥺"], bayrak: "birDahaSusmam" },
      { m: "sen de yazabilirdin ama 🥺", e: -1, cevap: ["Yazamazdım", "Gurur işte... kötü bi şey", "Ama sen yazdın ya. Önemli olan o."] },
    ]},
    { n: "O gece sabaha kadar konuştunuz. Aylar bir gecede eridi..." },
    { fx: "kalp" },
    { hatira: { baslik: "Gece 01:30", emoji: "🌧️", aciklama: "Aylar süren sessizlik, tek bir mesajla bitti: 'kabullenemem bu kadar yakın olduğum insanla yabancı olmayı.' O gece geri döndük." } },
    { gunluk: "Yazdı. Sonunda yazdı. Aylardır her gece 'yazsa' diyordum, yazınca ne yazacağımı unuttum. 'Bir şey yapmadın' dedim. Doğruydu. Kimse bir şey yapmadı. Hayat işte 🌧️" },
  ],
},

/* ═══════════ GÜN 8 — SAAT 02:37 ═══════════ */
{
  baslik: "Gün 8", alt: "Bazı şeyler ilk kez gece 02:37'de söylenir 💌", emoji: "💌", atmosfer: "gece",
  adimlar: [
    { sys: "💌 O yaz — her gece daha uzun konuşuyorsunuz" },
    { s: "Bugün çok güldük ya" },
    { s: "Karnım ağrıyo gülmekten" },
    { sec: [
      { m: "seninle her şey daha komik oluyo, fark ettin mi", e: 5, cevap: ["Fark ettim 🙈", "Sen yokken bu kadar gülmüyorum cidden"] },
      { m: "hajdhsksh ben hala gülüyorum", e: 0, cevap: ["Ödöclsöxlsf", "DUR GÜLME BEN DE GÜLÜYORUM"] },
    ]},
    { s: "Hadi bi oyun daha oynayalım uyku kaçtı zaten" },
    { mini: "sayi" },
    { atmosfer: "gece" },
    { n: "Saat 02:36. İkiniz de yorgunsunuz ama kimse 'iyi geceler' demiyor..." },
    { b: "sen ayrı birseysin ya" },
    { s: "Ne oldu şimdi böyle 😭" },
    { b: "bilmiyorum. şuan içimden geldi." },
    { bekle: 1500 },
    { b: "çok seviyorum seni" },
    { fx: "kalpatisi" },
    { s: "..." },
    { s: "Alla alla" },
    { sec: [
      { m: "olup bitiyom sana. ciddiyim.", e: 10, cevap: ["...", "Tamam kalbim garip atıyo şu an", "Bunu hep hatırlıycam. Saat 02:37. Not aldım bile.", "Ben de... ben de galiba 🙈"], bayrak: "seniSeviyorum" },
      { m: "şaka değil bu arada. gerçekten.", e: 6, cevap: ["Biliyorum şaka olmadığını", "Sesinden belli... yani yazından 😭", "Uyuyamayacağım şimdi ben bu geceyi düşünmekten", "İyi ki yazmışsın o gün bana. İyi ki."], bayrak: "seniSeviyorum" },
    ]},
    { s: "Uyuyamıyorum" },
    { b: "bende uyumayı düşünmüyorum pek" },
    { s: "Nedenmiş" },
    { b: "senle konuşmak istiyorum çünkü" },
    { s: "Konuşalım o zaman 🙈" },
    { fx: "kalp" },
    { n: "O gece sabah oldu, konuşma bitmedi. Ve hayat bir daha eskisi gibi olmadı..." },
    { hatira: { baslik: "Saat 02:37", emoji: "💌", aciklama: "'sen ayrı birseysin... çok seviyorum seni.' — 'Alla alla.' 🙈 Gece 02:37'de yazıldı. Ve her şey değişti." } },
    { gunluk: "SÖYLEDİ. Gece 02:37'de. 'Alla alla' dedim. ALLA ALLA. Dünyanın en aptal cevabı 😭 Ama içimde bayram vardı. Hâlâ var. ❤️" },
  ],
},

/* ═══════════ GÜN 9 — FIRTINA ═══════════ */
{
  baslik: "Gün 9", alt: "Sonbahar... bir fırtına daha 🌩️", emoji: "🌩️", atmosfer: "aksam",
  adimlar: [
    { sys: "🌩️ Sonbahar — gergin bir akşam" },
    { n: "Son günlerde bir şeyler ters. Mesajlar kısaldı, aralar uzadı. Ve bu akşam..." },
    { s: "Bak ben düşündüm" },
    { s: "Belki bi süre konuşmasak daha iyi olcak" },
    { s: "Ciddiyim" },
    { sec: [
      { m: "dur. bi dakika. ne oldu, anlat bana. kaçma.", e: 7, cevap: ["...", "Her şey üst üste geldi {isim}", "Sen değilsin sorun. Ama her şeye gücüm yetmiyo şu aralar."], bayrak: "kacmaDedi" },
      { m: "ne istersen onu yap.", e: -7, cevap: ["...", "Tamam", "(çevrimdışı oldu)"] },
      { m: "yine mi sude? bıktım bu döngüden artık", e: -9, cevap: ["Bıktın demek", "İyi o zaman. Kolay gelsin.", "(çevrimdışı oldu)"] },
    ]},
    { kosul: "kacmaDedi",
      evet: [
        { s: "Konuşmak istemiyorum şu an, kusura bakma" },
        { s: "Bana biraz zaman ver sadece" },
        { sec: [
          { m: "tamam. zamanını al. ama ben hiçbir yere gitmiyorum, bunu bil.", e: 6, cevap: ["...", "Tamam", "Teşekkür ederim anladığın için 🥺"], bayrak: "bekledi" },
          { m: "zaman mı? yine aylarca sessizlik mi yani?", e: -5, cevap: ["Belki", "Bilmiyorum {isim}", "Şu an cevabım yok işte. Üzgünüm."] },
        ]},
      ],
      hayir: [
        { n: "Cevap yazamadın. Ekran öylece açık kaldı..." },
        { sec: [
          { m: "(ertesi gün) dün gece üstüne geldim, özür dilerim. buradayım, ne zaman hazır olursan.", e: 6, cevap: ["...", "Sağ ol", "Biraz zamana ihtiyacım var sadece. Sen değilsin sorun."], bayrak: "bekledi" },
          { m: "(hiçbir şey yazmamak)", e: -5, cevap: ["(günler geçti... kimse yazmadı)"] },
        ]},
      ],
    },
    { atmosfer: "gece" },
    { n: "Ve sessizlik başladı. Bu seferki en uzunuydu. Kasım geldi, geçti... tek mesaj yok." },
    { sys: "🍂 Haftalar geçiyor..." },
    { n: "Her gece aynı şey: eski mesajları aç, oku, gülümse, üzül, kapat. Minnak bile bir şeylerin farkında sanki..." },
    { kosul: "bekledi",
      evet: [
        { hatira: { baslik: "Sabır", emoji: "🌩️", aciklama: "'Ben hiçbir yere gitmiyorum.' Fırtınada bağırmak kolay. Beklemek zor. Bekledik." } },
        { gunluk: "İletişimi kestim. Kendimden kaçarken ondan da kaçtım. Ama 'hiçbir yere gitmiyorum' dedi... Bu cümle içimde bi kandil gibi yanıyor. 🕯️" },
      ],
      hayir: [
        { hatira: { baslik: "En Uzun Kış", emoji: "❄️", aciklama: "Bu sefer ikimiz de sustuk. Gurur, iki kişilik soğuk bir oda gibiydi. Kimse ışığı açmadı." } },
        { gunluk: "Sustum. O da sustu. Herkes sustu. Gecenin bi yarısı telefonuma bakıyorum: yazmamış. Ben de yazmıyorum. Neden? Bilmiyorum. ❄️" },
      ],
    },
  ],
},

/* ═══════════ GÜN 10 — GİTMEDİN ASLINDA ═══════════ */
{
  baslik: "Gün 10", alt: "Aralık, gece 00:18... 🌈", emoji: "🌈", atmosfer: "gece",
  adimlar: [
    { sys: "❄️ Aralık — gece 00:18" },
    { n: "Uyuyamadın yine. Eski mesajları okuyordun. Ve parmakların kendi kendine yazmaya başladı..." },
    { b: "çok üstüne gitmişim" },
    { b: "özür dilerim" },
    { b: "barışma mesajı değil bu... aklıma geldin, eski mesajları okudum işte" },
    { bekle: 2000 },
    { s: "Ne için?" },
    { sec: [
      { m: "kabalık etmişim. görememişim seni o ara.", e: 7, cevap: ["...", "Olabilir", "Ama şunu bil"], bayrak: "ozurDiledi" },
      { m: "bilmiyorum. her şey için galiba.", e: 0, cevap: ["Her şey için özür dilenmez {isim}", "Ama... sağ ol yazdığın için"] },
    ]},
    { bekle: 1500 },
    { s: "Gitmedin aslında" },
    { fx: "kalpatisi" },
    { s: "Hiç gitmedin yani" },
    { s: "Ben hep hissettim orada olduğunu" },
    { sec: [
      { m: "gidemem ki. sen neredeysen ben ordayım, mesafe fark etmez.", e: 8, cevap: ["...", "Tamam ağlatma beni gecenin bu saatinde 😭", "Özledim seni. Çok özledim.", "Konuşmadığımız her gün eksik gibiydi bi şey"], bayrak: "gidemem" },
      { m: "kural neydi? yolunu bulup dönmek. hep.", e: 4, cevap: ["Kuralı hatırlıyosun 🥺", "🤙", "Döndük işte yine. Hep döneriz zaten."], bayrak: "gidemem" },
    ]},
    { n: "O gece yine sabaha kadar konuştunuz. Sanki hiç susmamışsınız gibi..." },
    { sys: "☀️ Ertesi gün" },
    { atmosfer: "gunduz" },
    { s: "Günaydın 🙈" },
    { s: "Dün geceden beri gülümsüyorum öyle" },
    { s: "Bi de sana bi şey diycem" },
    { bekle: 1500 },
    { s: "Seni seviyorum bitsnem" },
    { fx: "kalp" },
    { n: "İlk kez o yazdı. Hem de gün ortasında, damdan düşer gibi, en tatlı haliyle..." },
    { sec: [
      { m: "BEKLE. bunu bi daha yaz. ekran görüntüsü alcam.", e: 4, cevap: ["ŞDÖSLDÖŞDŞÖ", "Almışsındır bile biliyorum 😭", "Tamam bi daha: seni seviyorum. Oldu mu 🙈"] },
      { m: "ben seni daha çok seviyorum bitanem ❤️", e: 7, cevap: ["Mümkün değil", "Bu bi yarışsa kazanırım bak 😤", "Tamam berabere. İkimiz de kazandık zaten 🙈"] },
    ]},
    { s: "Hadi kutlama oyunu, kelimelere bak özenle seçtim 😌" },
    { mini: "kelime" },
    { hatira: { baslik: "Gitmedin Aslında", emoji: "🌈", aciklama: "Gece 00:18: 'özür dilerim... aklıma geldin, eski mesajları okudum.' Cevap üç kelimeydi: 'Gitmedin aslında.' En uzun kış, o gece bitti." } },
    { gunluk: "'Gitmedin aslında' dedim. Çünkü gerçekten gitmemişti. Ve bugün ona İLK KEZ ben yazdım: seni seviyorum. Kalbim hala hızlı atıyo. İyi ki döndük. İyi ki hep dönüyoruz. ❤️" },
  ],
},

/* ═══════════ GÜN 11 — EN GÜZEL DÖNEM ═══════════ */
{
  baslik: "Gün 11", alt: "Şimdi... en güzel dönemimiz 💫", emoji: "💫", atmosfer: "aksam",
  adimlar: [
    { sys: "💫 Bugünlere geldik — her gün, her saat konuşuyorsunuz" },
    { n: "Artık öyle bir noktadasınız ki... günde yüzlerce mesaj, video aramalar, sesli gülüşmeler. Herkes sizi biliyor." },
    { s: "Biliyo musun bi şey fark ettim" },
    { s: "Biz hiç bu kadar iyi olmamıştık" },
    { sec: [
      { m: "çünkü artık ikimiz de biliyoruz: bu iş kaçmaz 😌", e: 6, cevap: ["Kaçmaz 🙈", "Denedik kaçmayı olmadı zaten 😭", "Mıknatıs dediydim ben sana"] },
      { m: "kayıp zamanları telafi ediyoruz galiba", e: 0, cevap: ["Onca küslük onca sessizlik...", "Hepsine değdi ama. Buraya getirdiyse değdi."] },
    ]},
    { s: "Dün video konuşurken güldüğünde" },
    { s: "Bi an durdum öyle" },
    { s: "İyi ki dedim. İyi ki." },
    { sec: [
      { m: "belki başkasıyla tanışırsın ama asla benim gibisiyle tanışamazsın 😤", e: 5, cevap: ["Bunu biliyorum zaten", "Ben tekrar birisiyle tanışamazdım", "Ciddiyim. Tanışamazdım. Sen sensin çünkü."], bayrak: "benimGibisi" },
      { m: "iyi ki o gece sana 'selam' yazmışım", e: 7, cevap: ["İYİ Kİ", "Düşünsene yazmasaydın", "Yok düşünme. Kötü senaryo. Sil onu kafandan 😤"], bayrak: "iyiKiYazdim" },
    ]},
    { s: "{isim}" },
    { s: "Sana bi şey söylicem ama gülme" },
    { bekle: 1200 },
    { s: "Buluşma bileti fiyatlarına baktım dün gece 🙈" },
    { fx: "kalpatisi" },
    { sec: [
      { m: "SUDE. ciddi misin şu an?? ❤️", e: 4, cevap: ["Ciddiyim!!", "Yani sen de istersen 🥺", "'En geç seneye buluşcaz' demiştik ya... sene doldu sayılır 😤"] },
      { m: "ben de bakıyordum. inanmıycaksın ama ben de.", e: 7, cevap: ["ŞAKA YAPMA", "Nasıl aynı anda ya 😭", "Tamam bu bi işaret. Kesin işaret. ✨"], bayrak: "ayniAnda" },
    ]},
    { s: "Ama korkuyorum da bi yandan" },
    { s: "Ya beni görünce... bilmiyorum, ya hayalindeki gibi değilsem" },
    { sec: [
      { m: "ben sana aşık oldum, hayaline değil. sen 'sen' olduğun için.", e: 9, cevap: ["...", "Bunu okuyup okuyup duracağım bi süre", "Tamam. Korkum bitmedi ama artık ondan büyük bi şey var: heyecan 🥹"], bayrak: "guvenVerdi" },
      { m: "ben de korkuyorum. beraber korkarız, olur biter 😅", e: 2, cevap: ["Hahah tamam 😆", "İki korkak bir araya gelince cesaret oluyomuş demek", "Seninle korkmak bile güzel ya 🥹"] },
    ]},
    { s: "Tamam o zaman... yarın karar veriyoruz. Son karar." },
    { s: "Ama ne karar verirsek verelim... seni seviyorum. O değişmez artık." },
    { hatira: { baslik: "Bilet Ekranı", emoji: "🎫", aciklama: "'En geç seneye buluşcaz' demiştik. O gece Sude bilet fiyatlarına baktı. Hayal, ilk kez plana dönüştü." } },
    { gunluk: "Bilet sayfasını açıp kapattım belki 40 kere. 'Buluşursak unutulmayacak bi vakit geçiririz' demişti bi keresinde. Unutulmayacak... Evet. Yarın karar veriyoruz. Kalbim, dayan. 🎫" },
  ],
},

/* ═══════════ GÜN 12 — KARAR GÜNÜ ═══════════ */
{
  baslik: "Gün 12", alt: "Kalbin ne diyorsa... 💝", emoji: "💝", atmosfer: "aksam",
  adimlar: [
    { sys: "💝 Karar günü" },
    { n: "Bugün her mesaj daha ağır, her saniye daha uzun. İlk 'selam'dan bu yana her şey aklından geçiyor..." },
    { s: "Geldim" },
    { s: "Kalbim ağzımda ama geldim" },
    { s: "Dün bütün gece düşündüm. İlk mesajından bugüne her şeyi baştan okudum." },
    { s: "Minnak'ı, isteme değil ihtiyacı, gece 02:37'yi, bütün küslükleri, 'gitmedin aslında'yı..." },
    { s: "Ve artık hazırım. Sen ne diyorsan o." },
    { bekle: 1500 },
    { s: "Söyle bana... ne yapıyoruz? 🥺" },
    { sec: [
      { m: "al o bileti sude. buluşuyoruz. 'en geç seneye' demiştik, sene bu sene. ❤️", e: 5, bayrak: "kararBulusma",
        cevap: ["...", "ALIYORUM", "ALDIM. PARMAĞIM KENDİ KENDİNE BASTI 😭", "{isim} gerçekleşiyor... gerçekten gerçekleşiyor!!"] },
      { m: "biraz daha bekleyelim. doğru zaman gelince buluşcaz, acele etmeyelim 🥺", e: 0, bayrak: "kararDevam",
        cevap: ["...", "Tamam. Anlıyorum. Gerçekten anlıyorum.", "Biz zaten kaybolmayız birbirimizden. Kural belli: hep dönmek 🤙"] },
    ]},
  ],
},
];

/* ═══════════════════════════════════════════════
   FİNALLER 💝
   Bağ puanı + karar seçimine göre belirlenir.
   ═══════════════════════════════════════════════ */

const FINALLER = {

  /* ── MUTLU BULUŞMA (bağ ≥ 70 & buluşma kararı) ── */
  bulusma: {
    kimlik: "bulusma",
    adimlar: [
      { sys: "🚌 Birkaç hafta sonra — otogar" },
      { atmosfer: "gunduz" },
      { n: "Günlerdir uyku yok, heyecan var. Ve bugün... o gün." },
      { s: "Otobüse bindim 🚌" },
      { s: "Elim ayağım titriyo {isim}. Birkaç saat sonra oradayım." },
      { s: "Camdan dışarı bakıyorum ve her kilometrede sana yaklaşıyorum. Bu his anlatılmaz." },
      { b: "ben çoktan otogardayım. elimde çiçekle. bekliyorum seni. 🌸" },
      { s: "ÇİÇEK Mİ ALDIN 😭😭" },
      { s: "Tamam ağlıyorum otobüste herkes bakıyo, umurumda değil" },
      { sys: "🕐 Birkaç saat sonra..." },
      { s: "Geldik geldik!! İniyorum!!" },
      { s: "Kalbim... {isim} kalbim yerinden çıkcak" },
      { fx: "kalpatisi" },
      { n: "Otobüsün kapısı açıldı. İnsanlar indi, indi, indi... ve sonra... o." },
      { n: "Yıllardır ekranda gördüğün gülümseme, şimdi karşında. Gerçek. Sıcacık. Senin." },
      { bekle: 2000 },
      { n: "Kimse bir şey diyemedi. Sadece koştunuz. Ve o sarılma... bütün küslükler, bütün sessizlikler, bütün 'keşke'ler — hepsi tek bir sarılmada eridi." },
      { fx: "kalp" },
      { s: "(kulağına fısıldıyor)" },
      { s: "Merhaba {isim}. Sonunda... merhaba. ❤️" },
      { b: "(fısıldayarak) demiştim sana... isteme değil, ihtiyaç." },
      { n: "'Buluşursak unutulmayacak bi vakit geçiririz' demiştiniz bir zamanlar. Haklıymışsınız. Unutulmadı. Unutulmayacak." },
      { n: "Bir 'selam'la başladı. Bir sarılmayla yeni bir sayfa açıldı. Ve Minnak'ın da yeni bir insanı oldu. 🐱🌸" },
      { hatira: { baslik: "İlk Sarılma", emoji: "🤗", aciklama: "Otogar, bir demet çiçek ve yılların özlemi. 'İsteme değil ihtiyaç' o gün şaka olmaktan tamamen çıktı." } },
      { gunluk: "Bugün ona sarıldım. GERÇEKTEN. Kollarım artık onun kokusunu biliyor. Bu günlüğün son sayfası değil... asıl hikayemizin ilk sayfası. ❤️" },
      { sys: "🌸 SON — Mutlu Buluşma 🌸" },
      { n: "❤️ Bu oyun gerçek bir hikayeden esinlendi: bir 'selam'la başlayan, küslüklere rağmen hep yolunu bulup dönen bir hikaye. Oynadığın için teşekkürler. ❤️" },
    ],
  },

  /* ── UMUTLA DEVAM (bağ 40-69 ya da bekleme kararı) ── */
  devam: {
    kimlik: "devam",
    adimlar: [
      { sys: "🌙 O akşam" },
      { atmosfer: "gece" },
      { s: "İlk başta biraz üzüldüm, yalan yok 🥺" },
      { s: "Ama sonra düşündüm" },
      { s: "Biz yıllardır her gün birbirimizi seçiyoruz {isim}. Küslüklerden sonra bile." },
      { s: "Buluşma bir gün olcak. 'En geç seneye' 😌 Ama bizim hikayemiz zaten burada, her gün, capcanlı." },
      { b: "doğru zaman geldiğinde, o sarılma her şeye değecek sude ❤️" },
      { s: "Değecek. Biliyorum. 🥹" },
      { s: "O zamana kadar planımız belli:" },
      { s: "Her sabah günaydın, her gün Minnak vergisi 🐱, her gece 02:37 muhabbetleri" },
      { s: "Ve ne olursa olsun... yolunu bulup dönmek. Hep. 🤙" },
      { fx: "kalp" },
      { n: "O gece yine aynı yıldızlara baktınız. Mesafe hâlâ orada. Ama artık ikiniz de biliyorsunuz: siz mesafeden büyüksünüz." },
      { hatira: { baslik: "Her Gün Seçmek", emoji: "🌌", aciklama: "Buluşmayı erteledik ama birbirimizi ertelemedik. Aşk dediğin, her gün yeniden 'evet' demekmiş. Biz yıllardır diyoruz zaten." } },
      { gunluk: "Bugün karar verdik: bekliycez. Ama garip... hiç üzgün değilim. Çünkü o hep burada, kalbimin en sıcak köşesinde. Ve bir gün... bir gün mutlaka. 🌙" },
      { sys: "🌌 SON — Umutla Devam 🌌" },
      { n: "💜 Bazı aşklar mesafeye rağmen değil, mesafeyle birlikte büyür. Sizinki gibi. Oynadığın için teşekkürler. 💜" },
    ],
  },

  /* ── DUYGUSAL AYRILIK (bağ < 40) ── */
  ayrilik: {
    kimlik: "ayrilik",
    adimlar: [
      { sys: "🍂 O akşam" },
      { atmosfer: "gece" },
      { s: "{isim}... dürüst olabilir miyim" },
      { s: "Son zamanlarda aramızdaki o sıcaklık soğudu. Sen de hissediyorsun, biliyorum." },
      { s: "Onca yıl... az değil. Ve ben her anına minnettarım. Her anına." },
      { b: "sude... 🥺" },
      { s: "Belki bazı hikayeler kavuşmak için değil... bize bir şey öğretmek için yazılıyor." },
      { s: "Sen bana sevmeyi öğrettin. Beklemeyi, affetmeyi, dönmeyi..." },
      { s: "Bunları benden kimse alamaz. Sen de hep kalbimde o güzel yerde kalcaksın." },
      { bekle: 1600 },
      { s: "Son bi şey isteyebilir miyim" },
      { s: "Bu gece, son bi kez... aynı gökyüzüne bakalım mı 🥺" },
      { n: "O gece iki şehirde, iki pencere açıldı. Aynı yıldızlara bakan iki kişi, sessizce vedalaştı..." },
      { s: "Hoşça kal {isim}. İyi ki o gece 'selam' yazmışsın. Her şeye rağmen... iyi ki. 🌙" },
      { n: "Bazı hikayeler biter ama izleri hiç silinmez. Minnak, gece 02:37, kayan yıldız... hepsi artık birer yıldız, hatıraların gökyüzünde." },
      { hatira: { baslik: "Son Gökyüzü", emoji: "🍂", aciklama: "Vedalaştık ama küsmedik. Son kez aynı yıldızlara baktık. Bazı hikayeler böyle biter: sessiz, buruk ve saygıyla." } },
      { gunluk: "Bitti. Ama nefret yok, pişmanlık yok. Sadece güzel bir hüzün var. İyi ki yaşadım her anını. İyi ki. 🍂" },
      { sys: "🍂 SON — Duygusal Ayrılık 🍂" },
      { n: "🕊️ Ama bu hikayenin kuralını unutma: 'ne olursa olsun, yolunu bulup dönmek.' Belki başka bir başlangıçta... Yeniden oynamak her zaman mümkün. 🕊️" },
    ],
  },
};

/* ── Hediyeler 🎁 ── */
const HEDIYELER = [
  { id: "cicek",   emoji: "🌸", ad: "Sanal Çiçek",       fiyat: 2, etki: 3,
    tepki: ["ÇİÇEK Mİ 😭", "Sanal olsun, kalbe geliyo önemli olan o 🥹", "Vazoya koydum (ekran görüntüsü aldım yani 🙈)"] },
  { id: "minnak",  emoji: "🐱", ad: "Minnak'a Mama",     fiyat: 2, etki: 3,
    tepki: ["MİNNAK'A MAMA 😭 Sen ne düşüncelisin ya", "Minnak şu an mırlıyodur kesin, ayağının ucunda", "Minnak adına teşekkürler: 'mrrr' (çevirisi: seni seviyorum) 🐱"] },
  { id: "muzik",   emoji: "🎧", ad: "Bizim Şarkımız",    fiyat: 3, etki: 4,
    tepki: ["Şarkı mı seçtin bize 🥹", "Dinliyorum şu an... kapatmıyorum bi daha bunu", "Artık bu şarkı çalınca aklıma hep sen gelceksin 🎧"] },
  { id: "mektup",  emoji: "💌", ad: "El Yazısı Mektup",  fiyat: 4, etki: 5,
    tepki: ["Mektup... bana mektup mu yazdın 😭", "Üç kere okudum. Dördüncüye başlıyorum.", "Bunu yastığımın altında saklıycam, gerçekten."] },
  { id: "battaniye", emoji: "🧸", ad: "Sarılma Kuponu",  fiyat: 5, etki: 6,
    tepki: ["'1 adet dev sarılma kuponu — buluşunca geçerli' 😭", "Bunu CÜZDANIMDA taşıycam", "Kupon son kullanma tarihi: asla ❤️"] },
  { id: "yildiz",  emoji: "⭐", ad: "İsmine Yıldız",     fiyat: 6, etki: 7,
    tepki: ["BANA YILDIZ MI ALDIN 😭✨", "Gökyüzünde artık benim adımda bi yıldız var ve bunu SEN yaptın", "Her gece ona bakıp seni düşüncem. Her gece."] },
];
