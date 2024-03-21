
const btnCart = document.getElementsByClassName('iniciales')[0]

const containerCartProducts = document.getElementsByClassName('user-options')[0];

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});
