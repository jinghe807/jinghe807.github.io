

function validateInput()
{

    
    let inputtxt1 = document.getElementById("firstName");
    let inputtxt2 = document.getElementById("lastName");
    let inputtxtem = document.getElementById("Email");
    
    let f_result = checkvalidfirst(inputtxt1); 
    let l_result = checkvalidlast(inputtxt2);
    let Em_result = checkvalidfa(inputtxtem);

    return f_result && l_result && Em_result;

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

/* check valid email format */
function checkvalidfa(inputtxtem)
{ 
    let email_address =inputtxtem.value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email_address.match(validRegex)) {

        ifSuccess(inputtxtem);   
        return true;
    }
    else {
        ifError(inputtxtem,"Invalid email format");
        return false;
    }
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
