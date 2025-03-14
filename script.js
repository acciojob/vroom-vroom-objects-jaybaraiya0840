// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
}
Car.prototype.getMakeModel=function () {
	return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this.topSpeed=topSpeed;
}

SportsCar.prototype= Object.create(Car.prototype);
SportsCar.prototype.getTopSpeed=function () {
	return this.topSpeed;	
}
// // create class car-> add properties to it and its methods

// class Car {
// 	constructor(make, model) {
// 		this.make=make;
// 		this.model=model;
// 	}
// }

// Car.prototype.getMakeModel = function () {
// 	return `${this.make} ${this.model}`
// }

// let obj={
// 	make:2000,
	
// }
// // create class sportsCar-> inherit car->create properties and its methods

// class SportsCar {
// 	constructor(make, model, topSpeed) {
// 		super(make, model);
// 		this.topSpeed=model;
// 	}
// }

// SportsCarCar.prototype.getTopSpeed = function () {
// 	return this.topSpeed;
// }

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
