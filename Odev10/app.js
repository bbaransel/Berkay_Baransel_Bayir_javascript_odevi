// Ödev - 10) 1 - Aşağıdaki sipariş bilgilerini object içerisinde saklayınız.
// 2 - Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: % 18)
// 3 - Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

siparis1 = {
    siparisID: 101,
    siparisDate: "31.12.2022",
    paymentMethod: "kredi kartı",
    cargoAdress: "Yahya kaptan mah. Kocaeli İzmit",
    products: [
        product1 = {
            productID: 5,
            productHeader: "IPhone 13 Pro",
            productUrl: "http://abc.com/iphone-13-pro",
            productPrice: 22000
        },
        product2 = {
            productID: 6,
            productHeader: "IPhone 13 Pro Max",
            productUrl: "http://abc.com/iphone-13-pro-max",
            productPrice: 25000
        }
    ],
    customer: {
        customerID: 12
    },
    seller: {
        companyID: 34,
        companyName: "Apple Türkiye"
    }
};

siparis2 = {
    siparisID: 102,
    siparisDate: "30.12.2022",
    paymentMethod: "kredi kartı",
    cargoAdress: "Yahya kaptan mah. Kocaeli İzmit",
    products: [
        product1 = {
            productID: 6,
            productHeader: "IPhone 13 Pro Max",
            productUrl: "http://abc.com/iphone-13-pro-max",
            productPrice: 25000
        }
    ],
    customer: {
        customerID: 12
    },
    seller: {
        companyID: 34,
        companyName: "Apple Türkiye"
    }
};

function getPrice(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].productPrice;
    };
    return sum + (sum * 0.18);
};
console.log(siparis1);
console.log(getPrice(siparis1.products) + '₺');
console.log(siparis2);
console.log(getPrice(siparis2.products) + '₺');
console.log('Genel Toplam "' + (getPrice(siparis1.products) + getPrice(siparis2.products)) + '₺"dir.');