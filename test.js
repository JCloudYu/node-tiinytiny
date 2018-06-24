(async()=>{
	"use strict";
	
	console.log( "[ Testing tiinytiny ]" );
	await require('./test/test.imprint-properties')(true);
	await require('./test/test.promise-wait-all')(true);
	await require('./test/test.include')(true);
	await require('./test/test.period')(true);
})();
