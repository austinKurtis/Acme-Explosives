(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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


},{"../templates/category-grid.hbs":35,"../templates/product-grid.hbs":36,"../templates/type-grid.hbs":37,"./loaders.js":1,"./products0.js":3,"./products1.js":4,"./products2.js":5,"./products3.js":6,"./products4.js":7,"./products5.js":8,"./products6.js":9,"./products7.js":10,"./products8.js":11,"./type0Loader.js":12,"./type1Loader.js":13,"./type2Loader.js":14,"hbsfy/runtime":34}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";


//*********************
//   Product 2 Loader
//*********************
let product2Array = [];
let product2Object = {};
    
function fillProd2Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product2Array.push(data[item]);
    });

}

product2Object.getProd2Array = () => {

    return product2Array;
};

product2Object.loadProd2Array = () => {
    let val = 2;
    return new Promise(function(resolve, reject) {
        var prod2Loader = new XMLHttpRequest();
        prod2Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod2Loader.send();
        prod2Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd2Array(data);
            resolve(product2Array);
        });
    });
};

product2Object.getProd2Array = () => {
    return product2Array;
};

module.exports = product2Object;

},{}],6:[function(require,module,exports){
"use strict";

//*********************
//   Product 3 Loader
//*********************
let product3Array = [];
let product3Object = {};
    
function fillProd3Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product3Array.push(data[item]);
    });

}

product3Object.getProd3Array = () => {

    return product3Array;
};

product3Object.loadProd3Array = () => {
    let val = 3;
    return new Promise(function(resolve, reject) {
        var prod3Loader = new XMLHttpRequest();
        prod3Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod3Loader.send();
        prod3Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd3Array(data);
            resolve(product3Array);
        });
    });
};

product3Object.getProd3Array = () => {
    return product3Array;
};

module.exports = product3Object;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
"use strict";

//*********************
//   Product 6 Loader
//*********************
let product6Array = [];
let product6Object = {};
    
function fillProd6Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product6Array.push(data[item]);
    });

}

product6Object.getProd6Array = () => {

    return product6Array;
};

product6Object.loadProd6Array = () => {
    let val = 6;
    return new Promise(function(resolve, reject) {
        var prod6Loader = new XMLHttpRequest();
        prod6Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod6Loader.send();
        prod6Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd6Array(data);
            resolve(product6Array);
        });
    });
};

product6Object.getProd6Array = () => {
    return product6Array;
};

module.exports = product6Object;

},{}],10:[function(require,module,exports){
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


},{}],11:[function(require,module,exports){
"use strict";

//*********************
//   Product 8 Loader
//*********************
let product8Array = [];
let product8Object = {};
    
function fillProd8Array(data) {
    let keys = Object.keys(data);
    keys.forEach((item) => {
        data[item].firebaseID = item;
        product8Array.push(data[item]);
    });

}

product8Object.getProd8Array = () => {

    return product8Array;
};

product8Object.loadProd8Array = () => {
    let val = 8;
    return new Promise(function(resolve, reject) {
        var prod8Loader = new XMLHttpRequest();
        prod8Loader.open("GET", `https://acmeexplosives-c8a1a.firebaseio.com/products.json?orderBy="type"&equalTo=${val}`);
        prod8Loader.send();
        prod8Loader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            fillProd8Array(data);
            resolve(product8Array);
        });
    });
};

product8Object.getProd8Array = () => {
    return product8Array;
};
module.exports = product8Object;
},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = require('./handlebars/base');

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = require('./handlebars/safe-string');

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = require('./handlebars/exception');

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = require('./handlebars/utils');

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = require('./handlebars/runtime');

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = require('./handlebars/no-conflict');

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];


},{"./handlebars/base":16,"./handlebars/exception":19,"./handlebars/no-conflict":29,"./handlebars/runtime":30,"./handlebars/safe-string":31,"./handlebars/utils":32}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _helpers = require('./helpers');

var _decorators = require('./decorators');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var VERSION = '4.0.10';
exports.VERSION = VERSION;
var COMPILER_REVISION = 7;

exports.COMPILER_REVISION = COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];


},{"./decorators":17,"./exception":19,"./helpers":20,"./logger":28,"./utils":32}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = require('./decorators/inline');

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}


},{"./decorators/inline":18}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];


},{"../utils":32}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      column = undefined;
  if (loc) {
    line = loc.start.line;
    column = loc.start.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
      } else {
        this.column = column;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];


},{}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = require('./helpers/block-helper-missing');

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = require('./helpers/each');

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = require('./helpers/helper-missing');

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = require('./helpers/if');

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = require('./helpers/log');

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = require('./helpers/lookup');

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = require('./helpers/with');

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}


},{"./helpers/block-helper-missing":21,"./helpers/each":22,"./helpers/helper-missing":23,"./helpers/if":24,"./helpers/log":25,"./helpers/lookup":26,"./helpers/with":27}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];


},{"../utils":32}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('../utils');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        var priorKey = undefined;

        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];


},{"../exception":19,"../utils":32}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];


},{"../exception":19}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
  });
};

module.exports = exports['default'];


},{"../utils":32}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];


},{}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field) {
    return obj && obj[field];
  });
};

module.exports = exports['default'];


},{}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];


},{"../utils":32}],28:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('./utils');

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      if (!console[method]) {
        // eslint-disable-line no-console
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];


},{"./utils":32}],29:[function(require,module,exports){
(function (global){
/* global window */
'use strict';

exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],30:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = require('./utils');

var Utils = _interopRequireWildcard(_utils);

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _base = require('./base');

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision !== currentRevision) {
    if (compilerRevision < currentRevision) {
      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
    } else {
      // Use the embedded version info since the runtime doesn't know about this revision yet
      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
    }
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as psuedo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }

    partial = env.VM.resolvePartial.call(this, partial, context, options);
    var result = env.VM.invokePartial.call(this, partial, context, options);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, options);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name) {
      if (!(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
      }
      return obj[name];
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        if (depths[i] && depths[i][name] != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    merge: function merge(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }
    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }
  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      container.helpers = container.merge(options.helpers, env.helpers);

      if (templateSpec.usePartial) {
        container.partials = container.merge(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = container.merge(options.decorators, env.decorators);
      }
    } else {
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}


},{"./base":16,"./exception":19,"./utils":32}],31:[function(require,module,exports){
// Build out our basic SafeString type
'use strict';

exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];


},{}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}


},{}],33:[function(require,module,exports){
// Create a simple path alias to allow browserify to resolve
// the runtime on a supported path.
module.exports = require('./dist/cjs/handlebars.runtime')['default'];

},{"./dist/cjs/handlebars.runtime":15}],34:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":33}],35:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div class=\"btn-group dropdown\" id=\"button--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" role=\"group\">\n  	<button class=\"btn btn-default dropdown-toggle nextmenu--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" type=\"button\" id=\"dropdownMenu--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n    <span class=\"caret\"></span>\n  	</button>\n  	</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

},{"hbsfy/runtime":34}],36:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<div id=\"prodId--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"typebox\">\n	<h1 class=\"prodName\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n	<p class=\"prodDesc\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n	</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

},{"hbsfy/runtime":34}],37:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<li><a class=\"prod--"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" href=\"#\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

},{"hbsfy/runtime":34}]},{},[2]);
