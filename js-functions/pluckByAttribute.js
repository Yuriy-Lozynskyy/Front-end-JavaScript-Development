function pluckByAttribute(arr, label) {
    return getTransformedArray(arr, function(el) {
        return el[label];
    });
};

var presidents = [{ name: 'George', surname: 'Kush' },
   		  { name: 'Barako', surname: 'Obaame' }
		 ];

//example:
pluckByAttribute(presidents, 'name'); // -> [‘George’, ‘Barako’]


