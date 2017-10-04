(function() {
	"use strict";
	
	
	let __parseQuery = module.exports = ( query ) => {
		let queryCtnt = { args: {}, flags: [] };
		(query && query !== '' ? query.split( '&' ) : []).forEach( ( qParam ) => {
			let index = qParam.indexOf( '=' );
			if ( index < 0 ) {
				queryCtnt.flags.push( decodeURI( qParam ) );
			}
			else {
				queryCtnt.args[ decodeURI( qParam.substring( 0, index ) ) ] = decodeURI( qParam.substring( index + 1 ) );
			}
		});
		
		return queryCtnt;
	};
	
	Object.defineProperty(__parseQuery, "register", {
		value: () => {},
		enumerable: false,
		configurable: false
	});
})();
