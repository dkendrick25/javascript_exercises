var bill = 54.12;
var serviceLevel = "good";

if(serviceLevel === "good") {
  var billTotal = bill + (bill * .2);
  console.log(billTotal);
} else if (serviceLevel === "fail") {
  billTotal = bill + (bill * .15);
  console.log(billTotal);
} else if (serviceLevel === "bad") {
  billTotal = bill + (bill * .1);
  console.log(billTotal);
} else {
  billTotal = bill;
}
