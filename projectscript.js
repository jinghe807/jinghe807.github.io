

function validateInput()
{

    
    let inputtxt1 = document.getElementById("firstName");
    let inputtxt2 = document.getElementById("lastName");
    let inputtxtfa = document.getElementById("facilitator");
    
    let f_result = checkvalidfirst(inputtxt1); 
    let l_result = checkvalidlast(inputtxt2);
    let fa_result = checkvalidfa(inputtxtfa);

    return f_result && l_result && fa_result;

}


/* check valid first name */
function checkvalidfirst(inputtxt1)
{   
    var letters = /^[A-Za-z]+$/;
    let field = inputtxt1.value;
    if(!inputtxt1.value.match(letters))
    {
        ifError(inputtxt1,"firstname can contain only alpha characters");
        inputtxt1.focus();
        return false;
    }
    else if(field.length< 2)
    { 
        ifError(inputtxt1,"firstname should have at least two characters");
        inputtxt1.focus();
        return false;
    }
    else {
        ifSuccess(inputtxt1);
        return true;
    }
}

/* check valid last name */
function checkvalidlast(inputtxt2)
{ 
    var letters = /^[A-Za-z]+$/;
    let field = inputtxt2.value;
    if(!inputtxt2.value.match(letters))
    {
        ifError(inputtxt2,"lastname can contain only alpha characters");
        inputtxt2.focus();
        return false;
    }
    else if(field.length< 2)
    { 
        ifError(inputtxt2,"lastname should have at least two characters");
        inputtxt2.focus();
        return false;
    }
    else {
        ifSuccess(inputtxt2);
        return true;
    }
}

/* check valid facilitators' names */
function checkvalidfa(inputtxtfa)
{ 
    let tutor_name =inputtxtfa.value.toLowerCase().replace(/\s/g, '');
    if(tutor_name ==='laura'  || tutor_name ==="fazil" || tutor_name ==="harsh")
    {
        ifSuccess(inputtxtfa);
        return true;

    }
    else {
        ifError(inputtxtfa,"Invalid facilitators' names");
        return false;
    }
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}



/* hide error message for valid input */
function ifSuccess(input){
    let formdiv=input.parentElement;
    let errormessage=formdiv.querySelector("small");
    errormessage.style.visibility="hidden"; 
}

/* error message for invalid input */
function ifError(input,message){
    let formdiv=input.parentElement;
    let errormessage=formdiv.querySelector("small");
    errormessage.innerText=message;  
    errormessage.style.visibility="visible";
}
