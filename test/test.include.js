/**
 * Project: 0064.tiinytiny
 * File: test-include
 * Author: JCloudYu
 * Create Date: Jun. 20, 2018 
 */
(()=>{
	"use strict";
	
	module.exports=async(extend=false)=>{
		const tiiny = require( extend ? '../entry.js' : '../safe.js' );
		const RInclude = extend ? global.include : tiiny.Include;
	
		let result = RInclude('./test/test.include.reach.js');
		process.stdout.write(`\n    Testing Include...\n`);
		process.stdout.write(`        checking inclusion from './test.include.reach.js'... ${result}\n`);
	};
})();
