"use strict";

//*********************
//   Product 8 Loader
//*********************
let product8Array = [];
let product8Object = {};
    
function fillProd8Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product8Array.push(data[item]);
    });

}

product8Object.getProd8Array = () => {

    return product8Array;
};

product8Object.loadProd8Array = () => {
    let val = 8;
    return new Promise(function(resolve, reject) {
        var prod8Loader = new XMLHttpRequest();
        prod8Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod8Loader.send();
        prod8Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd8Array(data);
            resolve(product8Array);
        });
    });
};

product8Object.getProd8Array = () => {
    return product8Array;
};
module.exports = product8Object;