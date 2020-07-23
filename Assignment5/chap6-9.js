//Q1

document.write('<br><br> <h2>Answer to Question 1</h2><br><br>');
var a = 10;

document.write("Result:" + "<br>");
document.write("Value of a is : " + a + "<br>");

for(var i=0;i<=20;i++){
document.write('-');
}


document.write("<br>Value of ++a is : " + ++a + "<br>");
document.write("Value of a is : " + a + "<br>" + "<br>");


document.write("Value of a++ is : " + a++ + "<br>");
document.write("Value of a is : " + a + "<br>" + "<br>");


document.write("Value of --a is : " + --a + "<br>");
document.write("Value of a is : " + a + "<br>" + "<br>");



document.write("Value of a-- is : " + a-- + "<br>");
document.write("Value of a is : " + a + "<br>" + "<br>");

for(var i=0;i<=20;i++){
document.write('-');
}

//Q2
document.write('<br><br> <h2>Answer to Question 2</h2><br><br>');
var b = 2, c = 1;



document.write("<br>Value of b is : " + b + "<br>");
document.write("Value of c is : " + c + "<br>");

var res = --b - --c + ++c + c--;

document.write("Value of --b - --c + ++c + c-- is : " + res + "<br>");



//Q3
document.write('<br><br> <h2>Answer to Question 3</h2><br><br>');

var u_name=prompt('Enter Your Name','Your name is ...');
alert('Welcome to My JavaScript Queries, '+u_name);
document.write('Given in alert');



//Q5
document.write('<br><br> <h2>Answer to Question 5</h2><br><br>');


var number=5,result;
var number_user=+prompt("Enter Number for Table");
if(m=number_user===0){
    document.write('<b>Table of '+number+'</b><br>');
    for(var i=1;i<=12;i++){
        result=number*i;
        document.write(number+' x '+i+' = '+result+'<br>');
    }
}else{
    var result2;
    document.write('<b>Table of '+number_user+' </b><br>');
    for(var i=1;i<=12;i++){
         result2=number_user*i;
        document.write(number_user+' x '+ i +' = '+result2+'<br>');
    }

}






//Q5


//Q6
document.write('<br><br> <h2>Answer to Question 6</h2><br><br>');

var sub1 = prompt("Enter First Subject : ");
var sub2 = prompt("Enter Second Subject : ");
var sub3 = prompt("Enter Third Subject : ");



var mark1 =+prompt(" Enter " + sub1 + " Marks : ");
var mark2=+prompt(" Enter " + sub2 + " Marks : ");
var mark3=+prompt(" Enter " + sub3 + " Marks : ");
var marks_total = mark1+mark2+mark3;
var percent1=(mark1/100)*100;
var percent2=(mark2/100)*100;
var percent3=(mark3/100)*100;
var total_percent=(percent3+percent1+percent2)/3;

document.write('<table>     <tr> <th>Subject</th><th>Total Marks</th><th>Marks Obtained</th><th>Percentage</th> </tr>');
document.write('<tr> <td>   '+sub1+'</td>  <td>'+100+'</td>    <td>'+mark1+'</td> <td>'+percent1+'%'+'</td> </tr>');
document.write('<tr> <td>  '+sub2+'</td>  <td>'+100+'</td>    <td>'+mark2+'</td> <td>'+percent2+'%'+'</td> </tr>');
document.write('<tr> <td>  '+sub3+'</td>  <td>'+100+'</td>    <td>'+mark3+'</td> <td>'+percent3+'%'+'</td> </tr>');
document.write('<tr><td></td> <td><b> '+300+' </b></td>    <td><b>'+marks_total+'</b></td> <td><b>'+total_percent+'%</b>'+'</td> </tr></table>');




// document.write("<h3>"+" Subject "+" Total Marks "+" Obtained Marks "+" Percentage "+"</h3>");
// document.write(sub1 + "  " + total + "  " + mark1 + "  " + (total/100*mark1)+"%" +"<br>");
// document.write(sub2 + "  " + total + "  " + mark2 + "  " + (total/100*mark2)+ "%" +"<br>");
// document.write(sub3 + "  " + total + "  " + mark3 + "  " + (total/100*mark3)+ "%" +"<br>");



