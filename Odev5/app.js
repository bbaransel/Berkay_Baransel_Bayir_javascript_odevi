// Sayı bulma oyunu
// 1 ile 10 arasında üretilen random sayıyı bulmak için 3 hakkınız var 
// givenNumber = prompt(`Lütfen 1 ile 10 arasında(10 dahil) bir sayı giriniz. Unutmayın 3 Hakkınız var!`)
const findNumber = () => {
    let status = true;
    let attempts = 2;
    let randomNumber = Math.ceil(Math.random() * 10);
    // for (let i = 0; i < 3; i++) {
    //     givenNumber = prompt(`Lütfen 1 ile 10 arasında(10 dahil) bir sayı giriniz. Unutmayın ${attempts} Hakkınız var!`)
    //     if(givenNumber == randomNumber){
    //         console.log(`Tebrikler!!! Tuttuğum sayı: ${randomNumber} `)
    //     }else{
    //         clg
    //     }
    // }
    console.log(randomNumber)
    while (status) {
        givenNumber = prompt(`Lütfen 1 ile 10 arasında(10 dahil) bir sayı giriniz. Unutmayın ${attempts} Hakkınız var!`)

        if (givenNumber == randomNumber && attempts != 0) {
            console.log(`Tebrikler!!! Tuttuğum sayı: ${randomNumber} `);
            status = false;
        } else if (attempts == 0) {
            console.log('Üzgünüm hakkınız bitti :(');
            status = false;
        } else {
            console.log(`Yanlış cevap ${attempts} adet hakkınız kaldı.`);
            attempts--;
        };
    };
};
findNumber();
// let randomNumber = Math.ceil((Math.random() * 10));
// console.log(randomNumber)