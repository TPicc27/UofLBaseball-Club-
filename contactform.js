//Form Validation
function Validation() {
//Get value from each input variable
var name = document.forms["vform"]["name"].value;
var email = document.forms["vform"]["email"].value;
var phone = document.forms["vform"]["phone"].value;

//If input values are not entered 
if(name == null || name == "" || email == null || email == "" || phone == null || phone == "")
    {
        //Alert pop up message
        alert("Please fill out your name, email, and phone");
    }
    //If input is entered
    else {
        if(name != null){
            if(email != null){
                if(phone != null) {
                    //Alert Pop up message
                    alert("Form was submitted");
                }
                else {
                    //Alert pop up message
                    alert("Enter phone number");
                }
            }
            else {
                //Alert pop up message 
                alert("Enter a email address");
            }
        }
        else {
            //Alert pop up message
            alert("Enter your name");
        }
    }
}
//End of Form Valdation 