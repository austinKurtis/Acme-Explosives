"use strict";

//*********************
//   Product 6 Loader
//*********************
let product6Array = [];
let product6Object = {};
    
function fillProd6Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product6Array.push(data[item]);
    });

}

product6Object.getProd6Array = () => {

    return product6Array;
};

product6Object.loadProd6Array = () => {
    let val = 6;
    return new Promise(function(resolve, reject) {
        var prod6Loader = new XMLHttpRequest();
        prod6Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod6Loader.send();
        prod6Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd6Array(data);
            resolve(product6Array);
        });
    });
};

product6Object.getProd6Array = () => {
    return product6Array;
};

module.exports = product6Object;
