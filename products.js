/**
 * @author Chad Duffey
 * student 11372834B
 */

function init () 
{
	var initnum = 0;
	document.getElementById('total').value 	= initnum.toFixed(2);
	document.getElementById('w359').value 	= initnum.toFixed(2);
	document.getElementById('n234').value 	= initnum.toFixed(2);
	document.getElementById('b113').value 	= initnum.toFixed(2);
}

function calcTotal()
{
	  	var boltNumber		= Number(document.getElementById("bolts").value);
    	var nutNumber 		= Number(document.getElementById("nuts").value);
    	var washerNumber 	= Number(document.getElementById("washers").value);
    	
    	var boltCost		= boltNumber 	* 2.15;
    	var nutCost			= nutNumber 	* 0.45;
    	var washerCost		= washerNumber 	* 0.30;
    	
    	//display only - dosnt change variables
    	document.getElementById('b113').value = boltCost.toFixed(2);
    	document.getElementById('n234').value = nutCost.toFixed(2);
    	document.getElementById('w359').value = washerCost.toFixed(2); 
				
		//tidy any NaNs
		if (isNaN(document.getElementById('b113').value)) 
			document.getElementById('b113').value 	= 0;
		if (isNaN(document.getElementById('n234').value)) 
			document.getElementById('n234').value 	= 0;
		if (isNaN(document.getElementById('w359').value)) 
			document.getElementById('w359').value 	= 0;
		if (isNaN(document.getElementById('total').value)) 
			document.getElementById('total').value 	= 0;
			
		var total = boltCost + nutCost + washerCost;
		document.getElementById('total').value = total.toFixed(2);
}

function validateForm()
{
	   	var b = document.getElementById("bolts").value;
    	var n = document.getElementById("nuts").value;
    	var w = document.getElementById("washers").value;
	   	if ((isNaN(n)) || (isNaN(b)) || (isNaN(w))) 
  		{
    		alert("Oops. Please only use numbers for quantities in your order");
    		return false;
  		}	
}

	