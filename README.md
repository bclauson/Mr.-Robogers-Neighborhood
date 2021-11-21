
# Branden Clauson Mr. Robogers Neighborhood

### ***By Branden Clauson***
### A counting of robogers neighbors

<p>&nbsp<p>

## **Technologies used**

* HTML
* CSS
* JavaScript
* JQuery

<p>&nbsp<p>

## **Description**

#### This webpage takes an input and returns a count from 0 up until the inputted number with numbers containing a 1 translating to "Beep!", 2 translating to "Boop!" and 3 translating to "Won't you be my neighbor?".



<p>&nbsp<p>

## **Setup/Installation Requirements**
* Clone to folder
* Navagate to directory
* Open index.html in prefered browser (tested in chrome)

<p>&nbsp<p>

## **Known Bugs**

#### No current known bugs

## **License**

[MIT](LICENSE.txt)

Copyright (c) 2021 Branden Clauson

<p>&nbsp<p>

## **Tests**


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
Expect: ["0","Beep!","Boop!","Won't you be my neighbor?", "4", "5"]

<br>
Test: If we input a non-number it returns a request for a number
<br>
Code: robogerList("hello")
<br>
Expect: "Please input a number"

