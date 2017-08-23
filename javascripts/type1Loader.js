"use strict";
//*********************
//   Types 1 Loader
//*********************
let types1Array = [];
let types1Object = {};

function fillType1Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        types1Array.push(data[item]);
    });

}

types1Object.getType1Array = () => {

    return types1Array;
};

types1Object.loadType1Array = () => {
    let val = 1;
    return new Promise(function(resolve, reject) {
        var type1Loader = new XMLHttpRequest();
        type1Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/types.json?orderBy="category"&equalTo=${val}`);
        type1Loader.send();
        type1Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillType1Array(data);
            resolve(types1Array);
        });
    });
};

types1Object.getType1Array = () => {
    return types1Array;
};

module.exports = types1Object;
