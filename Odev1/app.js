"use strict"
let second = prompt("Lütfen saniye cinsinden bir değer giriniz.");
let minute = parseInt(second / 60);
let second2 = second % 60;
alert(`${minute} dakika ${second2} saniye `);