//Q1

//part 1.

var main=document.getElementById('main-content');



//part 2

for(var i=0;i<main.childNodes.length;i++){
            if(i%2!=0){
                console.log(main.childNodes[i]);
            }
            }

//part 3.

var RenderElements=document.getElementsByClassName('render');
for(var i=0;i<RenderElements.length;i++){

    document.write('<br>'+RenderElements[i].innerHTML);

}
console.log(RenderElements);

//part 4

var firstName=document.getElementById('first-name');
firstName.value="Usama entered through JS";

//part 5
 
 var lastName=document.getElementById('last-name');
 lastName.value="Khan entered through JS";

 var email=document.getElementById('email');
 email.value="oabc@gmail.com";




 //Q2



 //par 1.

 var elementType=main.nodeType;
 document.write('<br><br><br>Element type of element having ID "form-content" :'+elementType);


 //part 2.

 var nodeType=lastName.nodeType;
 document.write('<br><br><br>Node type of element having ID "last-name" :'+nodeType);

 var childNodeType=lastName.childNodes;
 
 document.write('<br>Node type of element having ID "last-name" :'+childNodeType);


 //part 3.

 var first_Child=main.firstChild.nodeName;
 var last_Child=main.lastChild.nodeName;
 document.write('<br><br><br>FirstChild of element having ID "main-content" :'+first_Child);
 document.write('<br>lastChild of element having ID "main-content" :'+last_Child);


 //part 4.

 document.write('<br><br><br>PreviousSibling of element having Id "last-name" :'+lastName.previousSibling.innerHTML);
 document.write('<br>NextSibling of element having Id "last-name" :'+lastName.nextSibling.innerHTML);

 console.log(first_Child,last_Child);

 //part 5.
 var parentNodeEmail=email.parentNode;
 var nodeTypeEmail=email.nodeType;

 document.write('<br><br><br>parentNode of element having Id "email" :'+parentNodeEmail.nodeName);
 document.write('<br>nodeType of element having Id "email" :'+nodeTypeEmail);

