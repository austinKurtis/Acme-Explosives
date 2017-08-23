"use strict";

//*********************
//   Product 5 Loader
//*********************
let product5Array = [];
let product5Object = {};
    
function fillProd5Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product5Array.push(data[item]);
    });

}

product5Object.getProd5Array = () => {

    return product5Array;
};

product5Object.loadProd5Array = () => {
    let val = 5;
    return new Promise(function(resolve, reject) {
        var prod5Loader = new XMLHttpRequest();
        prod5Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod5Loader.send();
        prod5Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd5Array(data);
            resolve(product5Array);
        });
    });
};

product5Object.getProd5Array = () => {
    return product5Array;
};
module.exports = product5Object;
