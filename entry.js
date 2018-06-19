(() =>{
	"use strict";
	
	let imprint = module.imprint = require('./lib/func_imprint_prop');
	
	const ExportedAPIs = {
		ImprintProperties:imprint,
		ParseURLQuery:require('./lib/func_parse_url_query'),
		PromiseWaitAll:require('./lib/func_promise_wait_all'),
		Include:require('./lib/func_include')
	};
	
	
	
	const exports = module.exports = imprint(
		imprint({}, ExportedAPIs, false),
		{
			globalize(){
				for(let idx in exports) {
					if( exports.hasOwnProperty(idx) ){
						if( !exports[idx].globalize ) continue;
						
						exports[idx].globalize();
					}
				}
			}
		},
		false
	);
})();
