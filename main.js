var reservations = {
  'Bob': { 
  	claimed: false },
  'Ted': { 
  	claimed: true }
}
		
function claimReservation(name) {
	var lowerName = name.slice(1,(name.length)).toLowerCase();
	var validName = name.slice(0,1).toUpperCase() + lowerName;
	console.log(validName);

	if (reservations[validName]){
		if (reservations[validName].claimed){
			alert("Welcome to the store");
		}
		else {
			alert("you have an order to be claimed");
		}
	}
	else{
		reservations[validName] = {claimed : true} ;
		alert("New guest added to a table");
	}
	return reservations;
}





