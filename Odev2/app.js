let number = prompt("Lütfen 100den büyük bir sayı giriniz.");
let loop = true;
while (loop) {
    if (number >= 100 || number == "") {
        console.log(number);
        loop = false;
    } else {
        number = prompt("Lütfen 100den büyük bir sayı giriniz.");
    }
};
