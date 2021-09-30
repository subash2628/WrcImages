
const search = document.getElementById("mySearch");
const searchForm = document.getElementById("mySearch");
const alertFormValidate = document.getElementById("alert");
const dataRenderingSpace = document.getElementById("main");
const card = document.getElementById("renderingCard");
const img = document.getElementById("renderingImg");
const string = document.getElementById("placeQueryString");


const dc = {};
 

function handleForm(event) 
{ 
    event.preventDefault(); 
}

searchForm.addEventListener('submit', handleForm);

dc.search = function()
{
    
    let queryString = searchForm.elements[0].value;

    let roll = queryString.toUpperCase();

    if(roll.includes("PAS069") || roll.includes("PAS070") || roll.includes("PAS071") || roll.includes("PAS072") || roll.includes("PAS073"))
    {
        roll = roll.substring(4);
       //console.log('caught ',roll);
    }

    //let imgref = card.childNodes;
    img.src = `http://202.70.84.165/img/student/${roll}.jpg`;

    string.innerHTML = roll;

    //console.log('search handled!!',roll, string);
}
 
function handleEnterKeyPress(e,context) {
    if(e.keyCode==13){
      //hit search here    
      
      //console.log("press");
      dc.search();

    } 
}

window.onload =function(){
    //console.log("window loaded!");

    window.dc = dc;

}