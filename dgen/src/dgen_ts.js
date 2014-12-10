var dgen = require("./dgen");


// Arithmetic sequence accepts start and step as a constructor parameters
var period = new dgen.seqs.Arithmetic(0, Math.PI * 2 / 25)
	.setMap(Math.sin);
var noise = new dgen.seqs.Random();
var trend = new dgen.seqs.Arithmetic(0, 0.05);
var data = new dgen.seqs.Combine([period, noise, trend]).array(100)


console.log(data);