//program that checks for even numbers and odd numbers
var restart = "no"
do {
	var numbers = parseInt(prompt("input your number: "));
	if((numbers%2)==0){
	    console.log(numbers+" is an even number")
	}
	if (((numbers+1)%2)==0) {
	    console.log(numbers+" is an odd number")
	}
	
	//program to read temperatuer and display suitable message
	var temp = prompt("what is the temperature? : ");
	if(temp<0){
	    console.log("freezing weather")
	}
	else if(temp> 0 &&temp<= 10){
	    console.log("very cold weather")
	}
	else if(temp > 11 && temp<=20 ){
	    connsole.log("cold weather")
	}
	else if(temp >21 &&temp <=30){
	    console.log("normal temp")
	}
	else if(temp>31 && temp<= 40){
	    console.log("its hot")
	}
	else if (temp>40){
	    console.log("its very hot")
	}
    restart = prompt("restart?")
} while (restart == "yes");