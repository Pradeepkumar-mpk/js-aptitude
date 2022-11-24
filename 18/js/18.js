var person1=parseInt(prompt("enter how many persons"));
var avg1=parseFloat(prompt("enter avg"));
var person2=parseInt(prompt("enter how many persons"));
var avg2=parseFloat(prompt("enter avg"));
avg=(person1*avg1+person2*avg2)/(person1+person2);
avg=parseFloat(avg);
alert(avg);