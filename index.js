let count=0;
const bloodSpot=document.querySelector(".bloodSpot");
window.addEventListener("click",e=>{
    e.preventDefault()
    bloodSpot.style.top=e.pageY+"px";
    bloodSpot.style.left=e.pageX+"px";


})
const cursor= document.querySelector(".cursor");
window.addEventListener("mousemove",(e)=>{
cursor.style.top=e.pageY+"px";
cursor.style.left=e.pageX+"px";
});

/* const terrorist= document.createElement("img");
terrorist.setAttribute("class","terrorist");
terrorist.src("class","/icons/ant_left.png") */




const ant=document.getElementById("ant")

const incrementButton=function() {
    var element=document.getElementById('increment');
    var value=element.innerHTML;
    value++;
    console.log(value);
    document.getElementById('increment').innerHTML=value
    if(value>9)
    {
    document.getElementById('increment').innerHTML='YOU WIN';


}
    
}
ant.addEventListener('click',incrementButton)



/* document.getElementById("ant-c").style.opacity=1; */

/* function incrementButton() {
    
    
} */