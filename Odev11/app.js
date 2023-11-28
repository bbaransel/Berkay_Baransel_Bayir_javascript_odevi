// Ödev - 11)
// 1 - sayilar listesindeki her bir elemanın karesini yazdırınız.
// 2 - sayilar listesindeki hangi sayılar 5' in katıdır?
// 3 - sayilar listesindeki çift sayıların toplamını bulunuz.

let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

function square(array) {
    let squareArray = []
    array.forEach((nextNumber, i) => {
        squareArray.push(nextNumber * nextNumber)
    });
    console.log(squareArray);
}
console.log(sayilar);
square(sayilar);

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];
console.log(urunler);
let urunlerUpper = []
for (let i = 0; i < urunler.length; i++) {
    urunlerUpper.push(urunler[i].toUpperCase());
}
console.log(urunlerUpper);

// 5 - urunler listesinde samsung geçen kaç ürün vardır ?
let counter = 0;
for (let i = 0; i < urunler.length; i++) {
    if (urunler[i].includes("samsung")) counter++;
};
console.log(`Ürünler listesinde samsung geçen "${counter}" adet ürün vardır.`)


// 6 - ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.

let ogrenciler = [
    { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] },
    { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
    { "ad": "çınar", "soyad": "turan", "notlar": [10, 20, 60] }
];

function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum / array.length;
};
console.log(`Birinci öğrencinin ortalaması:  ${getAverage(ogrenciler[0].notlar)}`);
console.log(`İkinci öğrencinin ortalaması:  ${getAverage(ogrenciler[1].notlar)}`);
console.log(`Üçüncü öğrencinin ortalaması:  ${getAverage(ogrenciler[2].notlar)}`);

// 7 - tüm öğrencilerin not ortalaması kaçtır ?
console.log(`Genel sınıf ortalaması ${(getAverage(ogrenciler[0].notlar) + getAverage(ogrenciler[1].notlar) + getAverage(ogrenciler[2].notlar)) / 3}`);
