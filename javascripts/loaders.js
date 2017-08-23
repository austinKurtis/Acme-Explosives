"use strict";

//*********************
//   Category Loader
//*********************
let categoryArray = [];
let categoryObject = {};

function fillCatArray(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        categoryArray.push(data[item]);
    });

}

categoryObject.getCatArray = () => {

    return categoryArray;
};

categoryObject.loadCatArray = () => {
    return new Promise(function(resolve, reject) {
        var catLoader = new XMLHttpRequest();
        catLoader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/categories.json`);
        catLoader.send();
        catLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillCatArray(data);
            resolve(categoryArray);
        });
    });
};

categoryObject.getCatArray = () => {
    return categoryArray;
};

module.exports = categoryObject;
