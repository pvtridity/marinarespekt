initSlider(['Специальное предложение: кофе в одном чеке с выпечкой по скидке 15%', 'Специальное предложение: скидка 1800₽ на первые три заказа', 'Специальное предложение: освежающие напитки со скидками до 20%'], '#slider1');

function initSlider(texts, selector) {
	var parent = document.querySelector(selector);
	
	var elem = parent.querySelector('.elem');
	var prev = parent.querySelector('.prev');
	var next = parent.querySelector('.next');
	
	var i = 0;
	elem.innerHTML = texts[i];
	
	next.addEventListener('click', function() {
		i++;
		if (i == texts.length) {
			i = 0;
		}
		elem.innerHTML = texts[i];
	});
	prev.addEventListener('click', function() {
		i--;
		if (i == -1) {
			i = texts.length - 1;
		}
		elem.innerHTML = texts[i];
	});
}