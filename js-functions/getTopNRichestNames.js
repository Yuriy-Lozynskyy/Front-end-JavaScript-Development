function getTopNRichestNames(num, arr) {
    var names = [];
    for (var i = 0; i < arr.length; i++) {
        var incomeArr = arr[i].income.split('');
        incomeArr.map(function(x) {
            if (x === 'B') {
                return arr[i].income = incomeArr[0] * 1e9;
            } else if (x === 'M') {
                return arr[i].income = incomeArr[0] * 1e6;
            } else if (x === 'K') {
                return arr[i].income = incomeArr[0] * 1e3;
            };
        });
    };

    var sortPeople = arr.sort(function(a, b) {
        return b.income - a.income;
    });


    if (num < arr.length) {
        for (var i = 0; i < num; i++) {
            names.push(pluckByAttribute(sortPeople, 'name')[i]);
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            names.push(pluckByAttribute(sortPeople, 'name')[i]);
        }
    }

    return names;
}

//example:
var people = [
    { name: 'Bara', income: '1B' },
    { name: 'Dara', income: '5B' },
    { name: 'Kara', income: '1M' },
    { name: 'Zara', income: '2K' }
];

getTopNRichestNames(2, people); // -> [ 'Dara', 'Bara' ]
//getTopNRichestNames(100, people); // -> [ 'Dara', 'Bara', ‘Kara’, ‘Zara’ ]
