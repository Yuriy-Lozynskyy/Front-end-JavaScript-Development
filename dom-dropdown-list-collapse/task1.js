var cities = {
    'Lviv': ['Gorodok', 'Mykolaiv', 'Stryi', 'Zolochiv', 'Yaboriv', 'Zhovkva'],
    'Ivano-Frankivsk': ['Doluna', 'Kalush', 'Kolomyia', 'Nadvirna'],
    'Uzhgorod': ['Khust', 'Mukachevo'],
    'Luck': ['Kovel', 'Shack', 'Volodymyr-Volynskiy'],
    'Rivne': []
};

var ul = document.createElement('ul');
for (var prop in cities) {

    //Creating list of cities
    var li = document.createElement("li");
    var span = document.createElement("span");
    var city = document.createTextNode(prop + ' (' + cities[prop].length + ')');
    li.appendChild(span);
    span.appendChild(city);
    ul.appendChild(li);
    var ulInner = document.createElement('ul');

    //Creating sub-list of districts
    cities[prop].forEach(function(i) {
        var liInner = document.createElement('li');
        var innerSpan = document.createElement('span');
        li.appendChild(ulInner);
        ulInner.appendChild(liInner);
        var districts = document.createTextNode(i);
        liInner.appendChild(innerSpan);
        innerSpan.appendChild(districts);
    });

    //Cheking if city has no districs
    if (cities[prop].length === 0) {
        span.style.backgroundColor = 'lightgreen';
        span.addEventListener('click', function() {
            alert("This city has NO districts!")
        })
    }
};

document.body.appendChild(ul);

//Sub-list collapse
[].forEach.call(document.getElementsByTagName('span'), function(i) {
    i.onclick = function() {
        if (this.parentNode) {
            [].forEach.call(this.parentNode.getElementsByTagName('ul'), function(j) {
                var flag = j.style.display;
                if (flag == 'none') {
                    j.style.display = 'block';
                } else {
                    j.style.display = 'none';
                };
            });
        };
    };
});
