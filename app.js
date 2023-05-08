document.body.style.overflow = 'hidden';
let link = document.querySelectorAll("a"),
Xidmetler1 = document.querySelector("#Xidmetler1");
Xidmetler2 = document.querySelector("#Xidmetler2");
Mesajsss = document.querySelector("#Mesajsss");
     title = document.querySelector(".title");
     Haqqimizda = document.querySelector("#Haqqimizda");
     Haqqimizda1 = document.querySelector("#Haqqimizda1");
     Haqqimizda2 = document.querySelector("#Haqqimizda2");
     Videolar = document.querySelector("#Videolar");
     Xidmetler = document.querySelector("#Xidmetler");
     Karyeras = document.querySelector("#Karyeras");
     Karyera2 = document.querySelector("#Karyera2");
     Elaqe = document.querySelector("#Elaqe");
     Elaqe1 = document.querySelector("#Elaqe1");
     Elaqe2 = document.querySelector("#Elaqe2");
     TehsilKaryera = document.querySelector("#TehsilKaryera");
     Onfuture1 = document.querySelector("#Onfuture1");
     Onfuture2 = document.querySelector("#Onfuture2");
     BizimleElaqe = document.querySelector("#BizimleElaqe");
     Bizkimik = document.querySelector("#Bizkimik");
     Onfuturesizin1 = document.querySelector("#Onfuturesizin1");
     Onfuturesizin2 = document.querySelector("#Onfuturesizin2");
     Missiyamiz = document.querySelector("#Missiyamiz");
     Missiya1= document.querySelector("#Missiya1");
     Missiya2= document.querySelector("#Missiya2");
     Hedefimiz = document.querySelector("#Hedefimiz");
     Hedef1 = document.querySelector("#Hedef1");
     Hedef2 = document.querySelector("#Hedef2");
     Polsadatehsil = document.querySelector("#Polsadatehsil");
     Polsadateqaud = document.querySelector("#Polsadateqaud");
     MicrosoftdaAze = document.querySelector("#MicrosoftdaAze");
     Polsadatehsil1 = document.querySelector("#Polsadatehsil1");
     Tehsilveturistlik = document.querySelector("#Tehsilveturistlik");
     Polsadaoturum = document.querySelector("#Polsadaoturum");
     Yasamyeri = document.querySelector("#Yasamyeri");
     Istapilmasi= document.querySelector("#Istapilmasi");
     Avropabiznes = document.querySelector("#Avropabiznes");
     UniPaket = document.querySelector("#UniPaket");
     istenilen = document.querySelector("#istenilen");
     istenilen1 = document.querySelector("#istenilen1");
     istenilen2 = document.querySelector("#istenilen2");
     bir = document.querySelector("#bir");
     iki = document.querySelector("#iki");
     uc = document.querySelector("#uc");
     uniyeqebul = document.querySelector("#uniyeqebul");
     uniyeqebul1 = document.querySelector("#uniyeqebul1");
     uniyeqebul2 = document.querySelector("#uniyeqebul2");
     Onfutureozel = document.querySelector("#Onfutureozel");
     Polsadayerl = document.querySelector("#Polsadayerl");
     Polsadayerl1 = document.querySelector("#Polsadayerl1");
     Vizadestek = document.querySelector("#Vizadestek");
     Vizayamuraciet = document.querySelector("#Vizayamuraciet");
     Vizayayer = document.querySelector("#Vizayayer");
     Biletbronu = document.querySelector("#Biletbronu");
     Yasayisyeri = document.querySelector("#Yasayisyeri");
     Birillik = document.querySelector("#Birillik");
     Polsadstehsilinustunlukleri = document.querySelector("#Polsadstehsilinustunlukleri");
     Euro800 = document.querySelector("#Euro800");
     Muxtelifteqaudler = document.querySelector("#Muxtelifteqaudler");
     Cemi2 = document.querySelector("#Cemi2");
     Digeravropa = document.querySelector("#Digeravropa");
     Telebelereheftelik = document.querySelector("#Telebelereheftelik");
     Munasibyasam = document.querySelector("#Munasibyasam");
     GenisErasmus = document.querySelector("#GenisErasmus");
     Kanadave = document.querySelector("#Kanadave");
     Elaqeformu = document.querySelector("#Elaqeformu");
     Ad = document.querySelector("#Ad");
     Soyad = document.querySelector("#Soyad");
     epoct = document.querySelector("#epoct");
     Mesaj = document.querySelector("#Mesaj");
     Suallar = document.querySelector("#Suallar");
     Unvan = document.querySelector("#Unvan");
     Afbusiness = document.querySelector("#Afbusiness");
     Telefon = document.querySelector("#Telefon");
     epoctunvan = document.querySelector("#epoctunvan");
     Suret = document.querySelector("#Suret");
     Bizimle = document.querySelector("#Bizimle");
     Unvanxerite = document.querySelector("#Unvanxerite");

link.forEach(el=>{
    el.addEventListener("click", ()=>{
        

         let attr = el.getAttribute("language")
         Xidmetler2.textContent = data[attr].Xidmetler2
         Unvan.textContent = data[attr].Unvan
         Afbusiness.textContent = data[attr].Afbusiness
         Telefon.textContent = data[attr].Telefon
         epoctunvan.textContent = data[attr].epoctunvan
         Suret.textContent = data[attr].Suret
         Bizimle.textContent = data[attr].Bizimle
         Unvanxerite.textContent = data[attr].Unvanxerite
         Mesajsss.textContent = data[attr].Mesajsss
         title.textContent = data[attr].Ev
         Haqqimizda.textContent = data[attr].Haqqimizda
         Haqqimizda1.textContent = data[attr].Haqqimizda1
         Haqqimizda2.textContent = data[attr].Haqqimizda2
         Videolar.textContent = data[attr].Videolar
         Xidmetler.textContent = data[attr].Xidmetler
         Xidmetler1.textContent = data[attr].Xidmetler1
         Karyeras.textContent = data[attr].Karyeras
         Karyera2.textContent = data[attr].Karyera2
         Elaqe.textContent = data[attr].Elaqe
         Elaqe1.textContent = data[attr].Elaqe1
         Elaqe2.textContent = data[attr].Elaqe2
         TehsilKaryera.textContent = data[attr].TehsilKaryera
         Onfuture1.textContent = data[attr].Onfuture1
         Onfuture2.textContent = data[attr].Onfuture2
         BizimleElaqe.textContent = data[attr].BizimleElaqe
         Bizkimik.textContent = data[attr].Bizkimik
         Onfuturesizin1.textContent = data[attr].Onfuturesizin1
         Onfuturesizin2.textContent = data[attr].Onfuturesizin2
         Missiyamiz.textContent = data[attr].Missiyamiz
         Missiya1.textContent = data[attr].Missiya1
         Missiya2.textContent = data[attr].Missiya2
         Hedefimiz.textContent = data[attr].Hedefimiz
         Hedef1.textContent = data[attr].Hedef1
         Hedef2.textContent = data[attr].Hedef2
         Polsadatehsil.textContent = data[attr].Polsadatehsil
         Polsadateqaud.textContent = data[attr].Polsadateqaud
         MicrosoftdaAze.textContent = data[attr].MicrosoftdaAze
         Polsadatehsil1.textContent = data[attr].Polsadatehsil1
         Tehsilveturistlik.textContent = data[attr].Tehsilveturistlik
         Polsadaoturum.textContent = data[attr].Polsadaoturum
         Yasamyeri.textContent = data[attr].Yasamyeri
         Istapilmasi.textContent = data[attr].Istapilmasi
         Avropabiznes.textContent = data[attr].Avropabiznes
         UniPaket.textContent = data[attr].UniPaket
         istenilen.textContent = data[attr].istenilen
         istenilen1.textContent = data[attr].istenilen1
         istenilen2.textContent = data[attr].istenilen2
         bir.textContent = data[attr].bir
         iki.textContent = data[attr].iki
         uc.textContent = data[attr].uc
         uniyeqebul.textContent = data[attr].uniyeqebul
         uniyeqebul1.textContent = data[attr].uniyeqebul1
         uniyeqebul2.textContent = data[attr].uniyeqebul2
         Onfutureozel.textContent = data[attr].Onfutureozel
         Polsadayerl.textContent = data[attr].Polsadayerl
         Polsadayerl1.textContent = data[attr].Polsadayerl1
         Vizadestek.textContent = data[attr].Vizadestek
         Vizayamuraciet.textContent = data[attr].Vizayamuraciet
         Vizayayer.textContent = data[attr].Vizayayer
         Biletbronu.textContent = data[attr].Biletbronu
         Yasayisyeri.textContent = data[attr].Yasayisyeri
         Birillik.textContent = data[attr].Birillik
         Polsadstehsilinustunlukleri.textContent = data[attr].Polsadstehsilinustunlukleri
         Euro800.textContent = data[attr].Euro800
         Muxtelifteqaudler.textContent = data[attr].Muxtelifteqaudler
         Cemi2.textContent = data[attr].Cemi2
         Digeravropa.textContent = data[attr].Digeravropa
         Telebelereheftelik.textContent = data[attr].Telebelereheftelik
         Munasibyasam.textContent = data[attr].Munasibyasam
         GenisErasmus.textContent = data[attr].GenisErasmus
         Kanadave.textContent = data[attr].Kanadave
         Elaqeformu.textContent = data[attr].Elaqeformu
         Ad.textContent = data[attr].Ad
         Soyad.textContent = data[attr].Soyad
         epoct.textContent = data[attr].epoct
         Mesaj.textContent = data[attr].Mesaj
         Suallar.textContent = data[attr].Suallar
         
    })
})

let data = {
    azerbaijan: {
         Ev: "Ev",
         "Haqqimizda" :"Haqqımızda",
         "Haqqimizda1" :"Haqqımızda",
         "Haqqimizda2" :"Haqqımızda",
         "Videolar":"Videolar",
         "Xidmetler":"Xidmətlər",
         "Xidmetler1":"Xidmətlər",
         "Xidmetler2":"Xidmətlər",
         "Karyeras":"Karyera",
         "Karyera2":"Karyera",
         "Elaqe":"Əlaqə",
         "Elaqe1":"Əlaqə",
         "Elaqe2":"Əlaqə",
         "TehsilKaryera":"Təhsil və Karyera",
         "Onfuture1":"Onfuture sizin xaricdə təhsil və",
         "Onfuture2":"karyera yolunuzda ən yaxın dostunuzdur.",
         "BizimleElaqe":"Bizimlə Əlaqə",
         "Bizkimik":"Biz Kimik?",
         "Onfuturesizin1":"sizin xaricdə təhsil və karyera yolunuzda ",
         "Onfuturesizin2":"ən yaxın dostunuzdur.",
         "Missiyamiz":"Missiyamız",
         "Missiya1":"Missiyamız sizlərə düzgün təhsil və karyera yolu seçməkdə və",
         "Missiya2":"bu yolda irəliləməkdə dəstək olmaqdır",
         "Hedefimiz":"Hədəfimiz",
         "Hedef1":"Hədəfimiz bizə güvənən tələbələrlə birlikdə daha da",
         "Hedef2":"böyümək və qloballaşmaqdır.",
         "Polsadatehsil":"Polşada təhsil və karyera",
         "Polsadateqaud":"Polşada tam təqaüdlü təhsil",
         "MicrosoftdaAze":"Microsoftda işləyən Azərbaycanlı",
         "Polsadatehsil1":"Polşada Təhsil",
         "Tehsilveturistlik":"Təhsil və Turistik viza alınması",
         "Polsadaoturum":"Polşada Oturum Dəstəyi",
         "Yasamyeri":"Yaşam Yeri ilə təmin olunma",
         "Istapilmasi":"İş tapılmasında dəstək",
         "Avropabiznes":"Avropada Biznes Konsultasiyası",
         "UniPaket":"Universitet Paketləri",
         "istenilen" : " - istənilən",
         "istenilen1" : " - istənilən",
         "istenilen2" : " - istənilən",
         "bir":"bir",
         "iki":"iki",
         "uc":"üç",
         "uniyeqebul" :"universitetə qəbul prosesi",
         "uniyeqebul1" :"universitetə qəbul prosesi",
         "uniyeqebul2" :"universitetə qəbul prosesi",
         "Onfutureozel": "OnFuture Özəl Paketlər",
         "Polsadayerl": "- Polşada yerləşən universitetlərin birinə qəbul və viza dəstəyi",
         "Polsadayerl1": "- Polşada yerləşən universitetlərin birinə qəbul və viza dəstəyi + Polşada yaşayış yeri ilə təmin olunma",
         "Vizadestek": "Viza Dəstəyi",
         "Vizayamuraciet": "Vizaya Müraciət formu",
         "Vizayayer": "Vizaya yer götürülməsi",
         "Biletbronu": "Bilet Bronu",
         "Yasayisyeri": "Yaşayış yerindən sənəd",
         "Birillik": "Bir illik Polşa sığortası",
         "Polsadstehsilinustunlukleri": "Polşada təhsilin üstünlükləri",
         "Euro800": "800 Eurodan Başlayan Təhsil Haqqı",
         "Muxtelifteqaudler": "Müxtəlif Təqaüdlər",
         "Cemi2": "Cəmi 2 Həftəyə Viza",
         "Digeravropa": "Digər Avropa Ölkələrində Yaşama İmkanı",
         "Telebelereheftelik": "Tələbələrə Həftəlik 40 saat İşləmə İcazəsi",
         "Munasibyasam": "Münasib Yaşam Xərcləri",
         "GenisErasmus": "Geniş Erasmus İmkanları",
         "Kanadave": "Kanada və Amerikaya Rahat Köçmək İmkanı",
         "Elaqeformu": "Əlaqə Formu",
         "Ad": "Ad",
         "Soyad": "Soyad",
         "epoct": "E-poçt",
         "Mesaj": "Mesajınız:",
         "Suallar": "Suallarınızı yaza bilərsiz",
         "Mesajsss": "Mesaj göndər",
         "Unvan": "Ünvan",
         "Afbusiness": "Af Business House Nizami 203, Baku, Azerbaijan (5ci mərtəbə)",
         "Telefon": "Telefon",
         "epoctunvan": "E-poçt ünvanı",
         "Suret": "Sürətli Keçidlər",
         "Bizimle": "Bizimlə qalın",
         "Unvanxerite": "Ünvanımız xəritədə"
    },
    english: {
         Ev: "Home",
         "Haqqimizda": "About Us",
         "Haqqimizda1": "About Us",
         "Haqqimizda2": "About Us",
         "Videolar":"Videos",
         "Xidmetler":"Services",
         "Xidmetler1":"Services",
         "Xidmetler2":"Services",
         "Karyeras":"Career",
         "Karyera2":"Career",
         "Elaqe":"Contact",
         "Elaqe1":"Contact",
         "Elaqe2":"Contact",
         "TehsilKaryera":"Education and Career",
         "Onfuture1":"Onfuture is your best friend on",
         "Onfuture2":"your study and career path abroad.",
         "BizimleElaqe":"Contact Us",
         "Bizkimik":"Who are we?",
         "Onfuturesizin1":"is your best friend on your study and",
         "Onfuturesizin2":"career path  abroad.",
         "Missiyamiz":"Our Mission",
         "Missiya1":"Our mission is to support you in choosing the right education ",
         "Missiya2":"and career path and moving forward.",
         "Hedefimiz":"Our Target",
         "Hedef1":"Our goal is to grow and globalize together with",
         "Hedef2":"the students who trust us.",
         "Polsadatehsil":"Education and career in Poland",
         "Polsadateqaud":"Fully funded study in Poland",
         "MicrosoftdaAze":"Azerbaijani working at Microsoft",
         "Polsadatehsil1":"Study in Poland",
         "Tehsilveturistlik":"Study and Tourist visa acquisition",
         "Polsadaoturum":"Session Support in Poland",
         "Yasamyeri":"Provision of Housing",
         "Istapilmasi":"Support in finding a job",
         "Avropabiznes":"Business Consulting in Europe",
         "UniPaket":"University Packages",
         "istenilen" : " - Admission process for any",
         "istenilen1" : " - Admission process for any",
         "istenilen2" : " - Admission process for any",
         "bir":"one",
         "iki":"two",
         "uc":"three",
         "uniyeqebul" :"universities",
         "uniyeqebul1" :"universities",
         "uniyeqebul2" :"universities",
         "Onfutureozel": "OnFuture Special Packages",
         "Polsadayerl": "- Admission and visa support to one of the universities located in Poland",
         "Polsadayerl1": "- Admission to one of the universities located in Poland and visa support + accommodation in Poland",
         "Vizadestek": "Visa Support",
         "Vizayamuraciet": "Visa Application form",
         "Vizayayer": "Applying for a visa",
         "Biletbronu": "Ticket Reservation",
         "Yasayisyeri": "Document of residence",
         "Birillik": "One year Polish insurance",
         "Polsadstehsilinustunlukleri": "Advantages of studying in Poland",
         "Euro800": "Tuition fees starting at 800 Euros",
         "Muxtelifteqaudler": "Various Scholarships",
         "Cemi2": "Visa for only 2 weeks",
         "Digeravropa": "Opportunity to Live in Other European Countries",
         "Telebelereheftelik": "Work Permit for Students 40 hours per week",
         "Munasibyasam": "Reasonable Cost of Living",
         "GenisErasmus": "Extensive Erasmus Opportunities",
         "Kanadave": "Easy Immigration to Canada and America",
         "Elaqeformu": "Contact Form",
         "Ad": "Name",
         "Soyad": "Surname",
         "epoct": "Email",
         "Mesaj": "Your message:",
         "Suallar": "You can write your questions",
         "Mesajsss": "Send message",
         "Unvan": "Address",
         "Afbusiness": "Af Business House Nizami 203, Baku, Azerbaijan (5th floor)",
         "Telefon": "Phone",
         "epoctunvan": "Email address",
         "Suret": "Quick Links",
         "Bizimle": "Stay with us",
         "Unvanxerite": "Our address on the map"
     
    }
}
