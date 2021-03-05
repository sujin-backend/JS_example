var arr = ["apple", "banana", "cherry", "pear", "lemon"];
			function aSearch(){ 
			var result = arr.filter(function(value){
                             var indexValue = value.indexOf("a");
                             return indexValue>-1; 
                            }); 
				document.getElementById("d2").innerHTML = result; 
			}