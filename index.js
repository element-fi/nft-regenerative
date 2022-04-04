const myArgs = process.argv.slice(2);
const { dumpProperties, clearBuildFolder, buildSetup, createFiles, createMetaData, displayRarity, showAllPossibleClashes, getColors, getLayers, listProperties, readProperties } = require("./src/main.js");
const { defaultEdition } = require("./src/config.js");
var edition = myArgs.length > 0 ? Number(myArgs[0]) : defaultEdition;
const { performance } = require('perf_hooks');
const fs = require('fs')

clearBuildFolder()
buildSetup()
readProperties()
// listProperties()
dumpProperties()
// edition = 10 //10*1000
// createFiles(edition,to_draw=true, debug=false).then( () => {
//   createMetaData()
//   // displayRarity() //show count of how many times each asset shows up and statistical test of likelihood
// });
// showAllPossibleClashes(to_draw=true);

// // test some stuff
// c = getColors()
// console.log(c)

let {names,rows} = dumpProperties()

console.log('break to inspect at the end')