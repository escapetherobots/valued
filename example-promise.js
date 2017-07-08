function getTempCallback (location, callback) {
	//callback(error, temp);
	// first invoke is success, second is an error - so now temp
	callback(undefined, 78);
	callback('city not found')

}

//invoke
// getTempCallback('Lompoc', function(err, temp){
// 	if(err) {
// 		console.log('error message: ', err);
// 	} else {
// 		console.log('success', temp);
// 	}
// });

function getTempPromise(location){
	var temp;
	if(location === 'miami'){
		temp = 79;
	} else if (location === 'lompoc') {
		temp = 66;
	} else {
		temp = 30;
	}
	return new Promise( function(resolve, reject){
		setTimeout(
			function() {
				resolve(temp);
				reject('City not found');
			},
			5000
		);
	});
}

getTempPromise('lompoc').then(
	(success) => {
		console.log('promise success: ',success);
	},
	(failure) => {
		console.log('promise failure: ', failure);
	}
);

console.log((function bob(){return 'test 1';})());
console.log((function joe(){return 'test 2';})());
console.log((function jerry(){return 5+4;})());


//challenge
function addPromise(a, b) {
	return new Promise( function(resolve, reject){
		setTimeout(
			function(){
				if( typeof a === 'number' && typeof b === 'number' ){
					resolve(a+b);

				} else {
					reject('need two numbers');
				}
			},
			3000
		);
	});
}


addPromise(5, 'bob' ).then(
	(success) => {
		console.log('ADDPROMISE success:: ', success);
	},
	(err) => {
		console.log('ADDPROMISE err:: ', err);
	}
);