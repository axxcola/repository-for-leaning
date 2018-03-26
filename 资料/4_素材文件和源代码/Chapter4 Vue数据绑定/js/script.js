window.onload = function() {
	var dataList = {
		classValue: 'face',
		innerText: '大家好，欢迎来到麦子学院！',
		innerHTML: '欢迎来到<i style=color:red;>麦子学院</i>！',
		name: 'Conan',
		age: 28
	};
	new Vue({
		el: 'div',
		data: dataList
	});
};