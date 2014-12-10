var dgen = require("./dgen");

var argv = process.argv;
var count = argv[2];

// Arithmetic sequence accepts start and step as a constructor parameters
var period = new dgen.seqs.Arithmetic(0, Math.PI * 2 / 25)
	.setMap(Math.sin);
var noise = new dgen.seqs.Random();
var trend = new dgen.seqs.Arithmetic(0, 0.05);
var data = new dgen.seqs.Combine([period, noise, trend]).array(count)

data.forEach( function(value, i){
  console.log(i+","+value);
});
