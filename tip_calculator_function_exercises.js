//Write a function that takes the amount of a bill as a number, and a level of service - which can be "good", "fair", or "bad", and returns the total bill with the tip included. The amount of tip given for each level of service is defined by:

/*```
"good" -> 20%
"fail" -> 15%
"bad"  -> 10%
```*/


function tipCalculator(bill, serviceLevel) {
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
}
 tipCalculator(24.82, "bad");
