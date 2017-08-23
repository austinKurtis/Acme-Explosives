"use strict";
console.log("Main.js");

let Handlebars = require('hbsfy/runtime'),
	loadersAquire = require('./loaders.js'),
	type0Aquire = require('./type0Loader.js'),
	type1Aquire = require('./type1Loader.js'),
	type2Aquire = require('./type2Loader.js'),
	prod0Aquire = require('./products0.js'),
    prod1Aquire = require('./products1.js'),
    prod2Aquire = require('./products2.js'),
    prod3Aquire = require('./products3.js'),
    prod4Aquire = require('./products4.js'),
    prod5Aquire = require('./products5.js'),
    prod6Aquire = require('./products6.js'),
    prod7Aquire = require('./products7.js'),
    prod8Aquire = require('./products8.js'),
	catTemplate = require('../templates/category-grid.hbs'),
	prodTemplate = require('../templates/product-grid.hbs'),
	typeTemplate = require('../templates/type-grid.hbs');


//*********************
//   Category To Page
//*********************
function catToPage(stuff) {
        $("#navDrops").append(catTemplate(stuff));

    }
    // Attraction Promise
    loadersAquire.loadCatArray()

    .then(

        (loadCatResolve) => {
        	console.log("CatLoad", loadCatResolve);
            catToPage(loadCatResolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });	

//*********************
//   Type 0 to Page
//*********************
$(document).one("click", ".nextmenu--0", function() {

function type0ToPage(stuff) {
        $("#button--0").append(`<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">` + typeTemplate(stuff) + `</ul>`);

    }
    // Attraction Promise
    type0Aquire.loadType0Array()

    .then(

        (loadType0Resolve) => {
        	console.log("loadType0Resolve", loadType0Resolve);
            type0ToPage(loadType0Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });	
});

// //*********************
// //   Type 1 to Page
// //*********************
$(document).one("click", ".nextmenu--1", function() {

function type1ToPage(stuff) {
        $("#button--1").append(`<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">` + typeTemplate(stuff) + `</ul>`);

    }
    // Attraction Promise
    type1Aquire.loadType1Array()

    .then(

        (loadType1Resolve) => {
        	console.log("loadType1Resolve", loadType1Resolve);
            type1ToPage(loadType1Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });	
});

// //*********************
// //   Type 3 to Page
// //*********************
$(document).one("click", ".nextmenu--3", function() {

function type2ToPage(stuff) {
        $("#button--3").append(`<ul class="dropdown-menu" aria-labelledby="dropdownMenu1">` + typeTemplate(stuff) + `</ul>`);

    }
    // Attraction Promise
    type2Aquire.loadType2Array()

    .then(

        (loadType2Resolve) => {
        	console.log("loadType2Resolve", loadType2Resolve);
            type2ToPage(loadType2Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        });	
});

function prodToPage(stuff) {
        // $("#productOnPage").removeChild();
        $("#productOnPage").append(prodTemplate(stuff));
    }

// //*********************
// //   Products 0 to Page
// //*********************

 $(document).one("click", ".prod--1", function() {

    // Attraction Promise
    prod0Aquire.loadProd0Array()

    .then(

        (loadProd0Resolve) => {
            prodToPage(loadProd0Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});



//*********************
//   Products 1 to Page
//*********************

$(document).one("click", ".prod--2", function() {

    // Attraction Promise
    prod1Aquire.loadProd1Array()

    .then(

        (loadProd1Resolve) => {
            prodToPage(loadProd1Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});

// //*********************
// //   Products 2 to Page
// //*********************

 $(document).one("click", ".prod--3", function() {


    // Attraction Promise
    prod2Aquire.loadProd2Array()

    .then(

        (loadProd2Resolve) => {
            prodToPage(loadProd2Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});

// //*********************
// //   Products 3 to Page
// //*********************

 $(document).one("click", ".prod--4", function() {

    // Attraction Promise
    prod3Aquire.loadProd3Array()

    .then(

        (loadProd3Resolve) => {
            prodToPage(loadProd3Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});

// //*********************
// //   Products 4 to Page
// //*********************

 $(document).one("click", ".prod--5", function() {


    // Attraction Promise
    prod4Aquire.loadProd4Array()

    .then(

        (loadProd4Resolve) => {
            prodToPage(loadProd4Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});

// //*********************
// //   Products 5 to Page
// //*********************

 $(document).one("click", ".prod--6", function() {


    // Attraction Promise
    prod5Aquire.loadProd5Array()

    .then(

        (loadProd5Resolve) => {
            prodToPage(loadProd5Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});

// //*********************
// //   Products 6 to Page
// //*********************

 $(document).one("click", ".prod--7", function() {


    // Attraction Promise
    prod6Aquire.loadProd6Array()

    .then(

        (loadProd6Resolve) => {
            prodToPage(loadProd6Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});

// //*********************
// //   Products 7 to Page
// //*********************

 $(document).one("click", ".prod--8", function() {


    // Attraction Promise
    prod7Aquire.loadProd7Array()

    .then(

        (loadProd7Resolve) => {
            prodToPage(loadProd7Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});

// //*********************
// //   Products 8 to Page
// //*********************

 $(document).one("click", ".prod--9", function() {


    // Attraction Promise
    prod8Aquire.loadProd8Array()

    .then(

        (loadProd8Resolve) => {
            prodToPage(loadProd8Resolve);
        },
        (reject) => {
            console.log("Something went wrong");
        }); 
});

