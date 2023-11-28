// Sayı bulma oyunu
// 1 ile 100 arasında üretilen random sayıyı bulmak için 10 hakkınız var
// 100 üzerinden değerlendirilen bu oyunda her yanlış cevabınızda 10 puanınız gidecek.
const findNumber = () => {
    let status = true;
    let attempts = 9;
    let points = 100;
    let randomNumber = Math.ceil(Math.random() * 100);
    console.log(randomNumber); // Doğru cevabın kontrolünü yapabilmek için ufak bir hile
    while (status) {
        givenNumber = prompt(`1 ile 100 arasında(100 dahil) bir sayı tuttum.Lütfen tahmininizi giriniz.100 üzerinden değerlendirilen bu oyunda her yanlış cevabınızda 10 puanınız gidecek. Unutmayın ${attempts + 1} Hakkınız var!`);
        if (givenNumber == randomNumber) {
            alert(`Tebrikler!!!
            Tuttuğum sayı: ${randomNumber}
            Puanınız ${points}`);
            status = false;
        } else if (attempts == 0) {
            alert('Üzgünüm hakkınız bitti :(');
            break;
        } else {
            if (givenNumber < randomNumber) {
                alert(`Tüh, yanlış cevap. Daha büyük bir sayı dene. ${attempts} adet hakkınız ve '${points}' puanınız kaldı.`);
            } else {
                alert(`Tüh, yanlış cevap. Daha küçük bir sayı dene. ${attempts} adet hakkınız ve '${points}' puanınız kaldı.`);
            }
            attempts--;
            points -= 10;
        };
    };
};
findNumber();