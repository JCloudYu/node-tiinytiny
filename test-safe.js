(async()=>{
	"use strict";
	
	console.log( "[ Testing tiinytiny/safe ]" );
	await require('./test/test.imprint-properties')(false);
	await require('./test/test.promise-wait-all')(false);
	await require('./test/test.include')(false);
})();
