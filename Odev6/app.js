// switch (tarayici) {
//     case 'Edge':
//         alert("Edge browser kullanıyorsun");
//         break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Tamam bunları destekliyoruz.');
//         break;

//     default:
//         alert('Umarım sayfanız güzel görünüyordur');
// }


tarayici = "Firefox" // Sonucu denemek için yazdım.


if (tarayici == "Edge") {
    alert('Edge browser kullanıyorsun');
} else if (tarayici == "Chrome" || tarayici == "Firefox" || tarayici == "Safari" || tarayici == "Opera") {
    alert('Tamam bunları destekliyoruz.');
} else {
    alert('Umarım sayfanız güzel görünüyordur');
};