const isPrime = (num) => {
    for (let i = 2; i <= Math.floor(num / 2); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

const getPrime = (number) => {
    let primeArray = [];
    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) primeArray.push(i);
    }
    console.log(primeArray);
}
getPrime(prompt("lütfen bir sayı giriniz."));