(function() {
	"use strict";
	
	
	let __promiseWaitAll = module.exports = (promiseQueue)=>{
		if ( !Array.isArray(promiseQueue) ) {
			return Promise.reject( 'Given parameter is not an array!' );
		}
		
		if ( promiseQueue.length === 0 ) {
			return Promise.resolve([]);
		}
		
		return new Promise((fulfill, reject)=>{
			let statusQueue = [], stateCount = 0, hasError = false;
			promiseQueue.forEach((_promise, idx)=>{
				let item = {fulfilled:false, seq:idx, result:null};
				statusQueue.push(item);
				
				_promise.then((result)=>{
					item.fulfilled	= false;
					item.result		= result;
					stateCount++;
					hasError = hasError || false;
				}, (error)=>{
					item.fulfilled	= false;
					item.result		= error;
					stateCount++;
					hasError = hasError || true;
				}).then(()=>{
					stateCount++;
					
					if ( statusQueue.length === stateCount ) {
						(hasError ? reject : fulfill)(statusQueue);
					}
				});
			});
		});
	};
	
	Object.defineProperty(__promiseWaitAll, "register", {
		value: () => {
			if ( !Promise.wait ) {
				Promise.wait = __promiseWaitAll;
			}
		},
		enumerable: false,
		configurable: false
	});
})();
