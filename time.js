function Converter(strx){
let res1 = parseInt(strx.substring(0,2));
let res2 = parseInt(strx.substring(3,5));
let res3 = parseInt(strx.substring(6,8));
var res4 = strx.charAt(8);
res2 = res2 + 45;
res3 = res3 + 45;
if(res1 == 12)
{ 
    if(res4 == 'A')
        res1 = 00;
}
else{
    if(res4 = 'P')
        res1 = res1 + 12;
}
console.log(res1.toString()+":"+res2.toString()+":"+res3.toString());
}

let strx = "12:01:00PM";
let stry = "12:01:00AM";

Converter(strx);
Converter(stry);
/* OUTPUT: 
PS F:\Tushar\Internships\Oyester> node time.js
12:46:45
0:46:45*/