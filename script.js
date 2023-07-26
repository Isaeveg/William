function navToggle() {

	// Добавляем класс
	const headerUl = document.getElementById("headerUl");
	headerUl.classList.toggle("_active");

	const menuIcon = document.getElementById("menu");
	menuIcon.classList.toggle("_active");

	const body = document.body;
	body.classList.toggle("no-scroll");
	console.log(headerUl, 'Бургер открыт!');


	// кликаем куда угодно и бургер закрывается
	if (menuIcon.classList.contains("_active")) {
		console.log('Бургер открыт!');
		document.addEventListener("click", outsideClickHandler);
	} else {
		console.log('Бургер закрыт!');
		document.removeEventListener("click", outsideClickHandler);
	}

}


// проверка что кликнули не по панели бургера, закрываем бургер
function outsideClickHandler(event) {
	const headerUl = document.getElementById("headerUl");
	const menuIcon = document.getElementById("menu");
	const target = event.target;

	if (!headerUl.contains(target) && !menuIcon.contains(target)) {
		navToggle();
	}
}


document.getElementById('year').innerHTML = new Date().getFullYear();
