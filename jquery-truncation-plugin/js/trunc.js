//Task 1

$.fn.trunc = function(chars) {
    let arr = [],
        index = 0;
    const text = this[0].innerText,
          textArray = this[0].innerText.split('');

    if (text.length > chars) {
        textArray.forEach(i => {
            index += 1;
            if (index < chars) {
                arr.push(i);
            }
        });

        this[0].innerText = arr.join('');
        arr = toString(arr);
        const trim = document.createElement('span');
        trim.innerHTML = '&hellip;';
        trim.style.cursor = 'pointer';
        this.append(trim);

        trim.addEventListener('click', () => {
            this[0].innerText = text;
        });
    } else {
        alert("Error! Can't trancate! TEXT is too short or INPUT DATA is not a text!")
    }
};

//Invocation example:
$('.breaking-news').trunc(200);