/**
 * Project: 0064.tiinytiny
 * File: test-include
 * Author: JCloudYu
 * Create Date: Jun. 20, 2018 
 */
(()=>{
	"use strict";
	
	const tiiny = require('../entry');
	
	module.exports=async()=>{
		let result = tiiny.Include('./test/test.include.reach.js');
		process.stdout.write(`\n Testing Include...\n`);
		process.stdout.write(`    checking inclusion from './test.include.reach.js'... ${result}\n`);
	};
})();
