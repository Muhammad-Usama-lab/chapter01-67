var image=document.getElementById('img');
var i=1;
var images='Images/.jpg';


   setInterval(function(){
       i++;
       if(i>12){
        
        i=1;
       }else{
        //    image.setAttribute('data-aos','zoom-in');
        image.src="Images/"+i+".jpg";
       }
        
        

   },2000);
        
        
        



// console.log(image);
