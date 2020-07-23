    // ----------------------- ASSIGNMENT No. 09 -----------------------------


    
//CHAPTER 38-42

    //Q1.
    document.write();
    power(3,3);

    function power(a,b){
        var num=a;
        temp=num;
        var pwr=b;
        

        for(var i=1;i<=pwr-1;i++){

            num=temp*num;

        }

        document.write(num);
    }



    //Q2.

    

    document.write('<br><br><br>');
    leapYearCheck(prompt('Leap year Check','enter any year'));

    

    function leapYearCheck(year){

        if(year % 4==0){
            if(year % 100==0){

                if(year % 400 ==0){

                    document.write(year +' is Leap Year.');
                }
                else{
                    document.write(year +' is not Leap Year.');
                }

            }else{
                document.write(year +' is Leap Year.');
            }
            

        }else{
            document.write(year +' is not a Leap Year.');
        }

        

    }


    //Q3.

    var sideA=10;
    var sideB=7;
    var sideC=5;

    var S=calculateS(sideA,sideB,sideC);
    var area=calculateArea(sideA,sideB,sideC);
    document.write('<br><br><br>');
    document.write('Area for Triangle: (a,b,c)=('+sideA+','+sideB+','+sideC+') is :'+area);



    function calculateS(a,b,c){
        var S=(a+b+c)/2;
        return S;
    }
    function calculateArea(a,b,c){
        var s=calculateS(a,b,c);
var area=s*(s-a)*(s-b)*(s-c);
return area;
        
    }




    
    
    
    //Q4.
    var english=60;
    var pst=70;
    var maths=100;
    main(english,pst,maths);


    function main(a,b,c){
        var average=avg(a,b,c);
        var percentage=Per(a,b,c);
        document.write('<br><br><br>');
        document.write('Marks of Students : <br> English:'+english+'<br>'+'Pakistan Studies:'+pst+'<br>Mathematics:'+maths);
        document.write('<br>Average : '+average.toFixed(2));
        document.write('<br>Percentage : '+percentage+"%");

        
    }
    function avg(a,b,c){

        return (a+b+c)/3;
    }
    function Per(a,b,c){
        var obtained=a+b+c;

        var total=100+75+75;
        return (obtained/total)*100;

    }





    //Q5.

    function Index(chaar){
            


    }   


    //Q6.
    var sentence='Karachi is the biggest City.';
    
    
    document.write('<br><br><br>');
    document.write('Original Sentence: '+sentence+'<br>');
    document.write('Emitted Vowels: '+removeVowel(sentence));
    
    
    
    


    function removeVowel(sentence){
        

for(var i=0;i<sentence.length;i++){

    
    if(sentence.slice(i,i+1)=='a'){
        sentence=sentence.replace(/a/g,"");

    }else if(sentence.slice(i,i+1)=='e'){
        sentence=sentence.replace(/e/g,"");

    }else if(sentence.slice(i,i+1)=='i'){
        sentence=sentence.replace(/i/g,"");

    }else if(sentence.slice(i,i+1)=='o'){
        sentence=sentence.replace(/o/g,"");

    }else if(sentence.slice(i,i+1)=='u'){
        sentence=sentence.replace(/u/g,"");

    }
    

        }
        
        return sentence;
            }
        


    //Q7.

        var vowell=['a','e','i','o','u'];
        var comp="";
        var count=0;
        document.write('<br><br><br>');
        var sent="'Pleases read this application and give me gratuity'";
        document.write('Sentence to search succession vowels: '+sent);
            countSuccession();

            function countSuccession(){
        for(var i=0;i<vowell.length;i++){

            for(var j=0; j<vowell.length;j++){
                comp=vowell[i]+vowell[j];
                for(var k=0;k<sent.length;k++){
                    if(sent.slice(k,k+2)==comp){
                        count++;
                    }

                }
            }
        }
        document.write('<br> Count: '+count);
    }

    //Q8.
    
    var distance=prompt('Distance between two cities','enter distance here in Kilometers ...');
    document.write('<br><br><br>');
    var meters=convertMeters();
    document.write(distance +' Kilometers'+ ' = '+meters+' meters');
    var feets=convertfeet();
    document.write('<br>'+distance +' Kilometers'+ ' = '+feets.toFixed(2)+' feets');
    var inches=convertInch();
    document.write('<br>'+distance +' Kilometers'+ ' = '+inches.toFixed(2)+' inches');
    var centimeters=convertCentimeters();
    document.write('<br>'+distance +' Kilometers'+ ' = '+centimeters.toFixed(2)+' centimeters');
    function convertMeters(){

        var meter=distance*1000;
        return meter;
    }

    function convertfeet(){
        var feet=meters*3.28084;
        return feet;

    }

    function convertInch(){
        var inch=feets*12;
        return inch;

    }
    
    function convertCentimeters(){
        var cent=meters*100;
        return cent;

    }

        

    //Q9.
    var overTime,overTimePay,workingHours;

        
            workingHours=60;
            if(workingHours > 40){

                overTime = workingHours -40;
                overTimePay= overTime * 12;
                document.write('<br><br><br> Working Hours: '+workingHours);
                document.write('<br>Over Time Pay (Rs.): '+overTimePay);

            }
            


    //Q10.

        var withDraw =prompt('Withdraw','enter withdraw amount');
        var hundreds=Math.floor((withDraw/100));
        var fiftys=Math.floor((withDraw % 100)/50);
        var tens=Math.floor(((withDraw % 100) % 50)/10);
        document.write('<br><br><br> You have '+tens+' ten notes');
        document.write('<br> You have '+fiftys+' fifty notes');
        document.write('<br> You have '+hundreds+' hundred notes');


//CHAPTER 43-48


    //Q1.
    function pop(){
        alert('Alert Box');
    }

    //Q2.
    function showMessage(){
        alert('Thanks for purchasing phone from us');
    }

    

    //Q3.


    function deleteRow(e){

        (e.parentNode).parentNode.remove();

    }


    //Q4. done on img.


    //Q5.
var count=0;

function decrease(){
    
    if(count==0){
        alert('No more decrement possible.');
    }
    else{
        count--;        
        
        
    }
    setInterval(function(){
        document.getElementById('counter').innerHTML=count;
    },100);
    
}
function increase(){
   count++;
   setInterval(function(){
    document.getElementById('counter').innerHTML=count;
},100);
   
}




//CHaPTER 49-52

    //Q1.

    function showData(){

        var name,email,number,fName;
        name=document.getElementById('name').value;
        fName=document.getElementById('fName').value;
        number=document.getElementById('Contact').value;
        email=document.getElementById('email').value;

        if(name!="" && fName!=""&& number!="" && email!=""){

            document.getElementById('display').style.display="inline-block";

        document.getElementById('fillName').innerHTML=name;
        document.getElementById('fillfName').innerHTML=fName;
        document.getElementById('fillContact').innerHTML=number;
        document.getElementById('fillEmail').innerHTML=email;
        }else{
            alert('Fill all fields first');
        }

        


    }


    //Q2.


    var Count=0;
    function showMore(){
        Count++;
        if(Count%2==1){

            document.getElementById('more').style.display="block";
            document.getElementById('showLink').innerHTML="show less";
        }else{
            document.getElementById('more').style.display="none";
            document.getElementById('showLink').innerHTML="show more";
        }
        
    }




    //Q3.
    function Details(){



        

        
        //GET TABLE AND DATA

        var listTable=document.getElementById('List');
        var name,Class,fName,School;
        name=document.getElementById('naam').value;
        Class=document.getElementById('class').value;
        fName=document.getElementById('fnaam').value;
        School=document.getElementById('snaam').value;
        if(name!="" && Class!="" && fName!="" && School!=""){


 // CREATE ROW REGISTERATION

 var row=document.createElement('tr');
 // CREATE COLUMN REGISTERATION   COL-1

 var columnName=document.createElement('td');
 columnName.innerHTML=name;
//COL-2

 var columnFName=document.createElement('td');
 columnFName.innerHTML=fName;
// COL-3

 var columnClass=document.createElement('td');
 columnClass.innerHTML=Class;
// COL-4

 var columnSchool=document.createElement('td');
 columnSchool.innerHTML=School;



 // CREATE EDIT BUTTON
var editBtn=document.createElement('button');
var EditText=document.createTextNode('Edit');
editBtn.setAttribute('onclick','EDITROW(this);');
editBtn.appendChild(EditText);
editBtn.setAttribute(
    'class','btn'
);


// CREATE DELETE BUTTON

var deleteBtn=document.createElement('button');
var deleteText=document.createTextNode('Delete');
deleteBtn.setAttribute('onclick','DELETEROW(this);');
deleteBtn.appendChild(deleteText);
deleteBtn.setAttribute(
    'class','btn'
);






// COL-5
var columnEditDelete=document.createElement('td');
columnEditDelete.appendChild(editBtn);
columnEditDelete.appendChild(deleteBtn);


// ADDING COLUMNS TO ROW

 row.appendChild(columnName);
 row.appendChild(columnFName);
 row.appendChild(columnClass);
 row.appendChild(columnSchool);
 row.appendChild(columnEditDelete);
 listTable.appendChild(row);


 ClearALL();

        }
        else{
            alert('Fill all fields first');
        }
       





        console.log(row);
    }


    
    function DELETEROW(e){
        (e.parentNode).parentNode.remove();
        console.log(e);

    }

    
    
    var inputFName,inputName,inputClass,inputSchool;





    function EDITROW(e){
        if((e.parentNode).parentNode.firstChild.innerHTML!=""){

        // CREATING ALL INPUTS
        inputName=document.createElement('input');
        inputFName=document.createElement('input');
        inputClass=document.createElement('input');
        inputSchool=document.createElement('input');

        // PASSING VALUES TO INPUTS 
        inputName.value=(e.parentNode).parentNode.firstChild.innerHTML;
        inputFName.value=(e.parentNode).parentNode.childNodes[1].innerHTML;
        inputClass.value=(e.parentNode).parentNode.childNodes[2].innerHTML;
        inputSchool.value=(e.parentNode).parentNode.childNodes[3].innerHTML;

        // SETTING INPUTS TO TABLE

        // INPUT ONE

        var inputOne=(e.parentNode).parentNode.firstChild;
        inputOne.appendChild(inputName);
       

        // INPUT TWO
        var inputTwo=(e.parentNode).parentNode.childNodes[1];
        inputTwo.appendChild(inputFName);

        // INPUT THREE
        var inputThree=(e.parentNode).parentNode.childNodes[2];
        inputThree.appendChild(inputClass);

        // INPUT FOUR
        var inputFour=(e.parentNode).parentNode.childNodes[3];
        inputFour.appendChild(inputSchool);
        
        // UPDATE BTN


        var updateBtn=document.createElement('button');
        var updateText=document.createTextNode('Update');
        updateBtn.appendChild(updateText);
        updateBtn.setAttribute('onclick','updateValues(this);');
        updateBtn.setAttribute('class','btn');
        e.parentNode.appendChild(updateBtn);




        console.log(inputFName);
        
        
    }

    }


    function updateValues(e){

        var val1=e.parentNode.parentNode.firstChild.childNodes[1].value;
        var val2=e.parentNode.parentNode.childNodes[1].childNodes[1].value;
        var val3=e.parentNode.parentNode.childNodes[2].childNodes[1].value;
        var val4=e.parentNode.parentNode.childNodes[3].childNodes[1].value;

        e.parentNode.parentNode.firstChild.firstChild.nodeValue=val1;
        e.parentNode.parentNode.childNodes[1].firstChild.nodeValue=val2;
        e.parentNode.parentNode.childNodes[2].firstChild.nodeValue=val3;
        e.parentNode.parentNode.childNodes[3].firstChild.nodeValue=val4;



        e.parentNode.parentNode.firstChild.removeChild(inputName);
        e.parentNode.parentNode.childNodes[1].removeChild(inputFName);
        e.parentNode.parentNode.childNodes[2].removeChild(inputClass);
        e.parentNode.parentNode.childNodes[3].removeChild(inputSchool);

        e.remove();
        

    }







            // --------------------- GENERAL CODE ------------------------

function ClearALL(){

    document.getElementById('naam').value="";
    document.getElementById('fnaam').value="";
    document.getElementById('class').value="";
    document.getElementById('snaam').value="";
}





    
