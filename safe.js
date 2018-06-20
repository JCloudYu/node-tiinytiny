(()=>{
	"use strict";
	
	let imprint = module.imprint = require('./lib/func_imprint_prop')(false);
	
	module.exports=imprint({}, {
		ImprintProperties:imprint,
		ParseURLQuery:require('./lib/func_parse_url_query')(false),
		PromiseWaitAll:require('./lib/func_promise_wait_all')(false),
		Include:require('./lib/func_include')(false)
	}, false);
	
	require('./entry');
	delete module.imprint;
})();
