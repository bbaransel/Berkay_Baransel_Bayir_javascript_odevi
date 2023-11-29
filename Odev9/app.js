// 1 - "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz
let fruits = ["Elma", "Armut", "Muz", "Çilek"];
// 2 - Dizi kaç elemanlıdır ?
console.log('dizi ' + fruits.length + ' elemanlıdır.');

// 3 - Dizinin ilk ve son elemanı nedir ?
console.log(fruits[fruits.length - 1]);
console.log(fruits[0]);

// 4 - Elma dizinin bir elemanımıdır ?
if (fruits.includes("Elma")) console.log("Evet, Elma bu dizinin bir elemanıdır.");

// 5 - Kiraz meyvesini listenin sonuna ekleyiniz.

fruits.push("Kiraz");
console.log(fruits);

// 6 - Dizinin son 2 elemanını siliniz.
fruits.splice(fruits.length - 2, 2);
// 2. yol
// fruits.pop();
// fruits.pop();
console.log(fruits);

// 7 - Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
Öğrenci 1: Kemal Devrimdar 2010 (70,60,80)
Öğrenci 2: Saliha Temel 2012 (80,80,90)
Öğrenci 3: Defne Küp 2009 (60,60,70)
*/
ogrenci1 = {
    firstName: "Kemal",
    secondName: "Devrimdar",
    birthYear: 2010,
    exams: [70, 60, 90]
}
ogrenci2 = {
    firstName: "Saliha",
    secondName: "Temel",
    birthYear: 2012,
    exams: [80, 80, 90]
}
ogrenci3 = {
    firstName: "Defne",
    secondName: "Küp",
    birthYear: 2009,
    exams: [60, 60, 70]
}
function getAge(age) {
    currentDate = new Date()
    result = currentDate.getFullYear() - age;
    console.log(result);
}
getAge(ogrenci1.birthYear);
getAge(ogrenci2.birthYear);
getAge(ogrenci3.birthYear);

function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum / array.length);
}
getAverage(ogrenci1.exams);
getAverage(ogrenci2.exams);
getAverage(ogrenci3.exams);