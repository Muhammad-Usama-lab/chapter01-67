//Q1 //Q2
var std_name=[];
//Q3
var strings=['Usama','Kashif','Jamal'];
//Q4
var number=[1,2,3,4,5,6,7];
//Q5
var boolean=[true,false];
//Q6

var mix=[false,43,'Usama','BILAL'];

var qualifications=['','SSC','HSC','BSC','BS','BCOM','Ms','M. Phil','Phd'];
document.write('<h1>Qualifications:</h1>');
for( var i=1;i<qualifications.length;i++){

document.write('<br>'+ i +') '+ qualifications[i]);
}



//Q7


var names=new Array('Usman','Muhammad','Arsalan');
var scores=new Array(230,320,478);
var percent=[0,0,0];

for(var i=0;i<scores.length;i++){
    
    percent[i]=(scores[i]/500)*100;

}


for(var i=0;i<names.length;i++){
    
    document.write('<br>' +'<b>Score of '+names[i]+ ' is '+scores[i]+'. Percentage: '+percent[i]+' %</b>');    
}


//Q8


var colors=['Red','Blue','Green'];
for(var i=0;i<colors.length;i++){
    document.write('<br>'+ colors[i]);
}
document.write();
var color=prompt('Add color in the begining if you want','Enter Color Here');
if(color==="Enter Color Here"||color===""){
alert('You didnot enter any color !');

}else{
    alert('You entered: '+color);
    colors.unshift(color);
    document.write('<br><br>'+'Updated Array:(Add color in the begining!!) ');
    for(var i=0;i<colors.length;i++){
        document.write('<br>'+ colors[i]);
    }
}
var color_e=prompt('Add color in the End, if you want','Enter Color Here');
if(color_e==="Enter Color Here"||color_e===""){
alert('You didnot enter any color !');

}else{
    alert('You entered: '+color_e);
    colors.push(color_e);
    document.write('<br><br>'+'Updated Array:(Add color to the End !!) ');
    for(var i=0;i<colors.length;i++){
        document.write('  '+ colors[i]);
    }
}

var color_s=[];
color_s[0]=prompt('Add colors to the begining, if you want','Enter Color Here');
color_s[1]=prompt('Add colors to the begining, if you want','Enter Color Here');

for(var i=0;i<color_s.length;i++){

    if(color_s[i]==="Enter Color Here"||color_s[i]===""){
        alert('You didnot enter any color !');
        
    }

        else{
            alert('You entered: '+color_s[i]);
            colors.unshift(color_s[i]);
            document.write('<br><br>'+'Updated Array:(Add two colors to the begining) ');
           
        }


}
for(var i=0;i<colors.length;i++){
    document.write('  '+ colors[i]);
}

    
    colors.shift(colors);
    document.write('<br>'+'Updated Array:(First color Deleted) ');
    for(var i=0;i<colors.length;i++){
        document.write('  '+ colors[i]);
    }
    colors.pop(colors);
    document.write('<br>'+'Updated Array:(Last color Deleted) ');
    for(var i=0;i<colors.length;i++){
        document.write('  '+ colors[i]);
    }

var index=+prompt('Enter color at desired index','Enter the position you want to add color...');

if(index!=""){
var color_name=prompt('Enter Color Name','enter color name here');
colors[index]=color_name;
document.write('<br>'+'Updated Array:(Color Entered at Desired Position) ');
for(var i=0;i<colors.length;i++){
    document.write('  '+ colors[i]);
}
}else{
    alert('You didnot enter any index');
}



// var index_d=+prompt('Enter desired index to delete color','Enter the position from where you want to delete color...');
// if(index_d!=""){
//     var color_num=prompt('Enter no.of colors you want to delete','enter quantity here');
//     if(color_num==""){

//         alert('You didnot enter quantity');

//     }else{
//     colors.splice(index_d-1,color_num+1);

//         document.write('<br>'+'Updated Array:(Color delted at Desired Position) ');
//         for(var i=0;i<colors.length;i++){
//             document.write('<br>'+ colors[i]);
//         }
//     }

    
// } 
    


//Q10

var numbers=[230,432,320,120];
document.write('< br> <br>Scores of Students: ');
for(var i=0;i<numbers.length;i++){
    if(i!=numbers.length-1)
    document.write(numbers[i]+' ,');
    if(i==numbers.length-1){

        document.write(numbers[i]);
    }

}
var temp=0;
document.write('<br> <br> Ordered Score of Students: ');
numbers.sort();
for(var i=0;i<numbers.length;i++){
    if(i!=numbers.length-1)
    document.write(numbers[i]+' ,');
    if(i==numbers.length-1){

        document.write(numbers[i]);
    }

}


//Q11

var cities=['Karachi','Lahore','Muree','Peshawar'];
var selected_cities=cities.slice(0,3);
document.write('<br>Cities List: <br>');
for(var i=0;i<cities.length;i++){

    

    if(i!=cities.length-1)
        document.write(cities[i]+' ,');

    if(i==cities.length-1){

        document.write(cities[i]);
}

}
document.write('<br> Selected Cities List: <br>');
for(var i=0;i<selected_cities.length;i++){
    
    if(i!=selected_cities.length-1)
    document.write(selected_cities[i]+' ,');

if(i==selected_cities.length-1){

    document.write(selected_cities[i]);
}



    }


//Q12


var arr = ['This','is', 'my' , 'cat'];
document.write('<br> Array :<br> '+arr);
var string_join=arr.join(" ");

document.write('<br> String :<br> '+string_join);

//Q13

var hardware=['Keyboard','Mouse','Printer','Monitor'];
document.write('<br><br> Devices: <br>');
for(var i=0;i<hardware.length;i++){
  
    if(i!=hardware.length-1)
    document.write(hardware[i]+' ,');

if(i==hardware.length-1){

    document.write(hardware[i]);
}

}
for(var i=0;i<=hardware.length-1;i++){
        document.write('<br>Out: <br>');
         document.write(hardware[i]);
    }





    document.write('<br><br><br> Devices: <br>');
for(var i=0;i<hardware.length;i++){
  
    if(i!=hardware.length-1)
    document.write(hardware[i]+' ,');

if(i==hardware.length-1){

    document.write(hardware[i]);
}

}
for(var i=hardware.length-1;i>=0;i--){
    document.write('<br>Out: <br>');
    document.write(hardware[i]);
}



//15 
var select=document.getElementById('companies');
var companies=['Apple','Samsung', 'Motorola', 'Nokia', 'Sony' ,'Haier'];
var option =document.createElement("option");

for(var i=0;i<companies.length;i++){

    select.options.add(new Option(companies[i]));
    
    
}





    
