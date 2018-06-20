(function() {
	"use strict";
	
	
	function ParseQuery(rawQuery) {
		let query = {var:{}, flag:[]};
		rawQuery = rawQuery || '';
		(rawQuery === '' ? [] : rawQuery.split('&')).forEach((param)=>{
			let index = param.indexOf( '=' );
			if ( index < 0 ) {
				query.flag.push(decodeURIComponent(param));
			}
			else {
				let idx = decodeURIComponent(param.substring(0, index));
				let val = decodeURI(param.substring(index+1));
				query.var[idx] = val;
			}
		});
		
		return query;
	}
	
	module.exports=()=>{
		return ParseQuery;
	};
})();
