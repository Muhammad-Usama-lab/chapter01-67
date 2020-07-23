//q1
var age=20;
alert('I am '+age+' years old');


//q2

let countvisit=0;
++countvisit;
alert('You have visited this site '+ countvisit +' time');


//q3

var BirthYear=+"2000";
document.write('My Birth Year is '+BirthYear );
document.write('<br>Data type of my declared variable is number');

//q4

var customername=prompt("Enter Name",'Your name is :');
var prod_name=prompt("Enter Product Name",'Product name is :');
var quan=prompt("Enter Quantity",'Enter Quantity of '+prod_name+' you want to purchase');

document.writeln('<br><b>'+customername +'</b> ordered <b>'+quan+ '-'+prod_name+'</b>(s)'+' on XYZ Clothing Store');
