"use strict";
//*********************
//   Types 0 Loader
//*********************
let types0Array = [];
let types0Object = {};

function fillType0Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        types0Array.push(data[item]);
    });

}

types0Object.getType0Array = () => {

    return types0Array;
};

types0Object.loadType0Array = () => {
    let val = 0;
    return new Promise(function(resolve, reject) {
        var type0Loader = new XMLHttpRequest();
        type0Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/types.json?orderBy="category"&equalTo=${val}`);
        type0Loader.send();
        type0Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillType0Array(data);
            resolve(types0Array);
        });
    });
};

types0Object.getType0Array = () => {
    return types0Array;
};

module.exports = types0Object;
