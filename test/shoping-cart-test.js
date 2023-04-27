const assert = require('assert');
//const expect = require('expect');
const ShoppingCart = require('../src/shoping-cart');


describe('ShoppingCart', function() {
    describe('#addItem()', function() {
      it('should add an item to the cart', function() {
        let cart = new ShoppingCart();
        let item = { id: 'apple', price: 10, quantity: 1 };
        cart.addItem(item);
        assert.equal(cart.items.length, 1);
        assert.equal(cart.items[0], item);
      });
    });
  });


  describe('ShoppingCart', function() {
    describe('#calculateTotalPrice()', function() {
      it('should calculate the total price of all items in the cart', function() {
        let cart = new ShoppingCart();
        let item1 = { id: 'apple', price: 10, quantity: 2 };
        let item2 = { id: 'orange', price: 20, quantity: 1 };
        cart.addItem(item1);
        cart.addItem(item2);
        assert.equal(cart.calculateTotalPrice(), 40);
      });
      it('should return 0 if there are no tiems in the cart', function() {
        let cart = new ShoppingCart();        
        assert.equal(cart.calculateTotalPrice(), 0);
      });
      it('should give 5% discount if total quantity is between 5 and 9', function() {
        let cart = new ShoppingCart();
        let item1 = { id: 'apple', price: 10, quantity: 6 };
        let item2 = { id: 'orange', price: 20, quantity: 2 };
        cart.addItem(item1);
        cart.addItem(item2);
        assert.equal(cart.calculateTotalPrice(), 95);
      });
      it('should give 10% discount if total quantity is between 10 and 19', function() {
        let cart = new ShoppingCart();
        let item1 = { id: 'apple', price: 10, quantity: 10 };
        let item2 = { id: 'orange', price: 20, quantity: 5 };
        cart.addItem(item1);
        cart.addItem(item2);
        assert.equal(cart.calculateTotalPrice(), 180);
      });
      it('should give 20% discount if total quantity is 20 or more', function() {
        let cart = new ShoppingCart();
        let item1 = { id: 'apple', price: 10, quantity: 10 };
        let item2 = { id: 'orange', price: 20, quantity: 5 };
        let item3 = { id: 'banana', price: 20, quantity: 5 };
        cart.addItem(item1);
        cart.addItem(item2);
        cart.addItem(item3);
        assert.equal(cart.calculateTotalPrice(), 240);
      });
    });
  });


describe('ShoppingCart', function() {

  let cart;

  beforeEach( function() {
    cart = new ShoppingCart();
    let item1 = { id: 'apple', price: 10, quantity: 2 };
    let item2 = { id: 'orange', price: 20, quantity: 1 };

    cart.addItem(item1);
    cart.addItem(item2);
  });  

  describe('#removeItem()', function() {
    it('should remove an item from the cart when it exists', function() {   
      cart.removeItem('apple');
      assert.deepStrictEqual(cart.items, [
        { id: 'orange', price: 20, quantity: 1 }
      ]);
    });

    it('should not remove an item from the cart when it does not exists', function() {
      cart.removeItem('banana');
      assert.deepStrictEqual(cart.items, [
        { id: 'apple', price: 10, quantity: 2 },
        { id: 'orange', price: 20, quantity: 1 }
      ]);
    });

  });

}); 

describe('ShoppingCart',  function() {
  let cart;

  beforeEach( function() {
    cart = new ShoppingCart();
    let item1 = { id: 'apple', price: 10, quantity: 2 };
    let item2 = { id: 'orange', price: 20, quantity: 1 };

    cart.addItem(item1);
    cart.addItem(item2);
  });  
  

  describe('#updateItemQuantity()',  function() {
    it('should update the quantity of an item in the cart',  function() {
      cart.updateItemQuantity('apple', 5);
      assert.deepStrictEqual(cart.items,[
        { id: 'apple', price: 10, quantity: 5 },
        { id: 'orange', price: 20, quantity: 1 }
      ]);
    });

    it('should not update the quantity of an item if it is not found in the cart',  function() {
      cart.updateItemQuantity('banana', 5);
      assert.deepStrictEqual(cart.items,[
        { id: 'apple', price: 10, quantity: 2 },
        { id: 'orange', price: 20, quantity: 1 }
      ]);
    });
  });
});

describe('ShoppingCart',  function() {
  let cart;

  beforeEach( function() {
    cart = new ShoppingCart();
    let item1 = { id: 'apple', price: 50, quantity: 2 }; 
    cart.addItem(item1);
  });  
  

  describe('#applyCoupon()',  function() {
    it('should apply 5% coupoun if coupon code is 1',  function() {
      assert.equal(cart.applyCoupon(1), 95);      
    });
    it('should apply 10% coupoun if coupon code is 2',  function() {
      assert.equal(cart.applyCoupon(2), 90);      
    });
    it('should not apply discount coupoun if coupon code is not valid',  function() {
      assert.equal(cart.applyCoupon(17), 100);      
    });
  });
});


describe('ShoppingCart',  function() {
  let cart;

  beforeEach( function() {
    cart = new ShoppingCart();
  });   

  describe('#calculateDiscountPercentage()',  function() {
    it('should apply 5% coupoun if coupon code is 1',  function() {
      assert.equal(cart.calculateDiscountPercentage(1), 5);      
    });
    it('should apply 10% coupoun if coupon code is 2',  function() {
      assert.equal(cart.calculateDiscountPercentage(2), 10);      
    });
    it('should not apply discount coupoun if coupon code is not valid',  function() {
      assert.equal(cart.calculateDiscountPercentage(17), 0);      
    });
  });
});



  

