"use strict";


//*********************
//   Product 2 Loader
//*********************
let product2Array = [];
let product2Object = {};
    
function fillProd2Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product2Array.push(data[item]);
    });

}

product2Object.getProd2Array = () => {

    return product2Array;
};

product2Object.loadProd2Array = () => {
    let val = 2;
    return new Promise(function(resolve, reject) {
        var prod2Loader = new XMLHttpRequest();
        prod2Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod2Loader.send();
        prod2Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd2Array(data);
            resolve(product2Array);
        });
    });
};

product2Object.getProd2Array = () => {
    return product2Array;
};

module.exports = product2Object;
