function search(){
	var x = document.getElementById("search").value;
	if(x == "phones"){
		window.location.assign("phones.html");
	}
	else if(x == "fashion"){
		window.location.assign("fashion.html")
	}
	else if(x == "cameras"){
		window.location.assign("cameras.html")
	}
	else if(x == "laptops"){
		window.location.assign("laptops.html")
	}
	else if(x == "shoes"){
		window.location.assign("shoes.html")
	}
	else if(x == ""){
		alert("Please enter a category to search")
	}
	else
		confirm("Item not yet included");
	
}