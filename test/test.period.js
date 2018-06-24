/**
 * Project: 0064.tiinytiny
 * File: test.promise-wait-all.js
 * Author: JCloudYu
 * Create Date: Jun. 20, 2018 
 */
(()=>{
	"use strict";
	
	module.exports=async(extend=false)=>{
		const tiiny = require( extend ? '../entry.js' : '../safe.js' );
		const Period = extend ? global.setPeriod : tiiny.Period;
		
	
		process.stdout.write( "\n    Testing Period...\n");
		{
			process.stdout.write("        check waitable period without times... ");
			{
				let period, pass=true, results=[], countdown=100;
				await (period = Period((delta)=>{
					if ( countdown > 0 ) {
						results.unshift(countdown--);
					}
					else {
						period.stop();
					}
				})).waitable;
				
				results.unshift(0);
				pass = pass && (results.length === 101);
				results.forEach((val, idx)=>{ pass = pass && (val===idx); });
				process.stdout.write( pass ? "pass\n" : "fail\n" );
			}
			
			
			
			process.stdout.write("        check waitable period with times... ");
			{
				let period, pass=true, results=[], counter=1;
				await (period = Period((delta)=>{
					if ( counter <= 200 ) {
						results.push(counter++);
					}
					else {
						period.stop();
					}
				}, 20)).waitable;
				
				results.unshift(0);
				pass = pass && (results.length === 21);
				results.forEach((val, idx)=>{ pass = pass && (val===idx); });
				process.stdout.write( pass ? "pass\n" : "fail\n" );
			}
			
			
			
			process.stdout.write("        check period without times... ");
			{
				let pass=true, results = [];
				await (new Promise((resolve)=>{
					let countdown=99;
					let period = Period((delta)=>{
						if ( countdown >= 0 ) {
							results.unshift(countdown--);
						}
						else {
							period.stop();
							resolve();
						}
					});
					
					results.push(100);
				}));
				
				pass = pass && (results.length === 101);
				results.forEach((val, idx)=>{ pass = pass && (val===idx); });
				process.stdout.write( pass ? "pass\n" : "fail\n" );
			}
			
			
			
			process.stdout.write("        check period with times... ");
			{
				let pass=true, results = [];
				await (new Promise((resolve)=>{
					let counter=1;
					let period = Period((delta)=>{
						if ( counter <= 200 ) {
							results.push(counter++);
						}
						else {
							period.stop();
							resolve();
						}
					}, 20);
					
					results.push(0);
					setTimeout(resolve, 1000);
				}));
				
				pass = pass && (results.length === 21);
				results.forEach((val, idx)=>{ pass = pass && (val===idx); });
				process.stdout.write( pass ? "pass\n" : "fail\n" );
			}
		}
	};
})();
