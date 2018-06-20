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
		const WaitAll = extend ? Promise.wait : tiiny.PromiseWaitAll;
	
		process.stdout.write( "\n    Testing PromiseWaitAll...\n");
		{
			let DelayedCallback = (value, passed)=>{
				return new Promise((fulfill, reject)=>{
					setTimeout(()=>{
						(passed ? fulfill : reject)(value);
					}, 0);
				});
			};
			
			
			process.stdout.write("        check rejected condition... ");
			{
				let pass = true;
				let manyJobs = [
					DelayedCallback(0, true),
					DelayedCallback(1, false),
					DelayedCallback(2, false),
					DelayedCallback(3, true),
					DelayedCallback(4, false),
					DelayedCallback(5, true)
				];
				let gTruth = [true, false, false, true, false, true];
				
				
				
				await WaitAll(manyJobs)
				.then(()=>{
					pass = pass && false;
				})
				.catch((results)=>{
					results.forEach((result, idx)=>{
						pass = pass && (result.seq === result.result);
						pass = pass && (result.resolved === gTruth[idx] );
					});
				});
				process.stdout.write( pass ? "pass\n" : "fail\n" );
			}
			
			
			
			process.stdout.write("        check resolved condition... ");
			{
				let pass = true;
				let manyJobs = [
					DelayedCallback(0, true),
					DelayedCallback(1, true),
					DelayedCallback(2, true),
					DelayedCallback(3, true),
					DelayedCallback(4, true),
					DelayedCallback(5, true)
				];
				let gTruth = [true, true, true, true, true, true];
				
				
				await WaitAll(manyJobs)
				.then((results)=>{
					results.forEach((result, idx)=>{
						pass = pass && (result.seq === result.result);
						pass = pass && (result.resolved === gTruth[idx] );
					});
				})
				.catch(()=>{ pass = pass && false; });
				
				process.stdout.write(pass ? "pass\n" : "fail\n");
			}
		}
	};
})();
