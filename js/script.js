var but = document.querySelector("#adventure1");
var but1 = document.querySelector("#puzzle");
var but2 = document.querySelector("#mind");
var but3 = document.querySelector("#other");

but1.onclick = function(){puzzle()};
but.addEventListener("click", adventure);
but2.addEventListener("click", mind);
but3.addEventListener("click", other);



function adventure(){
    let div = document.querySelector("#adventure");
    let div1 = document.querySelector("#puzzles");
    let div2 = document.querySelector("#minds");
    let div3 = document.querySelector("#others");

    if(div.style.display == "none"){
       div.style.display = "flex";
    }else if(div1.style.display == "flex"){
        div1.style.display = "none";
        
     }
    else{
       div.style.display = "flex";
    
        
    }

}
function puzzle(){
    let div = document.querySelector("#adventure");
    let div1 = document.querySelector("#puzzles");
    let div2 = document.querySelector("#minds");
    let div3 = document.querySelector("#others");

    if(div.style.display == "flex"){
       div.style.display = "none";
    }
    else if(div1.style.display == "none"){
        div1.style.display = "flex";
    }else{
        div1.style.display = "flex";

    }

}
function mind(){
    let div = document.querySelector("#adventure");
    let div1 = document.querySelector("#puzzles");
    let div2 = document.querySelector("#minds");
    let div3 = document.querySelector("#others");

    if(div.style.display == "none"){
        div.style.display = "flex";
     }else if(div1.style.display == "flex"){
         div1.style.display = "none" ;
     }else if(div2.style.display == "none"){
        div2.style.display = "flex" ;
    }
     else{
         div2.style.display = "flex";
     }


}








//declaring my form
const myForm = document.querySelector(".myForm");

//adding an event listener to the form
myForm.addEventListener("submit", output);

//declaring function output

function output(e){
    e.preventDefault();

    //declaring the inputs
    const date = document.querySelector("#date");
    const gender = document.querySelector("input[name=gender]:checked");

    //form validation
    formValidate(date,gender);

    //akan name arrays
    const maleAkan = ["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwane"];
    const femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    //getting users date input value
    const dateInput = date.value;

    //slicing the date value
    const year = dateInput.slice(0,4);
    const month = dateInput.slice(5,7);
    const day = dateInput.slice(8,10);
    const cc = year.slice(0,2) 
    const yy = year.slice(2,4)

    //getting the users exact day of birth
    let Day =( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + day ) % 7 ;
    const exactDay = Day.toFixed();
    akanMaleName = maleAkan[exactDay];
    akanFemaleName = femaleAkan[exactDay];

    //assigning Akan Names
    const output = document.querySelector("#put");

    if(gender.value == "MALE"){
        output.innerHTML = "Congratulations your Akan Name is" + " " + akanMaleName + "." + " " + "Click on play on the relic run game. Use email you registered with as username and your akan name as password. " ;
        
    }
    else{
        output.innerHTML = "Congratulations your Akan Name is" + " " + akanFemaleName + "." + " " + "Click on play on the relic run game. Use email you registered with as username and your akan name as password. " ;
 
    }
}

function formValidate(date,gender){
    if(date.value == ""){
       return alert("Select your Year of Birth");
    }
    if(gender == null){
        alert("Select your gender")
    }
}



