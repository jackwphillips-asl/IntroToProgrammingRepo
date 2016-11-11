// Commission.js calculates the commission earned.

var salesTotal = 0;
var commTotal = 0;

for (var i=0; i<3; i++) {
	var saleString = prompt("What is the sale amount?");
    var commRateString = prompt("What is the commission rate?");
	sale = parseFloat(saleString);
	commRate = parseFloat(commRateString);

  	var comm = sale * (commRate / 100.0);

  	salesTotal = salesTotal + sale;
  	commTotal = commTotal + comm;
}

var message1 = "Total sales: " + salesTotal.toFixed(2);
var message2 = "Total commission: " + commTotal.toFixed(2);

var para = document.createElement("p");
var text = document.createTextNode(message1);
para.appendChild(text);
document.body.appendChild(para);

para = document.createElement("p");
text = document.createTextNode(message2);
para.appendChild(text);
document.body.appendChild(para);
