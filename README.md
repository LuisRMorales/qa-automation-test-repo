# qa-automation-test-repo
# prerequisite restore the following frameworks
node.js 
mocha
nyc

#to excecute the tests you should run npm test in the console, it will return the results of the tests and the report of code coverage.
#example
npm test 

> qa-automation-test@1.0.0 test
> nyc mocha

Debugger attached.
Debugger attached.


  ShoppingCart
    #addItem()
      ✔ should add an item to the cart

  ShoppingCart
    #calculateTotalPrice()
      ✔ should calculate the total price of all items in the cart
      ✔ should return 0 if there are no tiems in the cart
      ✔ should give 5% discount if total quantity is between 5 and 9
      ✔ should give 10% discount if total quantity is between 10 and 19
      ✔ should give 20% discount if total quantity is 20 or more

  ShoppingCart
    #removeItem()
      ✔ should remove an item from the cart when it exists
      ✔ should not remove an item from the cart when it does not exists

  ShoppingCart
    #updateItemQuantity()
      ✔ should update the quantity of an item in the cart
      ✔ should not update the quantity of an item if it is not found in the cart

  ShoppingCart
    #applyCoupon()
      ✔ should apply 5% coupoun if coupon code is 1
      ✔ should apply 10% coupoun if coupon code is 2
      ✔ should not apply discount coupoun if coupon code is not valid
  ShoppingCart
    #calculateDiscountPercentage()
      ✔ should apply 5% coupoun if coupon code is 1
      ✔ should apply 10% coupoun if coupon code is 2
      ✔ should not apply discount coupoun if coupon code is not valid


  16 passing (121ms)

Waiting for the debugger to disconnect...
-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |      100 |     100 |     100 | 
 shoping-cart.js |     100 |      100 |     100 |     100 | 
-----------------|---------|----------|---------|---------|-------------------

#to excecute the tests you should run npm test in the console, it will return the results of the tests and the report of code coverage in html.
npx nyc report --reporter=html
