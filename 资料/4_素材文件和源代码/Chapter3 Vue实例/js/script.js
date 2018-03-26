window.onload = function() {
	var data = {
		name: "Conan",
		age: 28
	};
	var app = new Vue({
		el: "#app",
		data: data
	});

	console.log("app.name === data.name: " + (app.name === data.name));
	console.log("app.age === data.age: " + (app.age === data.age));

	console.log("------");

	console.log("app.name: " + app.name);
	console.log("data.name: " + data.name);
	console.log("app.age: " + app.age);
	console.log("data.age: " + data.age);

	console.log("------");

	app.age = 30;
	console.log("app.age: " + app.age);
	console.log("data.age: " + data.age);

	console.log("------");

	data.age = 50;
	console.log("app.age: " + app.age);
	console.log("data.age: " + data.age);
	
	console.log("------");

	console.log(app.$el === document.getElementById("app"));
};