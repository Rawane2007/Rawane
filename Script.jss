function toggleInfo(button) {
const info = button.parentElement.querySelector('.info-box');
info.style.display = info.style.display === 'block' ? 'none' : 'block';
}

function searchProduct() {
let input = document.getElementById('search').value.toLowerCase();
let products = document.getElementsByClassName('product');

for (let i = 0; i < products.length; i++) {
let title = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
products[i].style.display = title.includes(input) ? '' : 'none';
}
}
