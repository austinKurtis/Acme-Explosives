"use strict";
console.log("categories Loader.js");

//********************************
//		Load Categories
//********************************
let categInventory = [];
let categNames = {};

let fillCategories = (data) => {
	data.forEach(function(element){
		categInventory.push(element);
	});
};

categNames.getCategories = () => {
	return categInventory;
};

categNames.loadCategories = () => {
	return new Promise (function (resolve, reject){
		let categoryLoader = new XMLHttpRequest();
		categoryLoader.open("GET", "./json/categories.json");
		categoryLoader.send();
		categoryLoader.addEventListener("load", function(){
			let data = JSON.parse(this.responseText);
			fillCategories(data);
			console.log("categInventory", categInventory);
			resolve(categInventory);
		});
	});
};

module.exports = categNames;