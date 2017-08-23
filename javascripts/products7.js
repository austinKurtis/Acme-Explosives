"use strict";

//*********************
//   Product 7 Loader
//*********************
let product7Array = [];
let product7Object = {};
    
function fillProd7Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product7Array.push(data[item]);
    });

}

product7Object.getProd7Array = () => {

    return product7Array;
};

product7Object.loadProd7Array = () => {
    let val = 7;
    return new Promise(function(resolve, reject) {
        var prod7Loader = new XMLHttpRequest();
        prod7Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod7Loader.send();
        prod7Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd7Array(data);
            resolve(product7Array);
        });
    });
};

product7Object.getProd7Array = () => {
    return product7Array;
};

module.exports = product7Object;

