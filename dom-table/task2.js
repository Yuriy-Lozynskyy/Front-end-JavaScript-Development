//Task #2. First table ('==')
//Table header
function table(sign) {
    var table = document.createElement('table');
    var arr = [false, undefined, null, '', 0, NaN];
    var headerRow = document.createElement('tr');
    var signCell = document.createElement("td");
    var signCellText = document.createTextNode(sign);

    //Append childs
    table.appendChild(headerRow);
    headerRow.appendChild(signCell);
    signCell.appendChild(signCellText);

    //Filling table header
    arr.forEach(function(i) {
        var cellTitle = document.createElement("td");
        if (i === '') {
            var cellHText = document.createTextNode('""');
        } else {
            var cellHText = document.createTextNode(i);
        };
        //Append childs
        headerRow.appendChild(cellTitle);
        cellTitle.appendChild(cellHText);
        //Style table
        table.style.border = ('1px solid black');
        cellTitle.style.border = ('1px solid black');
        cellTitle.style.backgroundColor = ('yellow');
    });

    //Table body
    arr.forEach(function(i, index, arr) {
        var tr = document.createElement('tr');
        //Here i used "for loop", because with arr.forEach() or arr.map() i can't add +1 to arr.length
        for (var j = 0; j <= arr.length; j++) {
            var cell = document.createElement("td");
            cell.style.border = ('1px solid black');
            if (j === 0) {
                cell.style.backgroundColor = ('yellow');
                if (i === '') {
                    var cellText = document.createTextNode('""');
                } else {
                    var cellText = document.createTextNode(i);
                };
            };
            //Compare arrays values
            if (j > 0) {
                switch (sign) {
                    case '==':
                        i == arr[j - 1] ?
                            cellText = document.createTextNode('true') :
                            cellText = document.createTextNode('false');
                        break;
                    case '===':
                        i === arr[j - 1] ?
                            cellText = document.createTextNode('true') :
                            cellText = document.createTextNode('false');
                        break;
                };
            };
            //Append childs
            table.appendChild(tr);
            tr.appendChild(cell);
            cell.appendChild(cellText);
        };
    });
    document.body.appendChild(table);
    var breakTag = document.createElement('br');
    document.body.appendChild(breakTag);
};

//Result
//Case('==')
table('==');

//Case ('===')
table('===');
