(()=>{
	"use strict";
	
	const ImprintProperties = require( './lib/func_imprint_prop' );
	const APIs = {
		ImprintProperties
	};
	
	module.exports = ImprintProperties({}, APIs);
	Object.defineProperty( module.exports, "register", {
		value:()=>{
			for(let idx in APIs) {
				if ( APIs.hasOwnProperty(idx) ) {
					APIs[idx].register();
				}
			}
			
			return module.exports;
		}
	})
})();
