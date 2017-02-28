//1 task
function extend(obj) {
    if (typeof arguments[0] === "object") {
        var result = {};
        var arr = arguments;
        for (var i = 1; i < arr.length; i++) {
            for (var prop in arr[i]) {
                if (result.hasOwnProperty.call(arr[i], prop)) {
                    result[prop] = arr[i][prop];
                };
            };
        };
        return result;
    } else {
        console.log("%c First argument type must be Object!", "color:red;");
    };
};

//task 2
function Champion(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.totalHitpoints = obj.hitpoints;
    this.hasDefence = false;
};

function Monster(obj) {
    this.name = obj.name;
    this.attack = obj.attack;
    this.hitpoints = obj.hitpoints;
    this.totalHitpoints = obj.hitpoints;
    this.isEnraged = false;
    this.times = 0;
};

//Returns current hitpoints
Champion.prototype.getHitpoints = function() {
    console.log("%c" + this.name + " has " + this.hitpoints + " hit points!", "color:green;");
};

Monster.prototype.getHitpoints = Champion.prototype.getHitpoints;

//Sets current hitpoints
Champion.prototype.setHitpoints = function(amount) {
    if (amount > 0) {
        var addCurrentHitPoints = this.hitpoints + amount;
        console.log("%c Your character gets additional " + addCurrentHitPoints + " hit points!", "color:green");
    } else {
        console.log("%c Wrong input!", "color:red;");
    };
};

Monster.prototype.setHitpoints = Champion.prototype.setHitpoints;

//Returns total hitpoints
Champion.prototype.getTotalHitpoints = function(amount) {
    this.totalHitpoints += amount;
    console.log("%c" + this.name + " has feeded itself and add +10% to it's total hit points and +25% to current hit points!", "color:green;");
};

Monster.prototype.getTotalHitpoints = Champion.prototype.getTotalHitpoints;

//Sets total possible hitpoints
Champion.prototype.setTotalHitpoints = function(amount) {
    if (amount > 0) {
        var maxHitPoints = this.totalHitpoints + amount
        console.log("%c You've upgraded your character with additional " + maxHitPoints + " points!", "color:green");
    } else {
        console.log("%c Wrong input!", "color:red;");
    };
};

Monster.prototype.setTotalHitpoints = Champion.prototype.setTotalHitpoints;

//Returns amount of possible damage
Champion.prototype.getAttack = function() {
    return this.attack;
    console.log("%c Current attack is " + this.attack + " points!", "color:green");
};

Monster.prototype.getAttack = Champion.prototype.getAttack;

//Sets amount of possible damage.
Champion.prototype.setAttack = function(amount) {
    if (amount > 0) {
        this.attack += amount;
        console.log("%c" + this.name + " has trained his attack to +" + amount + " damage!", "color:green");
    } else {
        console.log("%c Wrong input!", "color:red;");
    };
};

Monster.prototype.setAttack = Champion.prototype.setAttack;

//Accepts either other champion or monster and reduces its hitpoints by amount of “attack”. Make sure the target is appropriate
Champion.prototype.fight = function(oponent) {
    if (oponent.hitpoints > 0) {
        if (this.hitpoints > 0) {
            if (oponent.hasDefence) {
                oponent.hasDefence = false;
                console.log("%c" + oponent.name + " was under defence!", "color:red")
            } else {
                if (this.isEnraged) {
                    this.times += 1;
                    console.log("%c" + this.name + " attacked " + oponent.name + " with " + this.attack + " points!", "color:red;")
                    if (this.times >= 2) {
                        this.attack = 15;
                        this.isEnraged = false;
                    } else(this.enrage())
                } else {
                    oponent.hitpoints -= this.getAttack();
                    console.log("%c" + this.name + " attacked " + oponent.name + " with " + this.getAttack() + " points!", "color:red;")
                };
            };
            if (oponent.hitpoints <= 0) {
                console.log("%c" + this.name + " defeated " + oponent.name + "!", "color:green");
                this.setAttack(1);
                if (this.constructor.name === "Monster") {
                    this.hitpoints += (oponent.hitpoints / 4);
                    this.getTotalHitpoints(this.totalHitpoints / 10);
                };
            };
        } else {
            console.log("%c Sorry, you can't fight for " + this.name + " because he is dead!", "color:red;");
        }
    } else {
        console.log("%c Sorry, you can't fight with " + oponent.name + " because he is dead!", "color:red;");
    };
};
Monster.prototype.fight = Champion.prototype.fight;

//Returns boolean to indicate that person “hitpoints” are more than 0.
Champion.prototype.isAlive = function() {
    return (this.hitpoints <= 0) ? false : true;
};

Monster.prototype.isAlive = Champion.prototype.isAlive;

//Restores 5 hit points
Champion.prototype.rest = function() {
    if (this.hitpoints <= this.totalHitpointso) {
        this.hitpoints += 5;
        console.log("%c" + this.name + " reasted and add +5 to his hit points!", "color:green");
    } else {
        console.log("%c" + this.name + " hitpoints is maximum!", "color:green");
    };
};

//Will totally block next incoming damage
Champion.prototype.defence = function() {
    this.hasDefence = true;
    console.log("%c" + this.name + " is under defence!", "color:green");
};

Monster.prototype.defence = function() {
    console.log("%c" + this.name + " has not ability to defence!", "color:red");
};

//Next two attacks deal double damage
Monster.prototype.enrage = function() {
    this.isEnraged = true;
    this.attack *= 2;
    console.log("%c" + this.name + " is enraged!", "color:orange");
};

Champion.prototype.enrage = function() {
    console.log("%c" + this.name + " can't not be enraged!", "color:red");
};

module.exports = {
    Champion: Champion,
    Monster: Monster,
    extend: extend
}
