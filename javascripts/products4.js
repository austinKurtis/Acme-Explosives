"use strict";

//*********************
//   Product 4 Loader
//*********************
let product4Array = [];
let product4Object = {};
    
function fillProd4Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product4Array.push(data[item]);
    });

}

product4Object.getProd4Array = () => {

    return product4Array;
};

product4Object.loadProd4Array = () => {
    let val = 4;
    return new Promise(function(resolve, reject) {
        var prod4Loader = new XMLHttpRequest();
        prod4Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod4Loader.send();
        prod4Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd4Array(data);
            resolve(product4Array);
        });
    });
};

product4Object.getProd4Array = () => {
    return product4Array;
};
module.exports = product4Object;
