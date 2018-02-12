var kitties = [
  {
    id: 'ky-0',
    name: 'Kitty 1',
    thumbnail: 'landing-kitty01.svg',
    price: 150
  }, {
    id: 'ky-1',
    name: 'Kitty 2',
    thumbnail: 'landing-kitty03.svg',
    price: 250
  }, {
    id: 'ky-2',
    name: 'Kitty 3',
    thumbnail: 'landing-kitty05.svg',
    price: 250
  }, {
    id: 'ky-3',
    name: 'Kitty 4',
    thumbnail: 'landing-kitty07.svg',
    price: 250
  }, {
    id: 'ky-4',
    name: 'Kitty 5',
    thumbnail: 'landing-kitty09.svg',
    price: 250
  }, {
    id: 'ky-5',
    name: 'Kitty 6',
    thumbnail: 'landing-kitty11.svg',
    price: 250
  }, {
    id: 'ky-6',
    name: 'Kitty 7',
    thumbnail: 'landing-kitty13.svg',
    price: 250
  }, {
    id: 'ky-7',
    name: 'Kitty 8',
    thumbnail: 'landing-kitty15.svg',
    price: 250
  }
];

var order = [];

function render() {
  for (var i = 0; i < kitties.length; i++) {
    var kitty = kitties[i];
    $('.js-gallery-list').append(`
    <li class="kitty ${kitty.id}">
      <h3 class="title">${kitty.name}</h3>
      <img src="https://www.cryptokitties.co/images/${kitty.thumbnail}"/>
      <p>$${kitty.price}</p>
    </li>
    `);
  }
}
let k0 = 0,
    k1 = 0,
    k2 = 0,
    k3 = 0,
    k4 = 0,
    k5 = 0,
    k6 = 0,
    k7 = 0
function contarKities(cat){
  switch (cat) {
    case 0:
      k0++
      console.log("mi k0 es:", k0);
      break;
    case 1:
      k1++
      console.log("mi k1 es:", k1)
      break;
    case 2:
      k2++
      console.log("mi k2 es:", k2);
      break;
    case 3:
      k3++
      console.log("mi k3 es:", k3);
      break;
    case 4:
      k4++
      console.log("mi k4 es:", k4);
      break;
    case 5:
      k5++
      console.log("mi k5 es:", k5);
      break;
    case 6:
      k6++
      console.log("mi k6 es:", k6);
      break;
    case 7:
      k7++
      console.log("mi k7 es:", k7);
      break;
  }
}
function showListKitties(id, kitties) {
  /*let contador = 0;
  contador++;
  console.log(contador);*/
  let index = id.substring(3);
  gatito = Number(index);
  contarKities(gatito);
  const itemSelect= kitties[gatito].id;
  console.log("mi item select es", itemSelect)
    /*$('.js-shopping-cart').append(`
      <li>
          <span>1 x ${itemSelect.name}</span>
          <span> = $ ${itemSelect.price}</span>
        </li>
    `)*/
}

function getIdKitties() {
  $('.js-gallery-list').on('click', '.kitty', function() {
    var id = $(this).attr('class').split(' ')[1];
    showListKitties(id, kitties);
  });
}
function initListeners() {
  getIdKitties();
  $('.js-btn-cart').on('click', function() {
    $('.js-btn-close').removeClass('hidden');
    $('.js-shopping-cart').removeClass('hidden');
    $('.js-btn-cart').addClass('hidden');
  });
  $('.js-btn-close').on('click', function() {
    $('.js-btn-cart').removeClass('hidden');
    $('.js-shopping-cart').addClass('hidden');
    $('.js-btn-close').addClass('hidden');
  });
  $('.js-btn-buy').on('click', function() {
    $('.modal').removeClass('hidden');
    $('.js-btn-cart').removeClass('hidden');
    $('.js-shopping-cart').addClass('hidden');
    $('.js-btn-close').addClass('hidden');
  });
  $('.js-btn-modal-close').on('click', function(e) {
    e.preventDefault();
    $('.modal').addClass('hidden');
  });
  $('.js-btn-checkout').on('click', function(e) {
    console.log('checkout');
  });
}

$(function() {
  render();
  initListeners();
});
