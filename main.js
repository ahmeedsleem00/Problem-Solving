// 1- :
 var number = window.prompt("Enter number");
 window.alert(number);

// 2- :
 var number = window.prompt("Enter Number");
 number = Number(number);
 if(number%3==0&&number%4==0){
     window.alert("Yes")
 }else{
     window.alert("No")
 }

// 3- :
 var number1 = Number(window.prompt("Enter Number1"));
 var number2 = Number(window.prompt("Enter Number2"));

 if (number1>number2){
     window.alert(number1)
 }else{
     window.alert(number2)
 }

// 4 :
 var number = Number(window.prompt("Enter Number"));
 if(number<0){
     window.alert("negative")
 }else{
     window.alert("positive")
 }

// 5:
 var number1 = Number(window.prompt("Enter Number1"));
 var number2 = Number(window.prompt("Enter Number2"));
 var number3 = Number(window.prompt("Enter Number3"));

 if(number1>number2&&number1>number3){
     window.alert("Max Number is : "+number1)
 }else if(number2>number1&&number2>number3){
     window.alert("Max Number is : "+number2)
 }else if(number3>number1&&number3>number2){
     window.alert("Max Number is : "+number3)
 }

 if(number1<number2&&number1<number3){
     window.alert("Min Number is : "+number1)
 }else if(number2<number1&&number2<number3){
     window.alert("Min Number is : "+number2)
 }else if(number3<number1&&number3<number2){
     window.alert("Min Number is : "+number3)
 }

// 6 :
 var number = Number(window.prompt("Enter Number"));

 if(number%2==0){
     window.alert("Nimber "+number+" is Even")
 }else{
     window.alert("Nimber "+number+" is Odd")
 }

// 8 :
 var char = window.prompt("Enter your char");
 switch (char) {
   case "a":
   case "A":
   case "e":
   case "i":
   case "o":
   case "u":
     window.alert("vowel");
     break;
     default:
         window.alert("consonant");
         break;
 }

// 8:
 var number = Number(window.prompt("Enter number :"));
 for(var i = 1;i<=number;i++){
     window.alert(i);
 }

// 10:
 var number = Number(window.prompt("Enter number :"));
 for(var i=1;i<=12;i++){
     window.alert(i*number);
 }

// 11:
 var number = Number(window.prompt("Enter number :"));
 for (var i = 2; i <= number; i += 2) {
   window.alert(i);
 }

// 12 :
 var number = Number(window.prompt("Enter number :"));
 var power = Number(window.prompt("Enter power :"));
 var result = 1;

 for (var i = 0; i < power; i++) {
     result*=number;
 }

 window.alert(result);


//  13:
 var monthNumber = window.prompt("Enter month number");
 if(monthNumber ==1||monthNumber==3 ||monthNumber==5 ||monthNumber==7||monthNumber==8||monthNumber==10||monthNumber==12){
     window.alert("31")
 }else if(monthNumber ==2){
     window.alert("28 days in a common year and 29 days in leap years")
 }else if(monthNumber==4||monthNumber==6||monthNumber==9||monthNumber==11){
     window.alert("30");
 }

// 14:
 var physicsMark =Number( window.prompt("Enter mark of physics subject"));
 var chemistryMark = Number(window.prompt("Enter mark of Chemistry subject"));
 var biologyMark = Number(window.prompt("Enter mark of Biology subject"));
 var mathematicsMark = Number(window.prompt("Enter mark of Mathematics subject"));
 var computerMark = Number(window.prompt("Enter mark of Computer subject"));

 var persentage = (physicsMark+chemistryMark+biologyMark+mathematicsMark+computerMark)/500*100;

 if(persentage>=90){
     window.alert("Grade A")
 }else if(persentage>=80){
     window.alert("Grade B")
 }else if(persentage>=70){
     window.alert("Grade C")
 }else if(persentage>=60){
     window.alert("Grade D")
 }else if(persentage>=40){
     window.alert("Grade E")
 }else if(persentage<40){
     window.alert("Grade F")
 }

// 15 :
 var monthNumber = window.prompt("Enter month number");
 switch (monthNumber) {
   case "1":
   case "3":
   case "5":
   case "7":
   case "8":
   case "10":
   case "12":
     window.alert("31");
     break;
   case "2":
     window.alert("28 days in a common year and 29 days in leap years");
     break;
   case "4":
   case "6":
   case "9":
   case "11":
     window.alert("30");
     break;
 }

// 16:

 var char = window.prompt("Enter your char");
 if(char=='a' || char=='e' || char =='o' ||char=='u'||char=='i'){
     window.alert("vowel");
 }else {
     window.alert("consonant");
 }

// 17:

 var number1 = window.prompt("Enter first number");
 var number2 = window.prompt("Enter sec number");

 switch (number1 > number2) {
   case true:
     window.alert(number1);
     break;
   case false:
     window.alert(number2);
     break;
 }

// 18:
 var number = window.prompt("Enter number");
 switch (number % 2 == 0) {
   case true:
     window.alert("Even");
     break;
   case false:
     window.alert("odd");
     break;
 }

// 19:
 var number = Number(window.prompt("Enter number"));
 switch (number > 0) {
   case true:
     window.alert("Number is positive");
     break;
   case false:
     switch (number == 0) {
       case true:
         window.alert("Zero");
         break;
       case false:
         window.alert("negative");
         break;
     }
     break;
 }

// 20:
 var number1 = Number(window.prompt("Enter first number"));
 var sign = window.prompt("Enter your sign");
 var number2 = Number(window.prompt("Enter sec number"));

 switch (sign) {
   case "+":
     window.alert(number1 + number2);
     break;
   case "-":
     window.alert(number1 - number2);
     break;
   case "*":
     window.alert(number1 * number2);
     break;
   case "/":
     window.alert(number1 / number2);
     break;
 }
