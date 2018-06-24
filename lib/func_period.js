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
		_trig	= ()=>{
			if ( _next !== null ) {
				_next=(_count===false||_count>0) ? setTimeout(_trig, 0) : null;
			}
		
			if ( _next && !_hang ) {
				let now = (new Date()).getTime()/1000.0;
				let diff = now - _prev;
				_prev = now;
				
				_cb(diff);
			}
			
			if (_next===null) { _stopCB.forEach((cb)=>{cb();}); }
			if (_count!==false) { _count--; }
		};
	
		
		_interface = {
			get waitable(){
				return new Promise((fulfill)=>{
					_stopCB.push(fulfill);
				});
			},
			start(){
				if ( !_next ) {
					_prev = (new Date()).getTime()/1000.0;
					_next = setTimeout(_trig, 0);
				}
				
				_hang = false;
				return this;
			},
			stop(){
				_next = null;
				return this;
			},
			pause(){
				_hang = true;
				return this;
			},
			resume(){
				_hang = false;
				return this;
			}
		};
		
		_interface.start();
		return _interface;
	}
	
	module.exports=(extend=false)=>{
		if( extend && !global.setPeriod ) {
			imprint(global, {setPeriod:Period}, false);
		}
		return Period;
	};
})();

