(()=>{
	"use strict";
	
	const safe = module.exports=require('./safe');
	
	if ( module.parent.exports !== safe ) {
		require('./lib/func_imprint_prop')(true);
		require('./lib/func_parse_url_query')(true);
		require('./lib/func_promise_wait_all')(true);
		require('./lib/func_include')(true);
		require('./lib/func_period')(true);
	}
})();
