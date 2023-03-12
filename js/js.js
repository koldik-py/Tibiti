let mobBtn = document.querySelector('.head__mob'),
		mobMenu = document.querySelector('.menu'),
		mobA = mobMenu.querySelectorAll('a'),
		scrollGo = document.querySelector('.btn'),
		scrollId = '#one',
		visibleCount = true;


let visibleMenu = () => visibleCount ? (mobMenu.style.left = 0, visibleCount = !visibleCount) : 
																				(mobMenu.style.left = "-100%", visibleCount = !visibleCount);


mobBtn.addEventListener('click', () => visibleMenu())

mobA.forEach(i => i.addEventListener('click', () => visibleMenu()))

scrollGo.addEventListener('click', () => window.location = scrollId)