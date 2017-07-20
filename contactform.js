//Form Validation
function Validation() {
//Get value from each input variable
var name = document.forms["vform"]["name"].value;
var email = document.forms["vform"]["email"].value;
var phone = document.forms["vform"]["phone"].value;

//If input values are entered 
if(name == "" && email == "" && phone == "")
    {
        //Alert pop up message
        alert("Please fill out your name, email, and phone");
    }
    //If input is not entered
    else if(name != "" && email == "" && phone == "")
        {
            alert("Please fill out an email and phone number");
        }
    else if(name != "" && email != "" && phone == "" ) 
         {
             alert("Please fill out an phone number");
        }
    else if(name == "" && email !== "" && phone != "") 
        {
            alert("Please fill out your name");
        }
    else if (name != "" && email == "" & phone != "")
    {
        alert("Please fill out an email address");
    }
    else {
        alert("Form was submitted");
    }
}
//End of Form Valdation 