/**
 * Project: 0064.tiinytiny
 * File: test.imprint-properties.js
 * Author: JCloudYu
 * Create Date: Jun. 20, 2018 
 */
(()=>{
	"use strict";
	
	const tiiny = require('../entry.js');
	
	module.exports=async()=>{
		process.stdout.write( "Testing ImprintProperties...\n");
		{
			process.stdout.write("    boolean options...\n");
			{
				{
					let target = {}; let passed;
					tiiny.ImprintProperties(target, {prop:"val"}, false);
					tiiny.ImprintProperties(target, {prop2:"val2"}, true);
					
					process.stdout.write("        checking writable on false... ");
					passed = true;
					try {
						target.prop = 1;
						passed = passed && false;
					} catch (e) {
						passed = passed && true;
					}
					process.stdout.write(`${passed?'pass':'fail'}\n`);
					
					process.stdout.write("        checking writable on true... ");
					passed = true;
					try {
						target.prop2 = 1;
						passed = passed && true;
					} catch (e) {
						passed = passed && false;
					}
					process.stdout.write(`${passed?'pass':'fail'}\n`);
				}
				
				
				{
					let target = {}; let passed;
					tiiny.ImprintProperties(target, {prop:"val"}, false);
					tiiny.ImprintProperties(target, {prop2:"val2"}, true);
					
					process.stdout.write("        checking configurable on false... ");
					passed = true;
					try {
						delete target.prop;
						passed = passed && false;
					} catch (e) {
						passed = passed && true;
					}
					process.stdout.write(`${passed?'pass':'fail'}\n`);
					
					process.stdout.write("        checking configurable on true... ");
					passed = true;
					try {
						delete target.prop2;
						passed = passed && true;
					} catch (e) {
						passed = passed && false;
					}
					process.stdout.write(`${passed?'pass':'fail'}\n`);
				}
				
				
				
				{
					let target = {}; let passed;
					tiiny.ImprintProperties(target, {prop:"val"}, false);
					tiiny.ImprintProperties(target, {prop2:"val2"}, true);
					
					process.stdout.write("        checking enumerable on false... ");
					passed = false;
					for(let idx in target) {
						if (idx === 'prop') {
							passed = passed || true;
						}
					}
					process.stdout.write(`${passed?'pass':'fail'}\n`);
					
					process.stdout.write("        checking enumerable on true... ");
					for(let idx in target) {
						if (idx === 'prop2') {
							passed = passed || true;
						}
					}
					process.stdout.write(`${passed?'pass':'fail'}\n`);
				}
			}
			
			process.stdout.write("\n    array options...\n");
			{
				process.stdout.write("        options=[?, false, true]...\n");
				{
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, true]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [true, false, true]);
						
						process.stdout.write("            checking writable on [false, false, true]... ");
						passed = true;
						try {
							target.prop = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking writable on [true, false, true]... ");
						passed = true;
						try {
							target.prop2 = 1;
							passed = passed && true;
						} catch (e) {
							passed = passed && false;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, true]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [true, false, true]);
						
						process.stdout.write("            checking configurable on [false, false, true]... ");
						passed = true;
						try {
							delete target.prop;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking configurable on [true, false, true]... ");
						passed = true;
						try {
							delete target.prop2;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, true]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [true, false, true]);
						
						process.stdout.write("            checking enumerable on [false, false, true]... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking enumerable on [true, false, true]... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop2') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
				}
				
				process.stdout.write("\n        options=[false, ?, true]...");
				{
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, true]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [false, true, true]);
						
						process.stdout.write("\n            checking writable on [false, false, true]... ");
						passed = true;
						try {
							target.prop = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking writable on [false, true, true]... ");
						passed = true;
						try {
							target.prop2 = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, true]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [false, true, true]);
						
						process.stdout.write("            checking configurable on [false, false, true]... ");
						passed = true;
						try {
							delete target.prop;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking configurable on [false, true, true]... ");
						passed = true;
						try {
							delete target.prop2;
							passed = passed && true;
						} catch (e) {
							passed = passed && false;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, true]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [false, true, true]);
						
						process.stdout.write("            checking enumerable on [false, false, true]... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking enumerable on [false, true, true]... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop2') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
				}
				
				process.stdout.write("\n        options=[false, false, ?]...");
				{
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, false]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [false, false, true]);
						
						process.stdout.write("\n            checking writable on [false, false, false]... ");
						passed = true;
						try {
							target.prop = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking writable on [false, false, true]... ");
						passed = true;
						try {
							target.prop2 = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, false]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [false, false, true]);
						
						process.stdout.write("            checking configurable on [false, false, false]... ");
						passed = true;
						try {
							delete target.prop;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking configurable on [false, false, true]... ");
						passed = true;
						try {
							delete target.prop2;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, [false, false, false]);
						tiiny.ImprintProperties(target, {prop2:"val2"}, [false, false, true]);
						
						process.stdout.write("            checking enumerable on [false, false, false]... ");
						passed = true;
						for(let idx in target) {
							if (idx === 'prop') {
								passed = passed && false;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking enumerable on [false, false, true]... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop2') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
				}
			}
			
			process.stdout.write("\n    object options...\n");
			{
				process.stdout.write("        options={writable:?, configurable:false, enumerable:true}...\n");
				{
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:true});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:true, configurable:false, enumerable:true});
						
						process.stdout.write("            checking writable on {writable:false, configurable:false, enumerable:true}... ");
						passed = true;
						try {
							target.prop = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking writable on {writable:true, configurable:false, enumerable:true}... ");
						passed = true;
						try {
							target.prop2 = 1;
							passed = passed && true;
						} catch (e) {
							passed = passed && false;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:true});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:true, configurable:false, enumerable:true});
						
						process.stdout.write("            checking configurable on {writable:false, configurable:false, enumerable:true}... ");
						passed = true;
						try {
							delete target.prop;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking configurable on {writable:true, configurable:false, enumerable:true}... ");
						passed = true;
						try {
							delete target.prop2;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:true});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:true, configurable:false, enumerable:true});
						
						process.stdout.write("            checking enumerable on {writable:false, configurable:false, enumerable:true}... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking enumerable on {writable:true, configurable:false, enumerable:true}... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop2') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
				}
				
				process.stdout.write("\n        options={writable:false, configurable:?, enumerable:true}...");
				{
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:true});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:false, configurable:true, enumerable:true});
						
						process.stdout.write("\n            checking writable on {writable:false, configurable:false, enumerable:true}... ");
						passed = true;
						try {
							target.prop = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking writable on {writable:false, configurable:true, enumerable:true}... ");
						passed = true;
						try {
							target.prop2 = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:true});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:false, configurable:true, enumerable:true});
						
						process.stdout.write("            checking configurable on {writable:false, configurable:false, enumerable:true}... ");
						passed = true;
						try {
							delete target.prop;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking configurable on {writable:false, configurable:true, enumerable:true}... ");
						passed = true;
						try {
							delete target.prop2;
							passed = passed && true;
						} catch (e) {
							passed = passed && false;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:true});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:false, configurable:true, enumerable:true});
						
						process.stdout.write("            checking enumerable on {writable:false, configurable:false, enumerable:true}... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking enumerable on {writable:false, configurable:true, enumerable:true}... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop2') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
				}
				
				process.stdout.write("\n        options={writable:false, configurable:false, enumerable:?}...");
				{
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:false});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:false, configurable:false, enumerable:true});
						
						process.stdout.write("\n            checking writable on {writable:false, configurable:false, enumerable:false}... ");
						passed = true;
						try {
							target.prop = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking writable on {writable:false, configurable:false, enumerable:true}... ");
						passed = true;
						try {
							target.prop2 = 1;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:false});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:false, configurable:false, enumerable:true});
						
						process.stdout.write("            checking configurable on {writable:false, configurable:false, enumerable:false}... ");
						passed = true;
						try {
							delete target.prop;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking configurable on {writable:false, configurable:false, enumerable:true}... ");
						passed = true;
						try {
							delete target.prop2;
							passed = passed && false;
						} catch (e) {
							passed = passed && true;
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
					
					
					
					{
						let target = {}; let passed;
						tiiny.ImprintProperties(target, {prop:"val"}, {writable:false, configurable:false, enumerable:false});
						tiiny.ImprintProperties(target, {prop2:"val2"}, {writable:false, configurable:false, enumerable:true});
						
						process.stdout.write("            checking enumerable on {writable:false, configurable:false, enumerable:false}... ");
						passed = true;
						for(let idx in target) {
							if (idx === 'prop') {
								passed = passed && false;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
						
						process.stdout.write("            checking enumerable on {writable:false, configurable:false, enumerable:true}... ");
						passed = false;
						for(let idx in target) {
							if (idx === 'prop2') {
								passed = passed || true;
							}
						}
						process.stdout.write(`${passed?'pass':'fail'}\n`);
					}
				}
			}
		}
	}
})();
