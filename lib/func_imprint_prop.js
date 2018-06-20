(()=>{
	"use strict";
	
	
	
	const __imprint = (target, refObj, options={})=>{
		let writable, configurable, enumerable;
		
		if( typeof options === 'boolean' ){
			configurable = writable = options;
			enumerable=true;
		}
		else if( Array.isArray(options) ){
			[writable=true, configurable=true, enumerable=true] = options;
		}
		else{
			({writable=true, configurable=true, enumerable=true} = options);
		}
		
		for( let key in refObj ){
			if( refObj.hasOwnProperty(key) ){
				Object.defineProperty(target, key, {
					value: refObj[key],
					writable: !!writable,
					configurable: !!configurable,
					enumerable: !!enumerable
				});
			}
		}
		return target;
	};
	
	module.exports=(extend=false)=>{
		if( extend && !Object.imprintProperties ){
			Object.defineProperty(Object, "imprintProperties", {
				value: __imprint,
				writable:false, configurable: false, enumerable: true
			});
		}
		
		return __imprint;
	};
})();
