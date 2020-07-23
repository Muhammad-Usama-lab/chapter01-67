var arr=[
    'Usama',
    'Hasan',
    'Mahad',
    'Hussain'
];
var count=+1;

var name=prompt('Search for name','Your name is ...');
for(var i=+0;i<=3;i++){

    if(name==arr[i]){
        document.write(name +' is found at position'+i);
        ++count;
        break;
        
        
        
    }
   
}
if(count === 1){

    document.write('Sorry ' + name + ' is not in our list');
}

