var usDist = parseInt(prompt("enter upstream distance"));
var usTime = parseInt(prompt("enter upstream time"));
var usSpeed = usDist/usTime;
var dsDist = parseInt(prompt("enter downstream distance"));
var dsTime = parseInt(prompt("enter downstream time"));
var dsSpeed = dsDist/dsTime;
var stillWaterSpeed;
stillWaterSpeed = (1/2)*(usSpeed+dsSpeed);
alert(stillWaterSpeed)