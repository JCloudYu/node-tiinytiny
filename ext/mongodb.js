/**
 * Project: 0064.tiinytiny
 * File: mongodb
 * Author: JCloudYu
 * Create Date: Jul. 09, 2018 
 */
(()=>{
	"use strict";
	
	const {Cursor} = require('mongodb');
	
	let _originalForEach = Cursor.prototype.forEach;
	Cursor.prototype.forEach=function(iterateCB, endCB=null){
		if ( arguments.length <= 1 ) {
			return new Promise((resolve, reject)=>{
				_originalForEach.call(this, iterateCB, (error)=>{
					( error ) ? reject(error) : resolve();
				});
			});
		}
		else {
			return _originalForEach.call(this, iterateCB, endCB);
		}
	};
})();
