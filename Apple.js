
let Apple = function (weight) {
    this.weight = weight;

 this.getWeight = function () {
     return this.weight;
 };
 this.decrease = function () {
     return this.weight--;
 };

};

let apple = new Apple(10);