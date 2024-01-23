'use strict';

// prompt() functions 
// name
let clientName = prompt('Enter your name.');
let clientMessage = `Prepared for ${clientName}`;

// address
let clientAddress = prompt('Enter your address');
let address = `${clientAddress}`;

// city
let clientCity = prompt('enter your city');
let city = `${clientCity}`;

// province
let clientProvince = prompt('enter your province');
let province = `${clientProvince}`;

// postalCode
let clientPostalCode = prompt('enter your postal code');
let postalCode = `${clientPostalCode}`;

// parseInt(prompt()) functions
// lot area
let lotArea = parseInt(prompt('Enter the lot area in sq. ft.'));

// dwelling area
let dwellingArea = parseInt(prompt('Enter the dwelling area in sq. ft'));

// # of bathrooms
let numberOfBathrooms = parseInt(prompt('Enter the number of bathrooms'));

// # of kitchens
let numberOfKitchens = parseInt(prompt('Enter the number of kitchens '));

let estimate = 50 * lotArea + 200 * dwellingArea + 10000 * numberOfBathrooms + 25000 * numberOfKitchens;