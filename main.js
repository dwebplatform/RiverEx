
function validate(e){
   e.preventDefault();
    let userName=document.getElementById("UserName");
    let amountOfDay=document.getElementById('amountOfDay');
    let amountOfPeople=document.getElementById('amountOfPeople');
  let data=document.getElementById('aproxData');
     let x=true;
  if(!amountOfDay.value){
    amountOfDay.style.border='1px solid red';
     x=false;
} 
  if(!data.value){
      data.style.border='1px solid red';
      x=false;

  }
 if(!amountOfPeople.value){
    amountOfPeople.style.border='1px solid red';
  x=false;
}
  if(!userName.value){
         userName.style.border="1px solid red";
   x=false;
    }

  if(x===true)
  {
      alert("Succsess");
      return true;
  }
}










let i=0;
let isNext=false;
function prev(){
    
   if(i<1){
     i=0;
     return;
   }
  
let slider=document.querySelectorAll('.slider-item');
i--;
  console.log(i)
slider.forEach(item=>{

item.style.transform=`translateX(-${100*(i)}%)`;
});
 

}
function  next(){
 let slider=document.querySelectorAll('.slider-item');
if(i<slider.length){  
i++;}
  console.log(i)
  if(i<slider.length){ 
slider.forEach(item=>{

  item.style.transform=`translateX(-${100*i}%)`;
})
  }
 
}












