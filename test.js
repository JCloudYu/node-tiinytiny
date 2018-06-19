(async()=>{
	"use strict";
	await require('./test/test.imprint-properties')();
	await require('./test/test.promise-wait-all')();
	await require('./test/test.include')();
})();
