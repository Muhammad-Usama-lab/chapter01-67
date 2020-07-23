//Q1
var a=0,b=0,c=0;

a=+prompt('Addition of two numbers','Enter First number');
b =+prompt('Addition of two numbers','Enter Second number');
c=a+b;
document.write('<h3>Sum of '+a+' and '+b+' is '+c+'</h3>');


//Q2
    //subtraction    
var a=0,b=0,c=0;

a=+prompt('Subtraction of two numbers','Enter First number');
b =+prompt('Subtraction of two numbers','Enter Second number');
c=a-b;
document.write('<br><h3>Difference of '+a+' and '+b+' is '+c+'</h3>');


 //multiplication   
 var a=0,b=0,c=0;

 a=+prompt('Multiplication of two numbers','Enter First number');
 b =+prompt('Multiplication of two numbers','Enter Second number');
 c=a*b;
 document.write('<br><h3>Multiplication of '+a+' and '+b+' is '+c+'</h3>');

 //Modulus   
 var a=0,b=0,c=0;

 a=+prompt('Modulus of two numbers','Enter First number');
 b =+prompt('Modulus of two numbers','Enter Second number');
 c=a%b;
 document.write('<br><h3>Modulus of '+a+' and '+b+' is '+c+'</h3>');


 //Q3

 var value;
 document.write('<br>Value after Declaration is '+value);
 value=5;
 document.write('<br>Initial Value: '+value);
 value++;
 document.write('<br>Value after Increment is: '+value);
 value+=7;
 document.write('<br>Value after Addition is: '+value);
 value--;
 document.write('<br>Value after Decrement is: '+value);
 value%=3;
 document.write('<br>The Remainder is: '+value);


 //Q4
 document.write('<br><br> <h2>Answer to Question 4</h2><br><br>');

 var price=600;
 price*=5;
 document.write('<br><br>Total cost to buy 5 tickets to a movie is '+price+'PKR');


 //Q5
 document.write('<br><br> <h2>Answer to Question 5</h2><br><br>');

var number=6,result;

document.write('<b>Table of '+number+'</b><br>');
for(var i=1;i<=12;i++){
    result=number*i;
    document.write(number+' x '+i+' = '+result+'<br>');
}



//6
document.write('<br><br> <h2>Answer to Question 6</h2><br><br>');
var Fahrenheit,Celsius,Result;
Fahrenheit=+prompt('Temperature Converter','Enter temperature in Fahrenheit?');

Result=(Fahrenheit-32)*5/9;

document.write('<br>'+Fahrenheit+'<sup>o</sup>F = '+Result+' <sup>o</sup>C');


Celsius=+prompt('Temperature Converter','Enter temperature in Celsius?');

Result=(Celsius*9/5)+32;

document.write('<br>'+Celsius+'<sup>o</sup>C = '+Result+' <sup>o</sup>F');


//Q7
document.write('<br><br> <h2>Answer to Question 7</h2><br><br>');

document.write('<h1><b>Shopping Cart</b></h1><br>');
var price1,price2,quan1,quan2,tax,Total;

price1=24;
price2=30;
quan1=20;
quan2=100;
tax=200;

Total=(price1*quan1)+(price2*quan2)+tax;


document.write('Price of Item 1 is: '+price1);
document.write('<br>Price of Item 2 is: '+price2);
document.write('<br>Quantity of Item 1 is: '+quan1);
document.write('<br>Quantity of Item 2 is: '+quan2);
document.write('<br>Shipping Charges: '+tax);

document.write('<br>Total cost of your Order is:'+Total);


//Q8
document.write('<br><br> <h2>Answer to Question 8</h2><br><br>');
var marks_o=679,t_marks=850,percent;
percent=(marks_o/t_marks)*100;
document.write('Marks Obtained: '+marks_o);
document.write('<br>Total Marks: '+t_marks);
document.write('<br>Percentage: '+percent+'%');


//Q9
document.write('<br><br> <h2>Answer to Question 9</h2><br><br>');

document.write('<h1>Currency in PKR</h1><br>');
var USdollar=10,riyal=25,PKR;

PKR=(10*104.80)+(25*28);

document.write('Total currency in PKR is '+PKR);


//Q10
document.write('<br><br> <h2>Answer to Question 10</h2><br><br>');

var num=24;

document.write('Initiallized number is '+num);

num=((num+5)*10)/2;
document.write('<br> Final Answer :'+num);




//Q11
document.write('<br><br> <h2>Answer to Question 11</h2><br><br>');
var c_year=2020,age;
var year_birth=+prompt('Year of Birth','Your Birth Year is..');
if(year_birth>2020){

    alert('Sorry, Enter correct Year');
}
else if(year_birth===2020){

    document.write('<br>You are less then a Year Old');

}
else{
age=2020-year_birth;
document.write('<br> Current Year: '+c_year);
document.write('<br> Birth Year: '+year_birth);
    document.write('<br>Your Age is: '+age);
}

//Q12
document.write('<br><br> <h2>Answer to Question 12</h2><br><br>');

document.write("<h3>"+"The Geometrizer"+"<h3>");

var radius=20;
var pie=3.142;
var area,circum;

area=(pie*(radius*radius));
circum=(2*pie*radius);

document.write("<br>"+"Radius of Circle: "+radius);
document.write("<br>"+"The Circumference is: "+ circum);
document.write("<br>"+"The Area is: "+ area);


//Q13

document.write('<br><br> <h2>Answer to Question 13</h2><br><br>');


var fav_snack="Gol Gappy";
var age=20,max_age=56,snacks_per_day=2;


document.write("<br>"+"Favourite Snack: "+fav_snack);
document.write("<br>"+"Current Age: "+age);
document.write("<br>"+"Estimated Maximum Age: "+max_age);
document.write("<br>"+"Amount of Snack Per Day: "+snacks_per_day);


document.write("<br>"+"You will need "+ ((max_age-age)*snacks_per_day) +" " +fav_snack+" to last untill the ripe old age of "+max_age);








