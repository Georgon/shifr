
function reverseStr(str) {
    return str.split("").reverse().join("");
}

var k=reverseStr("valera")
var y=k.length
var db = k[1] + k[0] 
var num = 2
var chast=''
do{
	chast=chast+k[num]
	num =num+1
}while(num<y)
 
var otvet=db+chast
console.log(otvet);
 