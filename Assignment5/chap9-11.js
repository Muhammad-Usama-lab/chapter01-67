//Q1
document.write('<br><br> <h2>Answer to Question 1</h2><br><br>');


var city=prompt('Enter City name','your city name is ...');
if(city==="Karachi"||city==="karachi"){

    alert('Welcome to City of Lights');

}

//Q2
document.write('<br><br> <h2>Answer to Question 2 given in alert</h2><br><br>');
var gender;
gender=prompt('Enter your Gender','Male or Female');
if(gender==='Male'||gender==='male'||gender==='MALE'){

    alert('Good Morning Sir');
}else if(gender==='FeMale'||gender==='female'||gender==='FEMALE'||gender==='Female'){
    alert("Good Morning Ma'am");
}else{
    alert("Good Morning Confused Gender");
}



//Q3
document.write('<br><br> <h2>Answer to Question 3</h2><br><br>');
var color1,color2,color3;
color1=prompt('Enter Traffic Colors','Enter First Color');
color2=prompt('Enter Traffic Colors','Enter Second Color');
color3=prompt('Enter Traffic Colors','Enter Third Color');

document.write('<table> <tr "> <th>Signal Colors</th>    <th>Message</th>      </tr>');

    document.write(' <tr  bgcolor="lightblue"> <td> <font color="Blue">'+color1+'</font></td>    <td><font color="Blue"> Must Stop </font></td>      </tr>');
    document.write(' <tr "> <td>'+color2+'</td>    <td> Ready to Move </td>      </tr>');
    document.write(' <tr  bgcolor="lightblue"> <td><font color="Blue">'+color3+'</font></td>    <td> <font color="Blue">Move Now </font></td>      </tr></table>');

//Q4
document.write('<br><br> <h2>Answer to Question 4</h2><br><br>');

var fuel=+prompt('Quantity of fuel in Car(In Litres)','Fuel in your car is... ');
if(fuel<0.5){
alert('Please Refill fuel in your car');
}


//Q5
document.write('<br><br> <h2>Answer to Question 5</h2><br><br>');


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}



if (true){

    alert("True");
    }

    if (false){
    alert("False");
    }





document.write('a.  given condition for variable a is true<br>');
document.write('b.  Alert Not Generated...<br>');
document.write('c.  condition 2 is true, condition 4 is true <br>');
document.write('d.  The cost equals<br>');
document.write('e.  True <br>');



//Q6
document.write('<br><br> <h2>Answer to Question 6</h2><br><br>');


var o_mark1=+prompt('Enter Marks for First Subject','Obtained Marks for subject 1 is...');
var o_mark2=+prompt('Enter Marks for Second Subject','Obtained Marks for subject 2 is...');
var o_mark3=+prompt('Enter Marks for Third Subject','Obtained Marks for subject 3 is...');

var t_marks_o=o_mark1+o_mark2+o_mark3;

var t_marks1=+prompt('Enter Total Marks for First Subject','Total Marks for subject 1 is...');
var t_marks2=+prompt('Enter Total Marks for Second Subject','Total Marks for subject 2 is...');
var t_marks3=+prompt('Enter Total Marks for Third Subject','Total Marks for subject 3 is...');

var total=t_marks1+t_marks2+t_marks3;

var percent=(t_marks_o/total)*100;
document.write('<h1>Marks Sheet</h1>');

document.write('Total Marks: '+total);
        document.write('<br>Marks Obtained: '+t_marks_o);
        document.write('<br>Percentage: '+percent+'%');


    if(percent>=80){
        document.write('<br>Grade: A<sup>+</sup>');
        document.write('<br>Remarks: Excellent');
    }else if(percent>=70){
        document.write('<br>Grade: A');
        document.write('<br>Remarks: Good');
    }else if(percent>=60){
        document.write('<br>Grade: B');
        document.write('<br>Remarks: You need to improve');
    }else if(percent<60){
        document.write('<br>Grade: Fail');
        document.write('<br>Remarks: Sorry');
    }
        
 //Q7
document.write('<br><br> <h2>Answer to Question 7 given in alert</h2><br><br>');       


var secret=7;

var number=+prompt('Guessing Game','Enter Secret Number');
if(number===secret){

    alert(' "Bingo! Correct answer"');
}
else if(number+1===secret){
    alert(' Close enough to the correct answer');
}

//Q8
document.write('<br><br> <h2>Answer to Question 8 given in alert</h2><br><br>');       

var num=+prompt('Divisible by 3 or NOT','Enter number here..');
if(num%3==0){
alert('Number is divisible by three');
}else{
    alert('Number is not divisible by three');
}







//Q9
document.write('<br><br> <h2>Answer to Question 9 given in alert</h2><br><br>');       
var numb=+prompt('EVEN or ODD','Enter number here...');
if(numb%2==0){
    alert('Number is Even');
}else{
    alert('Number is Odd');
}


//Q10
document.write('<br><br> <h2>Answer to Question 10 given in alert</h2><br><br>');       


var temp=+prompt('Temperature Check','What temp is in your surrounding...');
if(temp>40 && temp>=30){
    alert('It is too hot outside');
}else if(temp >30 && temp>=20){
    alert('The Weather today is Normal');
}else if(temp >20 && temp>=10){
    alert('Today’s Weather is cool');
}
else if(temp >=10){
    alert('OMG! Today’s weather is so Cool');
}



//Q11
document.write('<br><br> <h2>Answer to Question 11</h2><br><br>');       
var num1,num2;
var opr;
num1=+prompt('Calculator','Enter first operand');
num2=+prompt('Calculator','Enter second operand');
opr=prompt('Calculator','Enter Operator');
var result;
if(opr=="+"){
result=num1+num2;
    document.write(num1 +' + '+num2 +' = '+result);

}else if(opr=="-"){
    result=num1-num2;
    document.write(num1 +' - '+num2 +' = '+result);
}else if(opr=="*"){
    result=num1*num2;
    document.write(num1 +' x '+num2 +' = '+result);
}else if(opr=="/"){
    result=num1/num2;
    document.write(num1 +' / '+num2 +' = '+result);
}else if(opr=="%"){
    result=num1%num2;
    document.write(num1 +' % '+num2 +' = '+result);
}




