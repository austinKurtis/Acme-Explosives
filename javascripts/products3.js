"use strict";

//*********************
//   Product 3 Loader
//*********************
let product3Array = [];
let product3Object = {};
    
function fillProd3Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product3Array.push(data[item]);
    });

}

product3Object.getProd3Array = () => {

    return product3Array;
};

product3Object.loadProd3Array = () => {
    let val = 3;
    return new Promise(function(resolve, reject) {
        var prod3Loader = new XMLHttpRequest();
        prod3Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod3Loader.send();
        prod3Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd3Array(data);
            resolve(product3Array);
        });
    });
};

product3Object.getProd3Array = () => {
    return product3Array;
};

module.exports = product3Object;
