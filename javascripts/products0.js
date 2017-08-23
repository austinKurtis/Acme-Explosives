"use strict";

//*********************
//   Product 0 Loader
//*********************
let product0Array = [];
let product0Object = {};
    
function fillProd0Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product0Array.push(data[item]);
    });

}

product0Object.getProd0Array = () => {

    return product0Array;
};

product0Object.loadProd0Array = () => {
    let val = 0;
    return new Promise(function(resolve, reject) {
        var prod0Loader = new XMLHttpRequest();
        prod0Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod0Loader.send();
        prod0Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd0Array(data);
            resolve(product0Array);
        });
    });
};

product0Object.getProd0Array = () => {
    return product0Array;
};

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

module.exports = product0Object;
