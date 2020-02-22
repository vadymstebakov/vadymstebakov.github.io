(function() {
    class Product {
		constructor(price) {
			this.price = price;
		}

		calculatePrice() {
			return this.price;
		}
	}

	// x = new Product(125);
	// console.log(x);
	// y = new Product(344);
	// console.log(y);

	class Box extends Product {
		constructor(price) {
			super(price);
			this.productsArray = [];
		}

		add(product) {
			this.productsArray.push(product);
		}

		calculatePrice() {
			this.price = 0;
			for(let i = 0; i < this.productsArray.length; i++) {
				this.price = 1 * this.price + 1 * this.productsArray[i].calculatePrice();
			}
			return this.price;
		} 
	}

	// a = new Product(45);
	// b = new Product(55);
	// box = new Box(1);
	// box.add(a);
	// box.add(b);
	// z = new Box(18);
	// z.add(a);
	// z.add(b);
	// z.add(box);
	// z.calculatePrice();
	// console.log(z);

	var boxMobPrice = new Box();
	var productAdd = document.getElementsByClassName('add');
	
	for (let j = 0; j < productAdd.length; j++) {
		productAdd[j].addEventListener('click', function(event) {
			event = event || window.event;
			event.preventDefault();
			var priceInBox = document.querySelector('.basket-price');
			var btn = productAdd[j];
			var parent = btn.parentElement;
			var price = parent.querySelector('.price');
			var priceVal = price.innerHTML;
			var mobPrice = new Product(priceVal);
			// console.log(mobPrice);
			boxMobPrice.add(mobPrice);
			boxMobPrice.calculatePrice();
			// console.log(boxMobPrice);
			var priceNumber = boxMobPrice.price;
			// console.log(priceNumber);
			priceInBox.innerHTML = priceNumber;

		}, false);    
	}
})();


