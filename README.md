**Describe: numberAnalyze();**
<br>
Test: If we input 1, we want to output "Beep!"
<br>
Code: numberAnalyze(1);
<br>
Expect: "Beep!"

<br>
Test: If we input 2, we want to output "Boop!"
<br> 
Code: numberAnalyze(1);
<br>
Expect: "Boop!"

<br>
Test: If we input 3, we want to 
output "Won't you be my neighbor?"
<br>
Code: numberAnalyze(3);
<br>
Expect: "Won't you be my neighbor?"

<br> 
Test: If we input a number not containing 1,2, or 3, we will output the number
<br>
Code: numberAnalyze(4)
<br>
Expect: "4"

<br>

**Describe: robogerList();**

Test: If we input a number it returns an array of the numbers counting up to the input number ran through the numberAnalyze
<br>
Code: robogerList(4)
<br>
Epect: ["0","Beep!","Boop!","Won't you be my neighbor?", "4", "5"]

