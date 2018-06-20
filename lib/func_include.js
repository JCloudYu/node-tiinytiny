/**
 * Project: 0064.tiinytiny
 * File: func_r_require.js
 * Author: JCloudYu
 * Create Date: Jun. 19, 2018 
 */
(()=>{
	"use strict";
	
	const {imprint} = module.parent;
	const _require =(...args)=>{
		return require.main.require(...args);
	};
	
	module.exports=(extend=false)=>{
		if( extend && !global.include ) {
			imprint(global, {include:_require}, false);
		}
		return _require;
	};
})();
