/**
 * @author Chad Duffey
 * student 11372834B
 */

//We want to validate the following:
// 1. a name has been provided 
// 2. an email address has been provided and it is of the form something@something (there is an @ symbol with at least 1 character each side of it) 
// 3. a phone number has been provided and it is numeric (maybe including spaces?) 
// 4. an address has been provided 

// 5. ordered quantities are numeric - (NOTE: we deal with this on the products page)

function validateForm()
{
	//1. Check the name field. 
	var name = document.getElementById('fullname').value;
 	if (name == null || name == "")
   	{
   		alert("Please enter a valid name for your order");
   		//stop processing this function - fail one field, fail all.
   		return false;
   	}
   	//check that there are only alphanumerics
   	var validEntries =  /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
   	if (!validEntries.test(name))
    {
        alert("You seem to have some invalid characters in your name.");
        return false;
    }

	
	//2. check the email address field
	var email = document.getElementById('email').value;
 	if (email == null || email == "")
   	{
   		alert("Please enter an email address to go with your order");
   		return false;
   	}
 	var dot = email.lastIndexOf(".");
 	var atsign = email.indexOf("@");
 	if ( dot < atsign +2 || atsign < 1 || dot + 2 >= email.length)
   	{
	   alert("Something is wrong with your Email Address. Take a look and try again");
	   return false;
   	}
	
	//3. Check that the phone numnber is numeric
	var phone = document.getElementById('phone').value;
    if (phone == null || phone == "")
 	{
 		alert ("Please enter a phone number to go with your order");
 		return false;
 	}
 	//check if the phone number is up to scratch
 	//first remove any junk characters leaving just the appropriate ones
	phone = phone.replace(/[^0-9]/g, '');
	//then check it is long enough.
	if(phone.length != 10) { 
	   	alert("The number you have entered appears to be in the wrong format.\n" 
	   		+ "Please supply full number including area code eg: 02 63413134");
		return false;
	} 
 	
 	//4. Check the name field. 
	var address = document.getElementById('address').value;
 	if (address == null || address == "")
   	{
   		alert("Please enter a valid address for your order");
   		return false;
   	}
 	
 	//If SUCCESSFULL - FORM VALIDATES:
	alert("Your Order has been completed and will be shipped today. Enjoy.");
	//we are returning false so that the submit button dosnt attempt to go further for this assignment
	return false;
}

