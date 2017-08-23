"use strict";
//*********************
//   Types 2 Loader
//*********************
let types2Array = [];
let types2Object = {};

function fillType2Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        types2Array.push(data[item]);
    });

}

types2Object.getType2Array = () => {

    return types2Array;
};

types2Object.loadType2Array = () => {
    let val = 2;
    return new Promise(function(resolve, reject) {
        var type2Loader = new XMLHttpRequest();
        type2Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/types.json?orderBy="category"&equalTo=${val}`);
        type2Loader.send();
        type2Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillType2Array(data);
            resolve(types2Array);
        });
    });
};

types2Object.getType2Array = () => {
    return types2Array;
};

module.exports = types2Object;
