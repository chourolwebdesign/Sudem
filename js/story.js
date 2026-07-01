/* ═══════════════════════════════════════════════
   HİKAYE 📖
   3 yıllık uzak mesafe ilişkisinin yolculuğu.
   12 bölüm (gün) + 3 farklı final.

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

/* ═══════════ GÜN 1 — 3 YIL ÖNCE: TANIŞMA ═══════════ */
{
  baslik: "Gün 1", alt: "3 yıl önce... her şeyin başladığı gece 🌙", emoji: "🌙", atmosfer: "gece",
  adimlar: [
    { sys: "🌙 3 yıl önce — bir gece yarısı" },
    { n: "Bir oyun sunucusunda, tanımadığın biriyle aynı takıma düştün..." },
    { s: "selam! demin oyunda beni kurtaran sendin galiba? 😅" },
    { s: "sağ ol cidden, kimse dönüp bakmıyordu bana 🥺" },
    { sec: [
      { m: "Rica ederim, takım arkadaşı yalnız bırakılmaz 😊", e: 4, cevap: ["awww ne kadar kibarsın öyle ☺️", "genelde kimse böyle düşünmüyor buralarda"] },
      { m: "Fark etmedim bile, refleksti 😅", e: 0, cevap: ["hahah mütevazılık da varmış sende 😌", "ama ben fark ettim işte, teşekkürler"] },
      { m: "Sen de fena oynamıyordun aslında", e: 2, cevap: ["yaaa 🥹 bugün ilk defa biri güzel bi şey dedi oyunda", "genelde 'bot musun' yazıyorlar bana 😤"] },
    ]},
    { s: "bu arada ben Sude! sen?" },
    { n: "Adını yazdın. Kalbin sebepsiz yere hafifçe hızlandı..." },
    { b: "Ben {isim} 😊" },
    { s: "{isim}... güzel isimmiş 🌸" },
    { s: "profiline baktım da, aynı oyunları seviyoruz galiba?" },
    { sec: [
      { m: "Galiba evet! Bir oyun daha atar mıyız? 🎮", e: 5, cevap: ["kesinlikle!! ama önceden söyleyeyim, kaybedince biraz söylenirim 😤", "hazır mısın? 😏"], bayrak: "ilkOyunTeklifi" },
      { m: "Zevkli birine benziyorsun 😄", e: 1, cevap: ["hihi teşekkürler 😊", "sen de öylesin bence... oyun tarzından belli"] },
    ]},
    { n: "O gece saatlerce aynı takımda oynadınız. Kaybettiniz ama ikiniz de hiç üzülmediniz..." },
    { atmosfer: "gece" },
    { s: "of saat 3 olmuş!! 😱" },
    { s: "yarın erken kalkacağım ama... hiç uyuyasım yok 🙈" },
    { sec: [
      { m: "Ben de... ama git uyu hadi, yarın yine oynarız 😊", e: 5, cevap: ["söz mü? 🥺", "tamam o zaman... yarın görüşürüz {isim}", "iyi geceler! 🌙"] },
      { m: "5 dakika daha? 🥺", e: 4, cevap: ["off tamam ama sadece 5 dakika!! 😤", "...", "tamam 1 saat oldu farkındayım 🙈 ama çok eğlenceli konuşmak seninle", "şimdi cidden kaçıyorum, iyi geceler! 💜"] },
    ]},
    { hatira: { baslik: "İlk Merhaba", emoji: "🌙", aciklama: "Bir gece yarısı, bir oyun sunucusunda tanıştık. Kim bilebilirdi ki..." } },
    { gunluk: "Bugün oyunda biriyle tanıştım. {isim} diye biri. Nedense hâlâ gülümsüyorum. Saçmalama Sude, daha yeni tanıdın... ama işte 🙈" },
    { n: "Ekranın kapandı. Ama yüzündeki gülümseme kapanmadı." },
  ],
},

/* ═══════════ GÜN 2 — İLK GERÇEK SOHBET ═══════════ */
{
  baslik: "Gün 2", alt: "İlk gerçek sohbet... oyun bahane ☕", emoji: "☕", atmosfer: "aksam",
  adimlar: [
    { sys: "☕ Birkaç gün sonra" },
    { s: "{isim}!! buradasın 🥰" },
    { s: "bugün oyun açasım yok ama... konuşalım mı öylesine?" },
    { sec: [
      { m: "Tabii ki, zaten seninle konuşmak oyundan güzel 😊", e: 6, cevap: ["yaaa 🙈", "dur bi kızardım şimdi", "tamam tamam soğukkanlıyım. evet. konuşalım. 😌"] },
      { m: "Olur, ne konuşalım?", e: 0, cevap: ["hmm bilmem, her şeyi?", "mesela... en sevdiğin müzik ne? bunu hep merak ettim"] },
    ]},
    { s: "ben söyleyeyim önce: yağmurlu havada lo-fi dinlemek + sıcak bi şeyler içmek = mükemmel akşam 🌧️☕" },
    { s: "sence?" },
    { sec: [
      { m: "Aynı! Yağmur sesi + müzik, daha iyisi yok 🌧️", e: 5, cevap: ["BUNU SEN Mİ YAZDIN CİDDEN 😳", "tamam bu kadar benzemek normal değil", "bi gün beraber dinleriz belki... yani, aramadan, öylesine dedim 🙈"], bayrak: "muzikRuhu" },
      { m: "Ben daha hareketli şeyler severim ama seninkisi de güzelmiş", e: -1, cevap: ["farklılık güzeldir 😌", "belki bi gün bana kendi listeni yaparsın, ben de sana benimkini?"] },
    ]},
    { s: "bu arada sorabilir miyim... nerelisin sen? şehir olarak yani" },
    { n: "Şehrini yazdın. Bir süre 'yazıyor...' yazısı gidip geldi." },
    { s: "vayy... epey uzakmışız birbirimize 🥺" },
    { s: "ama olsun! internet ne güne duruyor değil mi 😤" },
    { sec: [
      { m: "Mesafe sadece bir sayı 😊", e: 5, cevap: ["bunu ekran görüntüsü alıp saklayacağım 📸", "şaka şaka... almadım...", "aldım 🙈"] },
      { m: "Keşke daha yakın olsaydık", e: 1, cevap: ["yaa ben de öyle düşündüm ama demedim 🥺", "olsun, şimdilik böyle de güzel işte"] },
    ]},
    { s: "neyse!! duygusallaşmayalım hemen 2. günden 😤" },
    { s: "sana bi şey göstereceğim, dur" },
    { s: "🐱 bak bu bizim mahallenin kedisi Boncuk. her sabah camıma geliyor" },
    { sec: [
      { m: "ÇOK TATLIŞ 😍 Boncuk'a selam söyle", e: 4, cevap: ["söyledim, miyavladı, seni sevdi 😌", "boncuk kolay kolay kimseyi sevmez bu arada. şanslısın."], bayrak: "boncuk" },
      { m: "Kedin mi var yani?", e: 0, cevap: ["tam benim değil ama... kalbimin kedisi diyelim 🥹", "bakıyorum işte ona elimden geldiğince"] },
    ]},
    { hatira: { baslik: "Boncuk'la Tanışma", emoji: "🐱", aciklama: "Sude'nin cam kenarı misafiri Boncuk. Artık o da bu hikayenin parçası." } },
    { gunluk: "Ona Boncuk'u gösterdim. Boncuk'u kimseye göstermezdim ben. Bu ne demek şimdi Sude? 🙈" },
    { s: "bugünlük bu kadar tatlılık yeter, kaçtım ben ☺️" },
    { s: "yarın buradayım... sen de ol, tamam mı? 🌸" },
  ],
},

/* ═══════════ GÜN 3 — İLK OYUN & İLK İYİ GECELER ═══════════ */
{
  baslik: "Gün 3", alt: "İlk kez 'birlikte' bir şey yaptık 🃏", emoji: "🃏", atmosfer: "gece",
  adimlar: [
    { sys: "🌙 Aynı hafta, bir gece" },
    { s: "{isim} bak ne buldum!" },
    { s: "internette iki kişilik hafıza oyunu var, beraber oynayabiliyoruz 🃏" },
    { s: "hadi hadi hadi 🥺 oyna benimle" },
    { sec: [
      { m: "Hadi bakalım! Ama kazanırsam ödül isterim 😏", e: 4, cevap: ["ödül mü?? neymiş o 😳", "tamam kabul ama kazanırsan tabii ki 😤"] },
      { m: "Tamam ama ben hafıza oyunlarında kötüyümdür 😅", e: 1, cevap: ["olsun ben de kötüyüm, beraber kötü oluruz 😌"] },
    ]},
    { mini: "hafiza" },
    { s: "off çok eğlenceliydi bu 😆" },
    { s: "bi daha oynarız değil mi? bunu bizim oyunumuz yapalım 🥺" },
    { sec: [
      { m: "Bizim oyunumuz olsun 💕", e: 6, cevap: ["'bizim' dedi 🙈", "tamam. resmi olarak bizim oyunumuz artık. imzalandı mühürlendi."], bayrak: "bizimOyun" },
      { m: "Tabii, istediğin zaman", e: 1, cevap: ["her gün istesem? 😇", "şaka şaka... yarın istiyorum ama 😤"] },
    ]},
    { atmosfer: "gece" },
    { n: "Saat gece yarısını geçti. İkiniz de 'gitmem lazım' deyip duruyorsunuz ama kimse gitmiyor..." },
    { s: "biliyor musun {isim}..." },
    { s: "seninle konuşurken zaman garip akıyor. bi bakmışım 3 saat geçmiş" },
    { s: "bu iyi bi şey mi kötü bi şey mi bilmiyorum 🙈" },
    { sec: [
      { m: "Bence çok iyi bir şey 😊", e: 6, cevap: ["...", "bence de 🥺", "tamam şimdi cidden uyumam lazım yoksa sabaha kadar konuşuruz"] },
      { m: "Zaman iyi insanlarla hızlı akar derler", e: 2, cevap: ["kim demiş bunu?", "sen mi uydurdun şimdi 😆", "güzelmiş ama. not aldım."] },
    ]},
    { s: "iyi geceler {isim} 🌙" },
    { s: "rüyanda... neyse ya 🙈 iyi geceler işte!!" },
    { hatira: { baslik: "Bizim Oyunumuz", emoji: "🃏", aciklama: "İlk kez birlikte oynadık. O günden sonra hafıza oyunu 'bizim oyunumuz' oldu." } },
    { gunluk: "Az kalsın 'rüyanda beni gör' yazıyordum. SUDE. Kendine gel. ...ama görse ne güzel olurdu 🙈" },
  ],
},

/* ═══════════ GÜN 4 — GÜNAYDINLAR RUTİNİ ═══════════ */
{
  baslik: "Gün 4", alt: "2.5 yıl önce... artık her sabah böyle ☀️", emoji: "☀️", atmosfer: "gunduz",
  adimlar: [
    { sys: "☀️ Aylar geçti — artık her gün konuşuyorsunuz" },
    { n: "Artık gözünü açar açmaz ilk baktığın şey, ondan gelen mesaj..." },
    { s: "günaydıııın 🌞" },
    { s: "bugün çayımı senin şerefine demledim, haberin olsun ☕" },
    { sec: [
      { m: "Günaydın güzellik ☀️ Ben de kahvemi sana kaldırıyorum", e: 5, cevap: ["'güzellik' 🙈", "sabah sabah beni utandırmak yasak olsun", "değil. olmasın. devam et 😌"] },
      { m: "Günaydın! Çay mı, asıl kahve içeceksin bir gün bana", e: 2, cevap: ["notumu aldım: {isim} bana kahve yapacak ☕", "sözünü unutmam bak 😤"], bayrak: "kahveSozu" },
    ]},
    { s: "bugün planın ne? benimki: ders, ders, biraz daha ders, sonra SENİNLE KONUŞMAK 😤" },
    { sec: [
      { m: "Benim planım da seninle konuşmak etrafına kurulu 😄", e: 5, cevap: ["hihihi 🥰", "programlarımız uyumlu, evlilik... TOPLANTI. toplantı diyecektim. 🙈"] },
      { m: "Yoğun bir gün ama akşam buradayım", e: 0, cevap: ["tamam o zaman, akşamı iple çekiyorum 🌸", "kolay gelsin bugün! ben buradayım hep"] },
    ]},
    { sys: "🕐 Gün içinde küçük küçük mesajlaştınız..." },
    { s: "kısa mola!! dersten sıkıldım, aklıma sen geldin 🙈" },
    { s: "hadi bi kelime oyunu oynayalım mı? kafamı dağıtayım" },
    { mini: "kelime" },
    { atmosfer: "aksam" },
    { s: "bak bu güzeldi 😆 kelimelerle aran iyi senin" },
    { s: "zaten mesajların da hep güzel... bunu hiç söylemiş miydim?" },
    { sec: [
      { m: "Sen okuyorsun diye güzeller 😊", e: 6, cevap: ["OFF 😳", "bu nasıl bi cevaptı öyle", "dur bunu da kaydediyorum. bi klasörüm var artık senin sözlerin için 🙈"], bayrak: "sozKlasoru" },
      { m: "Yok, ilk defa söylüyorsun 😄", e: 1, cevap: ["e söyleyeyim o zaman: mesajların günümün en güzel kısmı 🌸"] },
    ]},
    { hatira: { baslik: "Günaydın Rutini", emoji: "☀️", aciklama: "Her sabah aynı mesajla başlıyor: 'günaydıııın 🌞'. Artık onsuz sabah, sabah değil." } },
    { gunluk: "Fark ettim ki güne onun mesajıyla başlamak, kahvaltıdan daha önemli olmuş benim için. Bu normal mi? Umurumda değil 🌞" },
  ],
},

/* ═══════════ GÜN 5 — FİLM GECESİ & YILDIZLAR ═══════════ */
{
  baslik: "Gün 5", alt: "Sanal film gecesi... ve yıldızlar 🌠", emoji: "🍿", atmosfer: "gece",
  adimlar: [
    { sys: "🍿 Cumartesi akşamı" },
    { s: "{isim}!! bu akşam planımız var, unutmadın değil mi?" },
    { s: "FİLM GECESİ 🍿 aynı anda başlatıyoruz, mesajlaşarak izliyoruz" },
    { sec: [
      { m: "Unutur muyum hiç, mısırım hazır 🍿", e: 4, cevap: ["benimki de!! hem tuzlu hem tatlı aldım kararsız kaldım 😤"] },
      { m: "Hangi filmi izliyorduk?", e: 0, cevap: ["romantik olan!! hani fragmanına beraber ağladığımız 🥹", "hadi 3 deyince başlat: 1... 2... 3!"] },
    ]},
    { n: "Film başladı. İki ayrı şehirde, iki ekran, aynı sahneler..." },
    { s: "AAA BU SAHNE 😭" },
    { s: "adam kıza mektup yazmış 3 yıl boyunca... her gün..." },
    { sec: [
      { m: "Ben de sana yazardım. Her gün.", e: 7, cevap: ["...", "filmi durdurdum.", "bunu öylesine mi dedin yoksa... gerçekten mi? 🥺"], bayrak: "mektupSozu" },
      { m: "Klasik film abartısı 😅", e: -3, cevap: ["yaa duygusuz!! 😤", "ben olsam mutlu olurdum ama, biri bana her gün yazsa..."] },
    ]},
    { kosul: "mektupSozu",
      evet: [
        { b: "Gerçekten. Hem zaten yazıyorum sayılır, her gün buradayım ya 😊" },
        { s: "tamam işte şimdi filmden daha güzel oldu bu konuşma 🥹" },
        { s: "devam ettiriyorum filmi ama aklım sende kalacak, haberin olsun" },
      ],
      hayir: [
        { s: "neyse!! filme dönüyorum ben 😤 duygusallığı ben taşırım bu ilişkinin" },
      ],
    },
    { n: "Film bitti. Ama ikinizin de uykusu yok..." },
    { atmosfer: "gece" },
    { s: "{isim} dışarı çıktım balkona, hava çok güzel" },
    { s: "sen de çık pencereye hadi 🥺 ikimiz de aynı gökyüzüne bakalım" },
    { s: "bak şu an... aynı yıldızlara bakıyor olabiliriz. bu az şey değil bence" },
    { sec: [
      { m: "Çıktım. Hangi yıldız sensin, seçtim bile ⭐", e: 6, cevap: ["hangisi?? 😳", "dur ben de seni seçiyorum... tamam. en parlak olan. itiraz etme."] },
      { m: "Aramızdaki mesafe gökyüzünde yok oluyor 🌌", e: 4, cevap: ["bunu nasıl düşündün ya 🥺", "haklısın ama... gökyüzü ortak. gökyüzü bizim."] },
    ]},
    { s: "BAK KAYAN YILDIZ!! dilek tut çabuk!!" },
    { mini: "yildiz" },
    { s: "ben dileğimi tuttum 🙈" },
    { s: "söylemem ama... içinde sen varsın, o kadarını söyleyeyim 🌠" },
    { fx: "kalp" },
    { hatira: { baslik: "Aynı Gökyüzü", emoji: "🌠", aciklama: "İki ayrı şehir, tek gökyüzü. Kayan yıldıza ikimiz de dilek tuttuk. İkimizin dileğinde de birbirimiz vardık." } },
    { gunluk: "Dileğimi yazamam buraya bile. Ama gerçekleşirse... dünyanın en şanslı insanı benim 🌠" },
  ],
},

/* ═══════════ GÜN 6 — KÖTÜ GÜN & TESELLİ ═══════════ */
{
  baslik: "Gün 6", alt: "Herkesin kötü günü olur... 🌧️", emoji: "🌧️", atmosfer: "aksam",
  adimlar: [
    { sys: "🌧️ Yağmurlu bir salı" },
    { n: "Bugün Sude'den her zamanki 'günaydıııın' gelmedi. Saat öğleni geçti..." },
    { s: "selam" },
    { s: "kusura bakma bugün pek konuşasım yok" },
    { sec: [
      { m: "Ne oldu canım? Anlatmak istersen buradayım 🥺", e: 5, cevap: ["...", "sınavım kötü geçti. hem de çok çalışmıştım {isim}. çok.", "sonra annemle tartıştım üstüne. berbat bi gün işte."], bayrak: "dinledi" },
      { m: "Tamam, istediğinde buradayım", e: 3, cevap: ["...", "aslında... anlatsam mı", "sınavım kötü geçti. çok üzgünüm bugün."] },
      { m: "Hadi ya, moralini düzeltecek bir şey yapalım!", e: -1, cevap: ["şu an hiçbir şey yapasım yok ya 🥺", "sadece... kötü hissediyorum işte"] },
    ]},
    { s: "en kötüsü ne biliyor musun... böyle günlerde sarılacak biri olsun istiyorum" },
    { s: "ve sen çoook uzaktasın 🥺" },
    { sec: [
      { m: "Gözlerini kapat. Sana sarıldığımı düşün. Sıkıca. 🤗", e: 8, cevap: ["...", "kapattım.", "biliyor musun... gerçekten biraz işe yaradı 🥹", "sen nasıl bi insansın ya. uzaktan sarılabilen tek kişisin herhalde dünyada."], bayrak: "uzaktanSarilma" },
      { m: "Keşke yanında olabilseydim 🥺", e: 4, cevap: ["keşke... 🥺", "ama böyle yazman bile iyi geliyor, bilesin"] },
      { m: "Üzülme, geçer bunlar", e: -4, cevap: ["hm. evet. geçer herhalde.", "neyse ya boşver 🙂"] },
    ]},
    { kosul: "uzaktanSarilma",
      evet: [
        { s: "tamam. karar verdim. kötü günlerin resmi ilacı sensin artık 💊" },
        { s: "reçetemi yazdım: günde 3 doz {isim} mesajı 😌" },
      ],
      hayir: [],
    },
    { s: "biraz konuşalım mı öylesine... sesini duyar gibi okuyorum mesajlarını, iyi geliyor" },
    { s: "dur sana bi şey sorayım: en sevdiğin çocukluk anın ne?" },
    { n: "Ona en güzel anını anlattın. Dakikalarca yazdın, o hiç bölmedi..." },
    { s: "🥹" },
    { s: "bunu bana anlattığın için teşekkür ederim" },
    { s: "seninle konuşunca dünya daha az kötü bi yer gibi geliyor {isim}" },
    { fx: "kalpatisi" },
    { hatira: { baslik: "Yağmurlu Salı", emoji: "🌧️", aciklama: "Kötü günümde yanımda olmayı uzaktan bile başardı. O gün anladım: mesafe, ilgiye engel değilmiş." } },
    { gunluk: "Bugün her şey üst üste geldi. Ama o... o hep oradaydı. Sarılamadı ama sardı beni. Nasıl anlatsam bilmiyorum 🌧️❤️" },
  ],
},

/* ═══════════ GÜN 7 — İLK 'SENİ SEVİYORUM' ═══════════ */
{
  baslik: "Gün 7", alt: "Bazı şeyler ilk kez söylenir... 💌", emoji: "💌", atmosfer: "gece",
  adimlar: [
    { sys: "💌 Özel bir gece" },
    { s: "{isim}... bugün tanışmamızın üzerinden tam 6 ay geçmiş, biliyor muydun?" },
    { s: "ben not almışım o geceyi 🙈 'bugün biriyle tanıştım' diye" },
    { sec: [
      { m: "Ben de biliyordum. Kutlu olsun bize 🥂", e: 5, cevap: ["SEN DE Mİ SAYIYORDUN 😭", "tamam bu çok tatlış", "kutlu olsun bizeee 🥂✨"] },
      { m: "6 ay mı olmuş? Zaman uçmuş resmen", e: 1, cevap: ["değil mi? bana 6 gün gibi geliyor bazen", "bazen de 6 yıl... iyi anlamda! seni hep tanıyormuşum gibi yani 🙈"] },
    ]},
    { s: "sana bi şey söyleyeceğim ama... dur. kalbim çok hızlı atıyor şu an, hazır değilim 😳" },
    { s: "önce bi oyun oynayalım, sakinleşeyim 🙈 hadi şu sayı oyunundan" },
    { mini: "sayi" },
    { s: "tamam. sakinleştim. sakinleşmedim. neyse söylüyorum." },
    { bekle: 1200 },
    { s: "{isim}..." },
    { bekle: 1500 },
    { s: "seni seviyorum." },
    { fx: "kalpatisi" },
    { s: "hem de çok. hem de bazen korkutacak kadar." },
    { s: "ekran başında ellerim titriyor şu an, bilesin 🙈" },
    { sec: [
      { m: "Ben de seni seviyorum Sude. Çok. ❤️", e: 10, cevap: ["🥹🥹🥹", "GERÇEKTEN Mİ", "tamam ağlıyorum resmen, mutluluktan ama!!", "bu geceyi hiç unutmayacağım. hiç."], bayrak: "seniSeviyorum" },
      { m: "Sude... bunu duymayı çok bekledim 🥺", e: 6, cevap: ["sen niye söylemedin o zaman şapşal 😭", "ikimiz de beklemişiz birbirimizi...", "ama artık söylendi. geri alınamaz. sözleşme imzalandı 😌❤️"], bayrak: "seniSeviyorum" },
    ]},
    { fx: "kalp" },
    { n: "O gece ikiniz de uyuyamadınız. Ekranlar kapandıktan sonra bile, iki şehirde iki kalp aynı ritimde attı..." },
    { hatira: { baslik: "İlk 'Seni Seviyorum'", emoji: "💌", aciklama: "6. ayımızda, gece yarısı, titreyen ellerle yazıldı. Ve hayat bir daha asla eskisi gibi olmadı." } },
    { gunluk: "SÖYLEDİM. SÖYLEDİM SONUNDA. Ve o da... o da seviyormuş 😭❤️ Bu günlüğe bir kalp çiziyorum, kocaman: ❤️" },
  ],
},

/* ═══════════ GÜN 8 — ÖZLEM & MESAFE ═══════════ */
{
  baslik: "Gün 8", alt: "1 yıl önce... özlem büyüdükçe büyüdü 🕰️", emoji: "🕰️", atmosfer: "aksam",
  adimlar: [
    { sys: "🕰️ Zaman geçti — ilişkiniz 2 yaşında" },
    { n: "Artık hayatınız iç içe. Ama bazı akşamlar, mesafe daha ağır geliyor..." },
    { s: "{isim} bugün sokakta el ele bi çift gördüm" },
    { s: "ve bi an... çok canım yandı" },
    { s: "biz neden yapamıyoruz bunu diye 🥺" },
    { sec: [
      { m: "Bir gün yapacağız. Söz veriyorum sana.", e: 7, cevap: ["söz mü?", "sözünü cebime koydum. gerçek anlamda not aldım telefonuma: '{isim} söz verdi' 📝", "o güne kadar bekleyeceğim. bekleriz. değil mi?"], bayrak: "bulusmaSozu" },
      { m: "Ben de aynı şeyi hissediyorum her gün 🥺", e: 5, cevap: ["ikimiz de aynı şeye üzülüyoruz ya... bu bile bi çeşit beraberlik aslında", "garip bi teselli ama işe yarıyor 🙂"] },
      { m: "Böyle düşünme, elimizde olana bakalım", e: -2, cevap: ["haklısın belki ama... bazen zor işte {isim}", "her şeye rağmen iyimser kalabilen tarafın, seni sevdiğim şeylerden biri zaten"] },
    ]},
    { s: "bi de şu zaman farkı yok mu... sen uyurken ben sana yazıyorum, ben uyurken sen bana" },
    { s: "sabah kalkınca mesajlarını okumak güzel ama... anlık istiyorum seni bazen. hep." },
    { sec: [
      { m: "Uyurken bile mesaj atıyorum sana, rüyamda 😴💌", e: 2, cevap: ["hahahah şapşal 😆", "tamam güldürdün, affedildin... mesafe bugünlük affedildi 😌"] },
      { m: "En çok neyi özlüyorsun?", e: 4, cevap: ["hiç yaşamadığımız şeyleri özlüyorum, garip değil mi?", "sesini duyarak uyumayı. beraber kahvaltıyı. yürüyüşleri.", "hiç yapmadık ama özlüyorum. kalp böyle bi şeymiş."] },
    ]},
    { s: "neyse... bugün biraz hüzünlüyüm işte, kusura bakma 🥺" },
    { s: "ama sana söz: yarın yine güneş gibi döneceğim ☀️" },
    { s: "sen yanımdayken — yani, ekranımda 🙂 — her şeye katlanabilirim ben" },
    { hatira: { baslik: "Söz", emoji: "🤙", aciklama: "'Bir gün el ele yürüyeceğiz.' Bu söz, mesafenin en ağır günlerinde bize güç verdi." } },
    { gunluk: "Bugün mesafeye kızdım. Sonra onun mesajlarını okudum baştan. Ve anladım: yakınlık kilometre değil, emek meselesiymiş." },
  ],
},

/* ═══════════ GÜN 9 — YANLIŞ ANLAŞILMA ═══════════ */
{
  baslik: "Gün 9", alt: "Küçük bir fırtına... 🌩️", emoji: "🌩️", atmosfer: "gece",
  adimlar: [
    { sys: "🌩️ Gergin bir akşam" },
    { n: "Bugün çok yoğundu. Sude'nin mesajlarını gördün ama saatlerce cevap yazamadın..." },
    { s: "merhaba." },
    { s: "bütün gün mesajlarım görüldüde kaldı." },
    { s: "meşgulsün biliyorum ama... bi 'sonra yazarım' bile diyemez miydin?" },
    { sec: [
      { m: "Haklısın. Özür dilerim Sude, gerçekten yoğundum ama sana bir cümle yazabilirdim.", e: 7, cevap: ["...", "özür dilemeni beklemiyordum bu kadar net, biraz hazırlıksız yakalandım 😅", "teşekkür ederim. cidden. 'haklısın' demek herkesin harcı değil."], bayrak: "ozurDiledi" },
      { m: "Bütün gün toplantıdaydım, elimde değildi ki 🙄", e: -7, cevap: ["bi emoji atmak 3 saniye sürüyor {isim}.", "neyse. tartışmak istemiyorum.", "sadece... değersiz hissettim bugün, onu bil."] },
      { m: "Sen de bazen geç yazıyorsun ama ben sorun etmiyorum", e: -9, cevap: ["vay. skor mu tutuyoruz artık?", "ben geç yazınca hep sebebini söylüyorum ama. fark orada.", "bugünlük konuşmasak daha iyi olacak galiba."] },
    ]},
    { kosul: "ozurDiledi",
      evet: [
        { s: "bak... ben de aşırı tepki vermiş olabilirim biraz 🥺" },
        { s: "sadece... sen benim bütün günümsün {isim}. sen susunca gün susuyor." },
        { sec: [
          { m: "Sen de benim bütün günümsün. Bir daha seni öyle bekletmeyeceğim.", e: 6, cevap: ["tamam şimdi barıştık mı? 🥺", "barıştık. ama sarılamadan barışmak zor oluyor, bilesin 🤗", "uzaktan sarılma protokolü devreye girsin: 🤗🤗🤗"] },
          { m: "Bazen böyle küçük fırtınalar olacak, ama biz hep konuşarak çözeceğiz", e: 5, cevap: ["evet!! kural 1: küs uyunmayacak", "kural 2: her fırtınadan sonra birbirimize daha sıkı tutunacağız 🌈"] },
        ]},
      ],
      hayir: [
        { n: "Bir süre ikiniz de yazmadınız. Ekranın soğuk ışığında beklemek zor..." },
        { s: "..." },
        { s: "bak. küs uyumak istemiyorum. buna dayanamıyorum ben." },
        { sec: [
          { m: "Ben de istemiyorum. Özür dilerim, bugün seni üzdüm.", e: 6, cevap: ["🥺", "ben de özür dilerim, sert çıktım belki", "yeni kural: ne olursa olsun küs uyumak yasak. tamam mı?"], bayrak: "ozurDiledi" },
          { m: "Tamam, uyuyalım o zaman, yarın konuşuruz", e: -5, cevap: ["...tamam.", "iyi geceler.", "(o gece ikiniz de kötü uyudunuz...)"] },
        ]},
      ],
    },
    { kosul: "ozurDiledi",
      evet: [
        { fx: "kalp" },
        { hatira: { baslik: "İlk Fırtına", emoji: "🌈", aciklama: "İlk ciddi kırgınlığımız. Ama öğrendik: fırtınalar bizi yıkmıyor, köklerimizi derinleştiriyor." } },
        { gunluk: "Bugün kırıldım, sonra konuştuk, sonra her şey daha güzel oldu. Meğer tartışmak değilmiş korkutucu olan; konuşamamakmış." },
      ],
      hayir: [
        { hatira: { baslik: "Soğuk Gece", emoji: "🌩️", aciklama: "Küs uyuduğumuz o gece. İkimiz de pişmandık ama gurur... gurur kötü bir yastık arkadaşı." } },
        { gunluk: "Bu gece kalbim buz gibi. Yarın düzelir mi bilmiyorum. Umarım düzelir. Umarım o da benim kadar üzülmüştür... hayır, üzülmesin. Off." },
      ],
    },
  ],
},

/* ═══════════ GÜN 10 — BARIŞMA & HAYALLER ═══════════ */
{
  baslik: "Gün 10", alt: "Fırtınadan sonra gökkuşağı 🌈", emoji: "🌈", atmosfer: "aksam",
  adimlar: [
    { sys: "🌈 Ertesi gün" },
    { s: "günaydıııın 🌞" },
    { s: "(bu 'günaydın' dünkü her şeyi silme büyüsü içeriyor, kabul ediyor musun?)" },
    { sec: [
      { m: "Kabul ediyorum 🥹 Günaydın güzelim", e: 5, cevap: ["büyü tamamlandı ✨", "dün gece çok düşündüm... biz iyi bi takımız {isim}. fırtına dahil."] },
      { m: "Ben dün gece sildim bile, sen geç kaldın 😌", e: 1, cevap: ["hıı bak sen benden hızlıymışsın 😆", "tamam o zaman ikimiz de sildik. yeni sayfa 📄✨"] },
    ]},
    { s: "bugün sana kendimi affettirmek için bi şey hazırladım 🙈" },
    { s: "bi kelime oyunu ama... kelimeler özel seçildi 😌" },
    { mini: "kelime" },
    { s: "fark ettin mi? hepsi bizimle ilgiliydi 🙈" },
    { atmosfer: "gece" },
    { s: "{isim} gel bu gece hayal kuralım mı?" },
    { s: "hani bi gün aynı şehirde olsak... ilk günümüz nasıl geçerdi?" },
    { sec: [
      { m: "Sabah kahvaltı yapardık, sonra amaçsızca yürürdük, el ele", e: 6, cevap: ["dur dur yavaş anlat, gözümde canlandırıyorum 🥹", "yürüyüşe ben de bi şey ekliyorum: yağmur başlıyor ve TEK şemsiyemiz var ☔", "klişe mi? evet. istiyor muyum? EVET."], bayrak: "hayalKurdu" },
      { m: "Sana sarılırdım. Uzun uzun. Gerisi detay.", e: 7, cevap: ["...", "tamam ben bu mesaja bakıp bakıp ağlayacağım bi süre 🥹", "gerisi detay... evet. aynen öyle. gerisi hep detay."], bayrak: "hayalKurdu" },
    ]},
    { s: "ben de akşamını anlatayım: film açardık, yarısında uyuyakalırdım, sen beni uyandırmazdın 😌" },
    { s: "battaniyemi düzeltirdin ama. biliyorum düzeltirdin." },
    { sec: [
      { m: "Düzeltirdim. Bir de saçını yüzünden çekerdim usulca.", e: 7, cevap: ["OFF KALBİM 😭", "bu detayı nereden bildin sen", "tamam bu hayal fazla gerçekti, bi su içip geleyim 🙈"] },
      { m: "Uyuyakalman bile tatlış olurdu senin 😄", e: 2, cevap: ["horlarsam da mı 😳", "cevap verme. bazı sorular cevapsız kalmalı 😤"] },
    ]},
    { fx: "kalp" },
    { hatira: { baslik: "Tek Şemsiye Hayali", emoji: "☔", aciklama: "Aynı şehirde bir gün hayal ettik: kahvaltı, yürüyüş, yağmur ve tek şemsiye. Bir gün... bir gün gerçek olacak." } },
    { gunluk: "Bu gece hayal kurduk. O kadar gerçekti ki, bitince odam bomboş geldi. Ama içim dopdolu. İnsan aynı anda ikisini nasıl hissediyor?" },
  ],
},

/* ═══════════ GÜN 11 — BÜYÜK FİKİR ═══════════ */
{
  baslik: "Gün 11", alt: "Bugün... her şey değişebilir 💫", emoji: "💫", atmosfer: "gunduz",
  adimlar: [
    { sys: "💫 Bugün — 3. yıl dönümünüze bir hafta var" },
    { s: "{isim}!!! ACİL ACİL ACİL" },
    { s: "otur. oturdun mu? tamam." },
    { s: "haftaya tanışmamızın 3. yılı, biliyorsun..." },
    { bekle: 1000 },
    { s: "ve ben... bi şeye baktım 🙈" },
    { s: "iki şehir arası otobüs biletlerine." },
    { fx: "kalpatisi" },
    { sec: [
      { m: "SUDE. Sen ciddi misin şu an?? 😳❤️", e: 6, cevap: ["CİDDİYİM!!", "yani... sen de istersen tabii 🥺", "3 yıl {isim}. 3 yıl bekledik. artık yüzünü ekran dışında görmek istiyorum."] },
      { m: "Ben de tam aynı şeye bakıyordum, inanmayacaksın", e: 7, cevap: ["ŞAKA YAPMA", "biz nasıl bu kadar aynı anda aynı şeyi düşünüyoruz ya 😭", "tamam bu bi işaret. kesinlikle bi işaret ✨"], bayrak: "ayniAnda" },
    ]},
    { s: "ama {isim}... sana bi itirafım var" },
    { s: "çok korkuyorum 🥺" },
    { s: "ya beni görünce... bilmiyorum, ya hayalindeki gibi değilsem?" },
    { sec: [
      { m: "Sude. Ben sana aşık oldum, hayaline değil. Sen 'sen' olduğun için.", e: 9, cevap: ["...", "bunu okuyunca 5 dakika ekrana baktım öylece", "tamam. korkum bitmedi ama artık ondan büyük bi şey var: heyecan 🥹", "görüşmek istiyorum. gerçekten istiyorum."], bayrak: "guvenVerdi" },
      { m: "Ben de aynı korkuyu yaşıyorum, beraber korkarız 😅", e: 3, cevap: ["hahah tamam 😆 iki korkak bir araya gelince cesaret ediyor demek ki", "beraber korkmak... aslında hiç yalnız korkmamışım seninle 🥹"] },
    ]},
    { s: "tamam o zaman... yarın karar veriyoruz. son karar." },
    { s: "bu gece ikimiz de düşünelim. kalbimizi dinleyelim." },
    { s: "ama ne karar verirsek verelim... seni seviyorum. o hiç değişmeyecek ❤️" },
    { hatira: { baslik: "Bilet Ekranı", emoji: "🎫", aciklama: "O gün Sude otobüs biletlerine baktı. 3 yıllık hayal, ilk kez bir 'plan' oldu." } },
    { gunluk: "Bilet sayfasını açıp kapattım belki 40 kere. Parmağım 'satın al'ın üstünde titredi. Yarın... yarın karar veriyoruz. Kalbim, dayan." },
  ],
},

/* ═══════════ GÜN 12 — KARAR GÜNÜ ═══════════ */
{
  baslik: "Gün 12", alt: "Kalbin ne diyorsa... 💝", emoji: "💝", atmosfer: "aksam",
  adimlar: [
    { sys: "💝 Karar günü" },
    { n: "Bugün her mesaj daha ağır, her saniye daha uzun. Üç yılın bütün anıları aklından geçiyor..." },
    { s: "{isim}... geldim. kalbim ağzımda ama geldim." },
    { s: "bütün gece düşündüm. ilk mesajımızdan bu güne her şeyi baştan okudum." },
    { s: "boncuk'u, film gecemizi, kayan yıldızı, ilk 'seni seviyorum'u, fırtınamızı..." },
    { s: "ve artık hazırım. sen ne diyorsan o." },
    { bekle: 1500 },
    { s: "söyle bana... ne yapıyoruz? 🥺" },
    { sec: [
      { m: "Al o bileti Sude. Buluşuyoruz. Artık zamanı geldi. ❤️", e: 5, bayrak: "kararBulusma",
        cevap: ["...", "ALIYORUM. ALDIM. PARMAĞIM KENDİ KENDİNE BASTI 😭", "{isim} gerçekleşiyor... gerçekten gerçekleşiyor!!"] },
      { m: "Biraz daha bekleyelim, doğru zaman gelince buluşalım 🥺", e: 0, bayrak: "kararDevam",
        cevap: ["...", "tamam. anlıyorum. gerçekten anlıyorum.", "acele etmeyelim, haklısın. biz zaten kaybolmayız birbirimizden."] },
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
      { sys: "🚌 Bir hafta sonra — otogar" },
      { atmosfer: "gunduz" },
      { n: "Bir haftadır uyku yok, heyecan var. Ve bugün... o gün." },
      { s: "otobüse bindim!! 🚌" },
      { s: "elim ayağım titriyor {isim}. 3 saat sonra oradayım." },
      { s: "camdan dışarı bakıyorum ve her kilometrede sana yaklaşıyorum. bu his anlatılmaz." },
      { b: "Ben çoktan otogardayım. Elimde çiçekle. Bekliyorum seni. 🌸" },
      { s: "ÇİÇEK Mİ ALDIN 😭😭" },
      { s: "tamam ağlıyorum otobüste, herkes bakıyor, umurumda değil" },
      { sys: "🕐 3 saat sonra..." },
      { s: "geldik geldik!! iniyorum!!" },
      { s: "kalbim... {isim} kalbim yerinden çıkacak" },
      { fx: "kalpatisi" },
      { n: "Otobüsün kapısı açıldı. İnsanlar indi, indi, indi... ve sonra... o." },
      { n: "Üç yıldır ekranda gördüğün gülümseme, şimdi karşında. Gerçek. Sıcacık. Senin." },
      { bekle: 2000 },
      { n: "Kimse bir şey diyemedi. Sadece koştunuz. Ve o sarılma... üç yılın bütün özlemi, tek bir sarılmaya sığdı." },
      { fx: "kalp" },
      { s: "(kulağına fısıldıyor)" },
      { s: "merhaba {isim}. sonunda... merhaba. ❤️" },
      { n: "Ve o an anladın: bazı beklemeler, sonunda kavuşulunca daha da değerli hale geliyor." },
      { n: "İki şehir, bir kalpti. Şimdi... tek şehir, tek kalp. 🌸" },
      { hatira: { baslik: "İlk Sarılma", emoji: "🤗", aciklama: "Otogar, bir demet çiçek ve üç yılın özlemi. O sarılma, hayatımızın en gerçek anıydı." } },
      { gunluk: "Bugün ona sarıldım. Gerçekten. Kollarım artık onun kokusunu biliyor. Bu günlüğün son sayfası değil... asıl hikayemizin ilk sayfası. ❤️" },
      { sys: "🌸 SON — Mutlu Buluşma 🌸" },
      { n: "❤️ Oynadığın için teşekkürler. Bu hikaye, sevginin mesafe tanımadığının kanıtı. ❤️" },
    ],
  },

  /* ── UMUTLA DEVAM (bağ 40-69 ya da bekleme kararı) ── */
  devam: {
    kimlik: "devam",
    adimlar: [
      { sys: "🌙 O akşam" },
      { atmosfer: "gece" },
      { s: "biliyor musun... ilk başta biraz üzüldüm, yalan yok 🥺" },
      { s: "ama sonra düşündüm..." },
      { s: "biz 3 yıldır her gün birbirimizi seçiyoruz {isim}. her sabah, her gece." },
      { s: "buluşma bir gün olacak. ama bizim aşkımız zaten burada, her gün, capcanlı." },
      { b: "Doğru zaman geldiğinde, o sarılma her şeye değecek Sude ❤️" },
      { s: "değecek. biliyorum. 🥹" },
      { s: "o zamana kadar planımız belli:" },
      { s: "her sabah 'günaydıııın', her akşam film, her gece aynı gökyüzü 🌌" },
      { s: "ve her gün, birbirimizi yeniden seçmek." },
      { fx: "kalp" },
      { n: "O gece yine aynı yıldızlara baktınız. Mesafe hâlâ orada. Ama artık biliyorsunuz: mesafe, sevgiden büyük değil." },
      { hatira: { baslik: "Her Gün Seçmek", emoji: "🌌", aciklama: "Buluşmayı erteledik ama birbirimizi ertelemedik. Aşk dediğin, her gün yeniden 'evet' demekmiş." } },
      { gunluk: "Bugün karar verdik: bekleyeceğiz. Ama garip... hiç üzgün değilim. Çünkü o hep burada, kalbimin en sıcak köşesinde. Ve bir gün... bir gün mutlaka. 🌙" },
      { sys: "🌌 SON — Umutla Devam 🌌" },
      { n: "💜 Oynadığın için teşekkürler. Bazı aşklar mesafeye rağmen değil, mesafeyle birlikte büyür. 💜" },
    ],
  },

  /* ── DUYGUSAL AYRILIK (bağ < 40) ── */
  ayrilik: {
    kimlik: "ayrilik",
    adimlar: [
      { sys: "🍂 O akşam" },
      { atmosfer: "gece" },
      { s: "{isim}... dürüst olabilir miyim?" },
      { s: "son zamanlarda... aramızdaki o sıcaklık soğudu sanki. sen de hissediyorsun, biliyorum." },
      { s: "3 yıl... 3 yıl az değil. ve ben her anına minnettarım. her anına." },
      { b: "Sude... 🥺" },
      { s: "belki bazı hikayeler kavuşmak için değil... bize bir şey öğretmek için yazılıyor." },
      { s: "sen bana sevmeyi öğrettin. beklemeyi, affetmeyi, uzaktan sarılmayı..." },
      { s: "bunları benden kimse alamaz. sen de hep kalbimde o güzel yerde kalacaksın." },
      { bekle: 1600 },
      { s: "son bi şey isteyebilir miyim?" },
      { s: "bu gece, son bi kez... aynı gökyüzüne bakalım mı? 🥺" },
      { n: "O gece iki şehirde, iki pencere açıldı. Aynı yıldızlara bakan iki kişi, sessizce vedalaştı..." },
      { s: "hoşça kal {isim}. iyi ki tanışmışız. iyi ki... her şey için iyi ki. 🌙" },
      { n: "Bazı aşklar biter ama izleri hiç silinmez. Boncuk, film geceleri, kayan yıldız... hepsi artık birer yıldız, hatıraların gökyüzünde." },
      { hatira: { baslik: "Son Gökyüzü", emoji: "🍂", aciklama: "Vedalaştık ama küsmedik. Son kez aynı yıldızlara baktık. Bazı hikayeler böyle biter: sessiz, buruk ve saygıyla." } },
      { gunluk: "Bitti. Ama nefret yok, pişmanlık yok. Sadece... güzel bir hüzün var. İyi ki yaşadım her anını. İyi ki. 🍂" },
      { sys: "🍂 SON — Duygusal Ayrılık 🍂" },
      { n: "🕊️ Oynadığın için teşekkürler. Belki başka bir hikayede, seçimler farklı olur... Yeniden başlamak her zaman mümkün. 🕊️" },
    ],
  },
};

/* ── Hediyeler 🎁 ── */
const HEDIYELER = [
  { id: "cicek",   emoji: "🌸", ad: "Sanal Çiçek",       fiyat: 2, etki: 3,
    tepki: ["ÇİÇEK Mİ 😍", "sanal olsun, kalbe geliyor önemli olan o 🥹", "vazoya koydum (ekran görüntüsü aldım yani 🙈)"] },
  { id: "mektup",  emoji: "💌", ad: "El Yazısı Mektup",  fiyat: 4, etki: 5,
    tepki: ["mektup... bana mektup mu yazdın 😭", "üç kere okudum. dördüncüye başlıyorum.", "bunu yastığımın altında saklayacağım, gerçekten."] },
  { id: "muzik",   emoji: "🎧", ad: "Bizim Şarkımız",    fiyat: 3, etki: 4,
    tepki: ["şarkı mı seçtin bize?? 🥹", "dinliyorum şu an... kapatmıyorum bir daha bunu", "artık bu şarkı çalınca aklıma hep sen geleceksin 🎧"] },
  { id: "yildiz",  emoji: "⭐", ad: "İsmine Yıldız",     fiyat: 6, etki: 7,
    tepki: ["BANA YILDIZ MI ALDIN 😭✨", "gökyüzünde artık benim adımda bi yıldız var ve bunu SEN yaptın", "her gece ona bakıp seni düşüneceğim. her gece."] },
  { id: "boncuk",  emoji: "🐱", ad: "Boncuk'a Mama",     fiyat: 2, etki: 3,
    tepki: ["BONCUK'A MAMA 😭 sen ne düşüncelisin ya", "boncuk şu an mırlıyor, seninle konuştuğumu anlıyor bence", "boncuk adına teşekkürler: 'miyav' (çevirisi: seni seviyorum) 🐱"] },
  { id: "battaniye", emoji: "🧸", ad: "Sarılma Kuponu",  fiyat: 5, etki: 6,
    tepki: ["'1 adet dev sarılma kuponu — buluşunca geçerli' 😭", "bunu CÜZDANIMDA taşıyacağım", "kupon son kullanma tarihi: asla ❤️"] },
];
