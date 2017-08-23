"use strict";

//*********************
//   Product 1 Loader
//*********************
let product1Array = [];
let product1Object = {};
    
function fillProd1Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product1Array.push(data[item]);
    });

}

product1Object.getProd1Array = () => {

    return product1Array;
};

product1Object.loadProd1Array = () => {
    let val = 1;
    return new Promise(function(resolve, reject) {
        var prod1Loader = new XMLHttpRequest();
        prod1Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod1Loader.send();
        prod1Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd1Array(data);
            resolve(product1Array);
        });
    });
};

product1Object.getProd1Array = () => {
    return product1Array;
};

module.exports = product1Object;
