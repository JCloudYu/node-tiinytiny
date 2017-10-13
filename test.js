(() => {
    "use strict";



    const tiiny = require('./entry.js');
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
	
	
	
	process.stdout.write("Testing PromiseWaitAll... ");
	{
		let DelayedCallback = (value, pass, delay=4)=>{
			return new Promise((fulfill, reject)=>{
				setTimeout(()=>{
					(pass ? fulfill : reject)();
				}, ((Math.random() * delay * 1000)|0)+1000);
			});
		};
		let manyJobs = [
			DelayedCallback(1, true),
			DelayedCallback(2, false),
			DelayedCallback(3, false),
			DelayedCallback(4, true),
			DelayedCallback(5, false),
			DelayedCallback(6, true)
		];
		
		let pass = true;
		tiiny.PromiseWaitAll(manyJobs)
		.then(()=>{ pass = pass && false; })
		.catch(()=>{ pass = pass && true; });
		
		
		manyJobs = [
			DelayedCallback(1, true),
			DelayedCallback(2, true),
			DelayedCallback(3, true),
			DelayedCallback(4, true),
			DelayedCallback(5, true),
			DelayedCallback(6, true)
		];
		
		
		tiiny.PromiseWaitAll(manyJobs)
		.then(()=>{ pass = pass && true; })
		.catch(()=>{ pass = pass && false; });
		
		process.stdout.write(pass ? "Pass!\n" : "Fail!\n");
	}
})();
