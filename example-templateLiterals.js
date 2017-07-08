const favoriteFood = 'pizza';

const logArgs = (...args) => console.log(...args);

// logArgs('a','b','c');

// logArgs`I like pizza cats`;

// logArgs`i like ${favoriteFood}.`;

logArgs`Test ${() => console.log('nest test')}`;

const execFuncArgs = (...args) => args.forEach( arg => {
	if(typeof arg === 'function') {
		arg();
	}
});

var bob;

execFuncArgs`Another cool test with tagged template literals 
	${ (() => {return 'awesome'})() } 
	and that was a function`;