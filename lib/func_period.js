/**
 * Project: 0064.tiinytiny
 * File: func_period.js
 * Author: JCloudYu
 * Create Date: Jun. 24, 2018 
 */
(()=>{
	"use strict";
	
	
	const {imprint} = module.parent;
	
	function Period(callback, countdown=false){
		let _interface,
		_count	= countdown,
		_hang	= false,
		_next	= null,
		_cb		= callback,
		_stopCB = [],
		_prev	= 0,
		_trig	= async()=>{
			if ( _count !== false ) {
				if ( _count <= 0 ) {
					_next = null;
				}
				else {
					_count--;
				}
			}
		
		
		
			if ( _next && !_hang ) {
				let now = (new Date()).getTime()/1000.0;
				let diff = now - _prev;
				_prev = now;
				
				await _cb(diff);
			}
			
			
			
			if ( _next !== null ) {
				_next = setTimeout(_trig, 0);
			}
			else {
				_stopCB.forEach((cb)=>{cb();});
			}
		};
	
		
		_interface = {
			get waitable(){
				return new Promise((fulfill)=>{
					_stopCB.push(fulfill);
				});
			},
			get isStopped(){
				return _next === null;
			},
			stop(){
				_next = null;
				return _interface;
			},
			pause(){
				_hang = true;
				return _interface;
			},
			resume(){
				_hang = false;
				return _interface;
			}
		};
		
		_prev = (new Date()).getTime()/1000.0;
		_next = setTimeout(_trig, 0);
		return _interface;
	}
	
	module.exports=(extend=false)=>{
		if( extend && !global.setPeriod ) {
			imprint(global, {setPeriod:Period}, false);
		}
		return Period;
	};
})();

