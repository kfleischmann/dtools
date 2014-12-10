var dgen = require("./dgen");

var seq = new dgen.seqs.Arithmetic();

seq.setStart(3);
seq.setStep(0.5);
var data = seq.array(5);

console.log(data);