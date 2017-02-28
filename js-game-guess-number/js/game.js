function task2() {
    //Variables initialization
    var i = 0;
    var a = 5;
    var win1 = 10;
    var win2 = 5;
    var win3 = 2;
    var result = [];
    //Start of the game
    if (confirm("Чи бажаєте почати гру?")) {
        while (i !== null) {
            //User's first try
            var number = prompt("Введіть число від 0 до " + a + ":");
            if (number == Math.floor(Math.random() * a) + 0) {
                if (i == 0) {
                    alert("Ви виграли: " + win1 + "$");
                    result.push(win1);
                } else {
                    alert("Ви виграли: " + win1 + "$");
                    result.push(win1);
                }
            } else {
                //User's second try
                number = prompt("Введіть число від 0 до " + a + ":");
                if (number == Math.floor(Math.random() * a) + 0) {
                    if (i == 0) {
                        alert("Ви виграли: " + win2 + "$");
                        result.push(win2);
                    } else {
                        alert("Ви виграли: " + win2 + "$");
                        result.push(win2);
                    }
                } else {
                    //User's third try
                    number = prompt("Введіть число від 0 до " + a + ":");
                    if (number == Math.floor(Math.random() * a) + 0) {
                        if (i == 0) {
                            alert("Ви виграли: " + win3 + "$");
                            result.push(win3);
                        } else {
                            alert("Ви виграли: " + win3 + "$");
                            result.push(win3);
                        }
                    } else {
                        //Result is 0
                        //Clearing array
                        alert("Ваш виграш - 0$");
                        a = 2.5;
                        var win1 = 10 / 3;
                        var win2 = 5 / 3;
                        var win3 = 2 / 3;
                        result = [];
                    }
                }
            }
            //Ask if user would like to continue
            if (confirm("Чи бажаєте продовжити гру?")) {
                //Increasing the gap by half
                //Win - multiply by 3
                win1 = win1 * 3;
                win2 = win2 * 3;
                win3 = win3 * 3;
                a = a * 2;
                i++;
            } else {
                //End of the game with 0 win
                if (result == 0) {
                    alert("Сьогодні ви не виграли мільйон, а могли.");
                    i = null;
                } else {
                    //Add all win
                    result = result.reduce(function(prev, cur) {
                        return prev + cur;
                    });
                    //End of the game with showing user's win result
                    alert("Дякуємо за гру, ваш виграш становить " + result + "$");
                    i = null;
                }
            }
        }
    } else {
        alert("Сьогодні ви не виграли мільйон, а могли.");
    }
}
