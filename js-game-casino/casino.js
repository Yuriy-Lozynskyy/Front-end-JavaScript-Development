//Demo
//Please type in developer tools->console->Demo(); and press enter to see demo.
function Demo() {
    //Creation
    //Input value can be also even
    console.log("%c Here we create new instance of class Casino, class SlotMachine and display initial Casino parameters", "color:blue;");
    "<br>" + "<br>"
    myCasino = new Casino(5, 9999);
    user = new SlotMachine();
    console.log(myCasino);

    //Casino class functions
    console.log("%c Let me take you to casino class functions", "color:black;");
    console.log("%c Result of function that shows total initial casino money.", "color:blue;");
    myCasino.getTotalMoney();
    console.log("%c Result of function that shows total initial casino slot machines.", "color:blue;");
    myCasino.getTotalMachines();
    console.log("%c Functions add 2 new slot machines to our casino.", "color:blue;");
    myCasino.addNewSlotMachine();
    myCasino.addNewSlotMachine();
    console.log("%c Here we can see how money were spreaded between slot machines.", "color:blue;");
    console.log(myCasino);
    console.log("%c Here we can see amount of total slot machines.", "color:blue;");
    myCasino.getTotalMachines();
    console.log("%c Functions removes 2 slot machines from our casino.", "color:blue;");
    myCasino.removeSlotMachineById(2);
    console.log("%c Functions tells that there is no slot machine with id:8!", "color:blue;");
    myCasino.removeSlotMachineById(8);
    console.log("%c Result of function that shows total amout casino slot machines after removing.", "color:blue;");
    myCasino.getTotalMachines();
    console.log("%c Function that give us some amount of casino money.", "color:blue;");
    myCasino.takeCasinoMoney(200);
    console.log("%c Function takeCasinoMoney () input cannot be negative.", "color:blue;");
    myCasino.takeCasinoMoney(-2);

    //SlotMachine class functions
    console.log("%c SlotMachine class functions", "color:black;");
    console.log("%c Result of function that shows total initial amount of money in machine.", "color:blue;");
    user.totalAmountInMachine();
    console.log("%c Function that give us money from sot machine", "color:blue;");
    user.takeMoney(200);
    console.log("%c If there is not enought money in slot machine, we get following message:", "color:blue;");
    user.takeMoney(20000);
    console.log("%c Function takeMoney () input cannot be negative.", "color:blue;");
    user.takeMoney(-1);
    console.log("%c Function putMoney () adds money to slot machine money.", "color:blue;");
    user.putMoney(200);
    console.log("%c Function putMoney () input cannot be negative.", "color:blue;");
    user.putMoney(-1);
    console.log("%c Here is start of the game! Let's put $200", "color:blue;");
    user.play(200);
    console.log("%c Here is start of the game! Let's put $300", "color:blue;");
    user.play(300);
    console.log("%c Here is start of the game! Let's put $500", "color:blue;");
    user.play(500);
    console.log("%c Slot machine input cannot be negative.", "color:blue;");
    user.play(-200);
    console.log("%c Here is start of the game! Let's put $500", "color:blue;");
    user.play(600);
    console.log("%c I've waisted almost all my money. I have better things to do!", "color:blue;");
    console.log("%c Here we can see how much money is in slot machine", "color:blue;");
    user.totalAmountInMachine();
    console.log("%c Here is our casino total budjet!", "color:blue;");
    myCasino.getTotalMoney();
};

//Casino class 
function Casino(number, money) {
    if (number > 0 && money > 0) {
        this.number = number;
        this.money = money;
        this.machines = [];
        for (var i = 0; i < number; i++) {
            if (money % number !== 0) {
                this.machines[i] = new SlotMachine(parseInt(money / number));
                this.machines[i].id = Math.floor((Math.random() * this.number) + 0);
            } else {
                this.machines[i] = new SlotMachine(money / number);
                this.machines[i].id = Math.floor((Math.random() * this.number) + 0);
            };
        };
        this.machines[0].moneyToMachine += money % number;
        this.machines[1].lucky = true;

        //get total amount of money in casino
        this.getTotalMoney = function() {
            var totalMoney = 0;
            for (var i = 0; i < this.machines.length; i++) {
                totalMoney += this.machines[i].moneyToMachine;
            }
            console.log("%c Your casino total money is $" + parseInt(totalMoney), "color:green;");
        };

        //get total number of machines in casino
        this.getTotalMachines = function() {
            console.log("%c Number of slots machines is " + this.machines.length, "color:green;");
        };

        //add new `SlotMachine` (in that case new machine should receive as the initial amount of money so the half 		money amount from the machine, which has the biggest amount of money at that moment)
        this.addNewSlotMachine = function() {
            this.machines.push(new SlotMachine(0));
            console.log("%c New slot machine is added!", "color:green;");
            var max = Math.max.apply(Math, this.machines.map(function(o) {
                return o.moneyToMachine;
            }));
            for (var i = 0; i < this.machines.length; i++) {
                if (this.machines[i].moneyToMachine === max) {
                    this.machines[i].moneyToMachine = this.machines[i].moneyToMachine / 2;
                    break;
                };
            };
            var halfMax = max / 2;
            this.machines[this.machines.length - 1].moneyToMachine = halfMax;
            this.machines[this.machines.length - 1].id = this.machines.length - 1;
        };

        //remove machine by unique number (money from the removed machine should be spreaded among the rest machines)
        this.removeSlotMachineById = function(id) {
            for (var i = 0; i < this.machines.length; i++) {
                if (id === this.machines[i].id) {
                    var delMachMon = this.machines[i].moneyToMachine / (this.machines.length - 1);
                    this.machines.splice(id, 1);
                    console.log("%c Slot machine id: " + id + " deleted!", "color:green;")
                    for (j = 0; j < this.machines.length; j++) {
                        this.machines[j].moneyToMachine += delMachMon;
                    }
                } else if (id > this.number) {
                    console.log("%c No such slot machine id!", "color:red;");
                    break;
                };
            };
        };
        //take the money from the casino
        this.takeCasinoMoney = function(amount) {
            if (amount >= 0) {
                for (var i = 0; i < this.machines.length - 1; i++) {
                    if (this.machines[i].moneyToMachine < this.machines[i + 1].moneyToMachine) {
                        var temp = this.machines[i].moneyToMachine;
                        this.machines[i].moneyToMachine = this.machines[i + 1].moneyToMachine;
                        this.machines[i + 1].moneyToMachine = temp;
                    };
                };
                var totalAmount = 0;
                for (var j = 0; j < this.machines.length; j++) {
                    if (this.machines[j].moneyToMachine >= amount) {
                        this.machines[j].moneyToMachine -= (amount / this.machines.length);
                        totalAmount += (parseInt(amount / this.machines.length));
                    } else {
                        console.log("%c Slot machine with id " + this.machines[j].id + " has not enougth amount money, only " + this.machines[j].moneyToMachine, "color:red;");
                        totalAmount += this.machines[j].moneyToMachine;
                    }
                }
                console.log("%c Total amout of money from machines is $" + parseInt(totalAmount), "color:green;");
                return this.machines;
            } else {
                console.log("%c Your input can't be negative!", "color:red;")
            }
        }
    } else {
        console.log("%c Your input can't be negative!", "color:red;")
    };
};

//SlotMachine class 
function SlotMachine(moneyToMachine) {
    this.moneyToMachine = moneyToMachine;
    this.id = Math.floor(Math.random() * 5) + 0;
    //get total amount of money in machine
    this.totalAmountInMachine = function() {
        console.log("%c Total amout of money in this machine is $" + parseInt(myCasino.machines[this.id].moneyToMachine), "color:green;");
    }
    this.takeMoney = function(amount) {
        if (amount > 0) {
            if (amount > myCasino.machines[this.id].moneyToMachine) {
                console.log("%c There is not enougth money in this slot machine!", "color:red")
            } else {
                myCasino.machines[this.id].moneyToMachine -= amount;
                console.log("%c Please take your $" + amount, "color:green;");
            }
        } else {
            console.log("%c Your input can't be negative!", "color:red;")
        };
    };
    this.putMoney = function(amount) {
        if (amount > 0) {
            myCasino.machines[this.id].moneyToMachine += amount;
            console.log("%c Thank you!", "color:green");
        } else {
            console.log("%c Your input can't be negative!", "color:red;");
        }
    }
    this.play = function(amount) {
        if (amount > 0) {
            var spin = Math.floor(Math.random() * 999);
            var arr = spin.toString().split('');
            if (arr.length === 2) {
                arr.push('0');
            } else if (arr.length === 1) {
                arr.push('0', '0');
            } else if (arr.length === 0) {
                arr.push('0', '0', '0');
            }
            var matches = 0;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 1; j < arr.length; j++) {
                    if (arr[i] === arr[i + 1] && i !== j) {
                        matches++;
                        if (arr[i] === arr[i + 1] && arr[i] === '7') {
                            matches++;
                            if (myCasino.machines['1'].lucky === true) {
                                matches = 2;
                                arr = [7, 7, 6];
                            };
                        };
                    };
                };
            };
            console.log(arr);
            if (matches > 2) {
                console.log("%c Congratulations! You won Jack Pot! $" + myCasino.machines[this.id].moneyToMachine, "color:green;");
                this.takeMoney(myCasino.machines[this.id].moneyToMachine);
            } else if (matches === 0) {
                console.log("%c You lost your $" + amount, "color:red;");
                this.putMoney(amount)
            } else if (matches > 0) {
                console.log("%c Congratulations! You won $" + amount * 2, "color:green;");
                this.takeMoney(amount * 2);
            } else if (matches > 1) {
                console.log("%c Congratulations! You won $" + amount * 5, "color:green;");
                this.takeMoney(amount * 5);
            }
        } else {
            console.log("%c Your input can't be negative!", "color:red;")
        };
    };
};
/*
module.exports = Casino;
module.exports = SlotMachine;
module.exports = Demo;
*/