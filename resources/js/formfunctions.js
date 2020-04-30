function openNewPage () {
    window.open("./thankyou.html");
}

function verifyNo ()    {
    var validity = phoneNumLength ();
    if (validity == false)
    {
        window.alert("Error: Number isn't of 10 digits.");
    }  else    {
        window.alert("Your number is valid");
    }
}

function phoneNumLength ()  {
    var num = document.getElementById("tel-no").value;
    console.log (num);
    if (/^\d{10}$/.test(num))   {   // Regex. ^ - start, $ - end, \d - digits, {10} - indicating 10 digits
        // The number is fine
        return true;
    }   else    {       
        return false;
    }
}


function callingEmailFunction ()    {
    result = validateEmail ();
    if (result) {
        window.alert ("No problem");
    }   else    {
        window.alert ("Error: Improper syntax. Please correct it and verify again");
    }
}

function validateEmail ()   {
    var emailId = document.getElementById("email").value;
    var val = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //console.log (val.test(emailId));
    var result = val.test (emailId);    
    return result;
}

function valid ()   {
    var validity = (phoneNumLength () && validateEmail());
    if (validity == false)
    {
        window.alert ("Looks like there might be a problem in the form. Recheck and submit again.")
        phoneNumLength ();
        return false;
    }   else    {
        //openNewPage ();
        alert ("Looks like there is no syntax problem :)");
        return true;
    }
}

//function submit()   {
    //var some = valid ();
    //if(some == true)    {
        //console.log ("true");

        //openNewPage ();

      //  return true;
   //}
   //else {
     //  alert("Please check value of VAR");
       //console.log ("false");
       //return false;
   //}
//}