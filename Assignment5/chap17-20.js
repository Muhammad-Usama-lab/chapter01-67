
//Q1

var arr=[[],[]];


//Q2

var a = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];


for (var i=0; i<a.length; i++)
{
   for (var j=0; j<a[0].length; j++) 
     {
      document.write(" " + a[i][j]);
     }
     document.write("</br>");
}


//Q3
for(var i=0; i<=10; i++) 
{
    document.write('<br>' + i);
}


//Q4


var tab=+prompt("Table Printer ","enter table numner here");

var length=+prompt("Length","enter length here");

document.write("<br><br> Table Number : " + tab);
document.write("<br>Length : " + length);

for(var k=1; k<=length; k++) 
{
    document.write("<br>"+tab + " x " + k + " = " + tab*k);
}



//Q5
document.writeln('<br><br>');

var fruits = ["Apple", "Banana", "Kiwi", "Orange","Mango"]

for(var i=0; i<fruits.length; i++) 
{
    document.write("<br>" + fruits[i]);
}


document.writeln('<br><br>');
for(var i=0; i<fruits.length; i++) 
{
    document.write("<br> Element at Index "+ i + " is " + fruits[i]);
}



//Q6



document.write("<b>Counting:</b>");

document.writeln('<br><br>');


for(var i=1;i<=15;i++){

    if(i<15){
document.write(i +' , ');
    }else{
        document.write(i);
    }


}





document.write('<br><br>');

document.write("<b>Reverse Counting:</b>");

document.write('<br><br>');

for(var i=10; i>0; i--) 
{

        if(i>1)
        {
            document.write(i +' , ');
        }else{
            document.write(i);
        }
    
    

}


document.writeln('<br><br>');

document.write("<b>Even:</b>");

document.writeln('<br><br>');

for(var i=0; i<=10; i++) 
{   
if(i<=9){
    

    document.writeln(i*2+' , ');
}else{
    document.writeln(i*2);
}    
}


document.writeln('<br><br>');

document.write("<b>Odd:</b>");

document.writeln('<br><br>');

for(var i=1; i<=10; i++) 
{   
if(i<=9){
    document.writeln((i*2)-1 +' , ');
}else{
    document.writeln((i*2-1));
}    
}


document.writeln('<br><br>');

document.write("<b>Even:</b>");

document.writeln('<br><br>');

for(var i=1; i<=10; i++) 
{   
if(i<=9){
    

    document.writeln(i*2+'k , ');
}else{
    document.writeln(i*2+'k');
}    
}



//Q7

document.writeln('<br><br>');

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]

var bake=prompt("Welcome To ABC Bakery.What do you want to order Sir/Madam").toLowerCase();

for( var i=0; i<=10; i++)
{
    if(bake === bakery[i])
        {
            document.write(bake + " is availaible at index " + i + " in our bakery");
            break;
        }
        else
        {
            document.write("We are Sorry " + bake + " is not availaible in our bakery");
            break;
        }
}

document.writeln('<br><br>');
//Q8

var arr = [24, 53, 78, 91, 12];

document.write("Array Items "+arr);
document.writeln('<br>');
document.write("The Largest number is "+Math.max(...arr));
document.writeln('<br><br>');


var arr1 = [24, 53, 78, 91, 12];

document.write("Array Items "+arr1);
document.writeln('<br>');
document.write("The smallest number is "+ Math.min(...arr1));




//Q9
document.writeln('<br><br>');

for(var i=5; i<=100; i+=5) 
{
    if(i<=95){

    
        document.write( i + ' , ');
    }else{
        document.write( i );
    }
}

