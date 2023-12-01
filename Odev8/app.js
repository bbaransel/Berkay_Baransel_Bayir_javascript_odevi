let url = "https://www.wissenakademie.com&quot";
let dersAdi = "Fullstack Web Developer Eğitimi";
console.log(`url içerisinde "${url.split('').length}" adet karakter vardır.`);
console.log(`Ders adı "${dersAdi.split(' ').length}" adet kelimeden oluşmaktadır.`);

// -url https ile başlıyor mu ?

// Önce kendim döngü kurarak denedim.

// let https = "https"
// let counter = 0;
// let urlArray = url.split('');
// let httpsArray = https.split('');
// let num = httpsArray.length;
// for (let i = 0; i < num; i++) {
//     if (urlArray[i] == httpsArray[i]) {
//         counter++;
//     };
// };
// if (counter = https.split("").length) {
//     console.log("Evet");
// } else {
//     console.log("Hayır");
// };

if (url.startsWith("https")) {
    console.log("Evet 'https' ile başlıyor")
} else {
    console.log("Hayır 'https' ile başlamıyor.")
}



// Ders adı içinde "Eğitimi kelimesi geçiyor mu"
if (dersAdi.split(' ').includes("Eğitimi")) console.log(`Ders adı içinde "Eğitimi" kelimesi geçmektedir.`);

//  -url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
// https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi
let urlArray = url.split('');
urlArray.splice(urlArray.indexOf('&'), 5);
urlArray.push("/");
let newUrl = urlArray.join("");
dersAdiArray = dersAdi.toLowerCase().split(" ");
dersAdiArray[dersAdiArray.indexOf("developer")] = "gelistirme"
dersAdiArray[dersAdiArray.indexOf("eğitimi")] = "egitimi"
let newDersAdi = dersAdiArray.join("-");
console.log(newUrl + newDersAdi);
