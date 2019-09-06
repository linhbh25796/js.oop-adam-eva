let Human = function (name,gender,weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.speaking = function () {
        alert("My name: "+this.name + ".My gender: "+this.gender+".My weight: "+this.weight);
    };
    this.checkApple = function () {
        alert(apple.getWeight());
    };
    this.checkWeight = function () {
        alert(this.weight);
    };
    this.eatApple = function () {
        if (apple.weight > 0){
            apple.decrease();
            this.weight++;
        }else {
            alert("No more apple to eat.")
        }
    }
};
    let adam = new Human('Adam','Male',100);
    let eva = new Human('Eva','Female',50);
    function speaking(human) {
       human.speaking();
    }
    function eatApple(human) {
        human.eatApple();
    }

    function checkApple(human) {
        human.checkApple();
    }
    function checkWeight(human) {
        human.checkWeight();
    }
