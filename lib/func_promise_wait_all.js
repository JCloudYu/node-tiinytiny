(function(){
	"use strict";
	
	
	
	const __promiseWaitAll = (promiseQueue)=>{
		if( !Array.isArray(promiseQueue) ){
			return Promise.reject('Given parameter is not an array!');
		}
		
		if( promiseQueue.length === 0 ){
			return Promise.resolve([]);
		}
		
		return new Promise((resolve, reject) =>{
			let _pQueue=[], _rQueue=[], _readyCount=false;
			promiseQueue.forEach((_promise, idx) =>{
				// Create a status info object
				_rQueue.push({rejected:false, seq:idx, result:null});
				_pQueue.push(Promise.resolve(_promise));
			});
			
			_pQueue.forEach((_promise, idx)=>{
				let item = _rQueue[idx];
				_promise.then(
					(result)=>{
						item.resolved = true;
						item.result = result;
					},
					(error)=>{
						item.resolved = false;
						item.result = error;
					}
				).then(()=>{
					_readyCount++;
					
					if ( _rQueue.length === _readyCount ) {
						let result = true;
						_rQueue.forEach((item)=>{result=result&&item.resolved;});
						(result?resolve:reject)(_rQueue);
					}
				});
			});
		});
	};
	module.exports=(extend=false)=>{
		if( extend && !Promise.wait ) {
			Promise.wait = __promiseWaitAll;
		}
		
		return __promiseWaitAll;
	};
})();
