function leapYear(inputYear) {
    if (inputYear % 400 == 0) {
        console.log(`"${inputYear}" bir artık yıldır.`);
    } else if (inputYear % 4 == 0 && inputYear % 100 != 0) {
        console.log(`"${inputYear}" bir artık yıldır.`);
    } else {
        console.log(`"${inputYear}" artık yıl değildir.`);
    }
}
leapYear(prompt("Lütfen bir yıl değeri giriniz."));