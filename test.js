(() => {
    "use strict";



    const tiiny = require('./entry.js');
    
    Promise.resolve()
    .then(()=>{
    	process.stdout.write("Testing ImprintProperties...\n");
	
		{
			let target = {}; let passed = true;
			process.stdout.write("    readonly... ");
			tiiny.ImprintProperties(target, { prop: "val" }, [true, true, true]);
			tiiny.ImprintProperties(target, { prop2: "val2" }, [false, true, true]);
			
			try {
				target.prop = 1;
				passed = passed && false;
			} catch (e) {
				passed = passed && true;
			}
			
			try {
				target.prop2 = 1;
				passed = passed && true;
			} catch (e) {
				passed = passed && false;
			}
	
			process.stdout.write(passed ? "Pass!\n" : "Fail!\n");
		}
	
		{
			let target = {}; let passed = true; let passed2 = false;
			process.stdout.write("    enumerable... ");
			tiiny.ImprintProperties(target, { prop: "val" }, [false, false, true]);
			tiiny.ImprintProperties(target, { prop2: "val2" }, [false, true, true]);
			for( let idx in target ) {
				if ( idx == 'prop') {
					passed = false;
				}
				else
				if ( idx == 'prop2') {
					passed2 = true;
				}
			}
	
			process.stdout.write((passed && passed2) ? "Pass!\n" : "Fail!\n");
		}
		
		{
			let target = {}; let passed = true;
			process.stdout.write("    configurable... ");
			tiiny.ImprintProperties(target, { prop: "val" }, [false, true, false]);
			tiiny.ImprintProperties(target, { prop2: "val2" }, [false, true, true]);
	
			try {
				delete target.prop;
				passed = passed && false;
			} catch(e) {
				passed = passed && true;
			}
	
			try {
				delete target.prop2;
				passed = passed && true;
			} catch(e) {
				passed = passed && false;
			}
	
			process.stdout.write(passed ? "Pass!\n" : "Fail!\n");
		}
    })
	.then(()=>{ process.stdout.write("\n"); })
	.then(()=>{
		return new Promise((fulfill)=>{
			process.stdout.write("Testing PromiseWaitAll...\n");
			
			
			let DelayedCallback = (value, passed, delay=4)=>{
				return new Promise((fulfill, reject)=>{
					setTimeout(()=>{
						(passed ? fulfill : reject)( 'value' );
					}, ((Math.random() * delay * 1000)|0)+1000);
				});
			};
			
			Promise.resolve()
			.then(()=>{
				process.stdout.write("    check rejected... ");
				
				let pass = true;
				let manyJobs = [
					DelayedCallback(0, true),
					DelayedCallback(1, false),
					DelayedCallback(2, false),
					DelayedCallback(3, true),
					DelayedCallback(4, false),
					DelayedCallback(5, true)
				];
				let groundTruth = [true, false, false, true, false, true];
				
				
				
				return tiiny.PromiseWaitAll(manyJobs)
				.then(()=>{
					pass = pass && false;
				})
				.catch((results)=>{
					results.forEach((result, idx)=>{
						pass = pass && (result.seq === idx);
						pass = pass && (result.fulfilled === groundTruth[idx] );
					});
				})
				.then(()=>{
					process.stdout.write( pass ? "Pass!\n" : "Fail!\n" );
				});
			})
			.then(()=>{
				process.stdout.write("    check fulfilled... ");
				
				let pass = true;
				let manyJobs = [
					DelayedCallback(0, true),
					DelayedCallback(1, true),
					DelayedCallback(2, true),
					DelayedCallback(3, true),
					DelayedCallback(4, true),
					DelayedCallback(5, true)
				];
				let groundTruth = [true, true, true, true, true, true];
				
				
				return tiiny.PromiseWaitAll(manyJobs)
				.then((results)=>{
					results.forEach((result, idx)=>{
						pass = pass && (result.seq === idx);
						pass = pass && (result.fulfilled === groundTruth[idx] );
					});
				})
				.catch(()=>{ pass = pass && false; })
				.then(()=>{
					process.stdout.write(pass ? "Pass!\n" : "Fail!\n");
				});
			}).then(fulfill);
		});
	})
	.then(()=>{process.stdout.write("\n");});
})();
