class ShoppingCart {
    constructor() {
        this.items = [];

        this.addItem = function (item) {
            this.items.push(item);
        };

        this.calculateTotalPrice = function () {
            let itemCount = 0;
            let totalPrice = 0;
            let discount = 0;
            this.items.forEach((item) => {
                totalPrice += item.price * item.quantity;
                itemCount += item.quantity;
            });
            if (itemCount >= 5 && itemCount < 10) {
                discount = 5;
            } else if (itemCount >= 10 && itemCount < 20) {
                discount = 10;
            } else if (itemCount >= 20) {
                discount = 20;
            }
            return totalPrice * (1 - discount / 100);
        };

        this.removeItem = function (itemId) {
            let indexFound = this.items.findIndex(item => item.id == itemId);
            if (indexFound != -1) {
                this.items.splice(indexFound, 1);
            }
        };

        this.updateItemQuantity = function (itemId, quantity) {
            let indexFound = this.items.findIndex(item => item.id == itemId);
            if (indexFound != -1) {
                this.items[indexFound].quantity = quantity;
            }
        };

        this.applyCoupon = function (couponCode) {
            return this.calculateTotalPrice() * (1 - this.calculateDiscountPercentage(couponCode)/100);
        };

        this.calculateDiscountPercentage = function (couponCode) {
            switch(couponCode){
                case 1:
                    return 5;
                case 2:
                    return 10;
                default:
                    return 0;
            }
        };
    }
}

module.exports = ShoppingCart;
