let ultasks= document.querySelector('#ultasks');
let btnAdd= document.querySelector('#btnAdd')
let btnforclearing=$('#btncleanup')
let btnreset=document.querySelector("#btnReset");
let inputnew= $('#inputnewtask');

let btncleanup=document.querySelector("#btnCleanup");
let inpnewtask= document.querySelector('#inpnewtask')
btnreset.addEventListener("click",()=>
{
	inpnewtask.value='';
	btnreset.disabled=true
	btnAdd.disabled=true;
})
function togglebuttons()
{
	if(inpnewtask.value !='')
    {
    	btnreset.disabled=false;
    }
    else 
    {
    	btnreset.disabled=true;
    }
    if(inpnewtask.value.length===0)
    {
    	console.log("kkkkkffffffff");
    	btnAdd.disabled=true;
    }
    else 
    {
    	btnAdd.disabled=false;
    }
    if(ultasks.children.length<=0)
    {
    	btnSort.disabled=true;
    }
    else 
    {
    	btnAdd.disabled=false;
    	btnSort.disabled=false;
    }

}
inpnewtask.addEventListener("keyup",function(e){
    console.log(e.keyCode);
    togglebuttons();
    
	if(e.keyCode===13)
	{
		event.preventDefault();
		console.log("kkg");
		togglebuttons();
		btnreset.disabled=true;
        btnAdd.click();
	}

});
function togglereset(enabled)
{
	if(enabled)
	{

		btnreset.disabled=false;
	}
	else
	{

		btnreset.disabled=true;
	}
}

btnAdd.addEventListener("click",()=>
{
	var node = document.createElement("li");        
	    // Create a <li> node
node.innerText=`${inpnewtask.value}`    ;    // Create a text node
console.log(`${inpnewtask.value}`)      
node.classList.add("list-group-item")   
node.addEventListener("click",()=>
{
	node.classList.toggle("done");
})
                     // Append the text to <li>
if(inpnewtask.value.length>0)
{
togglebuttons();
btnreset.disabled=true;
document.getElementById("ultasks").appendChild(node); 
	
}
inpnewtask.value='';
console.log("opop");
togglebuttons();
//inpnewtask.value("");
})


function cleardone()
{
   let y=document.querySelectorAll(".done");
   console.log(y);
   for(let t in y)
   console.log(t);
   $('#ultasks .done').remove()
   togglebuttons();
  
}
let sortbtn=document.querySelector("#btnSort");
sortbtn.addEventListener("click",()=>
{
	$('#ultasks .done').appendTo('#ultasks')
  
})
btnCleanup.addEventListener("click",cleardone);
