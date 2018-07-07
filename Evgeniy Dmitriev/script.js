class hamburger {
    constructor(size, stuffing) {
        this.position = 'Hamburger';
        this.size = size;
        this.stuffing = stuffing;

    };
    
    _calculateCalories() {
        const STUFFING_CHEESE = 20;
        const STUFFING_SALAD = 5;
        const STUFFING_POTATO = 10;
        const SIZE_LARGE = 40;
        const SIZE_SMALL = 20;
        let sizeCalories = 0;
        let stuffingCalories = 0;
        if (this.size == 'small') {
            this.sizeCalories = 20;
        } else if (this.size == 'large') {
            this.sizeCalories = 40;
        } else {
            console.log('No such size');
        };

        if (this.stuffing == 'cheese') {
            this.stuffingCalories = 20;
        } else if (this.stuffing == 'potato') {
            this.stuffingCalories = 10;
        } else if (this.stuffing == 'salad') {
            this.stuffingCalories = 5;
        } else {
            console.log('No such stuffing')
        };
        return this.sizeCalories + this.stuffingCalories;

    };
    getCalories() {
        return this._calculateCalories();
    }

    _calculatePrice() {
        const STUFFING_CHEESE = 10;
        const STUFFING_SALAD = 20;
        const STUFFING_POTATO = 15;
        const SIZE_LARGE = 100;
        const SIZE_SMALL = 50;
        let sizePrice = 0;
        let stuffingPrice = 0;
        if (this.size == 'small') {
            this.sizePrice = 50;
        } else if (this.size == 'large') {
            this.sizePrice = 100;
        } else {
            console.log('No such size');
        };

        if (this.stuffing == 'cheese') {
            this.stuffingPrice = 10;
        } else if (this.stuffing == 'potato') {
            this.stuffingPrice = 15;
        } else if (this.stuffing == 'salad') {
            this.stuffingPrice = 20;
        } else {
            console.log('No such stuffing')
        };
        return this.sizePrice + this.stuffingPrice;
    };
    getPrice() {
        return this._calculatePrice();
    }

};



class salad {
    constructor(size, type) {
        this.position = 'Salad';
        this.size = size;
        this.type = type;


    };

    _calculateCalories() {
        const Cesar_calories = 20;
        const Olivie_calories = 80;
        let calories = 0;
        if (this.type == 'cesar') {
            this.calories = this.size * (Cesar_calories / 100);
        } else if (this.type == 'olivie') {
            this.calories = this.size * (Olivie_calories / 100);
        } else {
            console.log('No such salad')
        };
        return this.calories;
    }
    getCalories() {
        return this._calculateCalories();
    }
    _calculatePrice() {
        const Cesar_price = 100;
        const Olivie_price = 50;
        let price = 0;
        if (this.type == 'cesar') {
            this.price = this.size * (Cesar_price / 100);
        } else if (this.type == 'olivie') {
            this.price = this.size * (Olivie_price / 100);
        } else {
            console.log('No such salad')
        };
        return this.price;
    }

    getPrice() {
        return this._calculatePrice();
    }
};



class drink {
    constructor(type) {
        this.position = 'Drink';
        this.type = type;

    };

    _CalculateCalories() {
        const Cola_calories = 40;
        const Coffe_calories = 20;
        let calories = 0;
        if (this.type = 'cola') {
            this.calories = 40;
        } else if (this.type = 'coffe') {
            this.calories = 20;
        } else {
            console.log('No such position')
        }
        return this.calories;
    };
    getCalories() {
        return this._CalculateCalories();
    }
    _calculatePrice() {
        const Cola_price = 50;
        const Coffe_price = 80;
        let price = 0;
        if (this.type = 'cola') {
            this.price = 50;
        } else if (this.type = 'coffe') {
            this.price = 80;
        } else {
            console.log('No such position')
        }
        return this.price;
    };
    getPrice() {
        return this._calculatePrice();
    }
};


class order {
    constructor(...order_positions) {
        this.order_positions = order_positions;
    };


    _calculateTotalCalories() {
        let totalCalories = 0;
        for (let i = 0; i < this.order_positions.length; i++) {
            totalCalories += this.order_positions[i].getCalories();
        }
        return totalCalories;
    };
    getTotalCalories() {
        return this._calculateTotalCalories();
    };
    _calculateTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.order_positions.length; i++) {
            totalPrice += this.order_positions[i].getPrice();
        }
        return totalPrice;
    };
    getTotalPrice() {
        return this._calculateTotalPrice();
    };
    getOrderPositions() {
        for (let i = 0; i < this.order_positions.length; i++) {
            console.log(this.order_positions[i].position + ' -' + ' Calories: ' + this.order_positions[i].getCalories() + ', ' + 'Price:' + ' ' + +this.order_positions[i].getPrice());
        };
    };
    addPosition() {
        for (let i = 0; i < arguments.length; i++) {
            console.log('You added one more: ' + arguments[i].position + ' with' + ' Calories: ' + arguments[i].getCalories() + ', ' + 'Price:' + ' ' + arguments[i].getPrice())
            this.order_positions.push(arguments[i]);
        }

    };
    deletePosition(position) {
        let positionNum = this.order_positions.indexOf(position);
        if (positionNum !== -1) {
            console.log("You've deleted  " + this.order_positions[positionNum].position)
            this.order_positions.splice(positionNum, 1);
        } else {
            console.log('No such position in your order')
        }
    };

    confirmOrder() {
        Object.freeze(this.order_positions);
        console.log('Confirmed')
    }

};
var Salad = new salad(170, 'olivie');
var Salad1 = new salad(340, 'olivie');
var Drink = new drink('cola');
var Drink1 = new drink('coffe');
var Hamburger = new hamburger('small', 'potato');
var Order = new order(Hamburger, Salad, Drink);
Order.addPosition(Drink1, Salad1);
Order.deletePosition(Hamburger);
Order.getOrderPositions();
Order.confirmOrder();
console.log('Total price of your order is: ' + Order.getTotalPrice());
console.log('Total calories of your order is: ' + Order.getTotalCalories());