
var relic = document.querySelector("#relic");
var mortal = document.querySelector("#mortal");
var god = document.querySelector("#god");
var theft = document.querySelector("#theft");

relic.addEventListener("click", run);
mortal.addEventListener("click", kombat);
god.addEventListener("click", war);
theft.addEventListener("click", grand);

function run(){
    alert("YOU JUST GOT SCAMMED.Follow along though youll enjoy the content.");
}
function kombat(){
    alert("Check out this game in the new Ps 5 gaming console. Youll love programming");
}
function war(){
    alert("Just be a gamer youll enjoy this games.PLEASE!!");
}
function grand(){
    alert("Thank you for following along.Dont practice thug life like in GTA !!!");
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
    
}

function formValidate(date,gender){
    if(date.value == ""){
        return alert("Select your Year of Birth");
    }
    else if(gender == null){
        return alert("Select your gender")
    }else{
        //akan name arrays
        const maleAkan = ["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwane"];
        const femaleAkan = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
        
        //getting users date input value
        const dateInput = new Date(date.value);
        
        const day = dateInput.getDay();
        
        const output = document.querySelector("#put");
        
        if(gender.value == "MALE"){
            akanMaleName = maleAkan[day];
            output.innerHTML = "Congratulations your Akan Name is" + " " + akanMaleName + "." + " " + "Click on play on the relic run game. Use email you registered with as username and your akan name as password. " ;
            
        }
        else{
            akanFemaleName = femaleAkan[day];
            output.innerHTML = "Congratulations your Akan Name is" + " " + akanFemaleName + "." + " " + "Click on play on the relic run game. Use email you registered with as username and your akan name as password. " ;
            
        }
        
        return myForm.reset();
    }

}





