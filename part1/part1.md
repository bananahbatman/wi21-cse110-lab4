1. i is declared using var making it a global variable. So console.log(i) will print prices.length. After i iterates through the for loop it's value will be prices.length. 
2. discountedPrice is declared using var making it a global variable. So console.log(discountedPrice) Will print out the last element in prices mutiplied by the discount or prices[i] *(1 - discount); 
3. finalPrice is declared using var making it a global variable. So console.log(finalPrice) will print out the finalPrice of the last element in prices. finalPrice is just discountedPrice but rounded so all decimal places after the 10's place are 0.
4.  The function will calculate the finalPrices of all the original values in the prices array. It will then store these values in the discounted array. The discounted array it returns looks like [ 50, 100, 150 ].
5. There will be an error because i is declared using let. And when console.log(i) is called i is not defined in the same scope. It exists only in the for loop.
6. There will be an error because discountedPrice is declared using let. And when console.log(discountedPrice) is called discountedPrice is not defined in the same scope. It exists only in the for loop.
7. finalPrice is declared using let and is in the same scope as console.log(finalPrice). So it will print out the finalPrice of the last element in prices. finalPrice is just discountedPrice but rounded so all decimal places after the 10's place are 0.
8. The function will calculate the finalPrices of all the original values in the prices array. It will then store these values in the discounted array. The discounted array it returns looks like [ 50, 100, 150 ].
9. There will be an error because i is declared using let. And when console.log(i) is called i is not defined in the same scope. It exists only in the for loop.
10. There will be an error because discountedPrice is declared using const. And when console.log(discountedPrice) is called discountedPrice is not defined in the same scope. It exists only in the for loop.
11. There will be an error thrown because we initially defined finalPrice with const. In the for loop we attempt to change the value of finalPrice which results in an error. If that error is resolved at line 13 the console prints 0, because that is the value of finalPrice when it was defined by const.
12. The function will return an error because we are attempting to change finalPrice which is const. If we get around that error it will return [50, 100, 150] , because while the array discounted is constant values may be added to the array.

13. Question 13
<ol type="a">
  <li>  student.name</li>
  <li> student["Grad Year"]</li>
  <li> student.greeting()</li>
  <li>  student["Favorite Teacher"].name </li>
<li>  student.courseLoad[0]</li>
</ol>

14. Arithmetic
   <ol type="a">
  <li>  '3' + 2 = '32'</li>
  <li>  ‘3’ - 2 = 1 converted 3 to string then sub 2 resulting in 1. </li>
  <li> 3 + null = 3 null converted to 0 then added </li>
  <li>   ‘3’ + null = '3null' null converted to string then concatonated to 3. </li>
  <li>  true + 3 = 4 true converted to 1 then added to 3. </li>
  <li>  false + null = 0 both false and null converteed to 0 then added together </li>
  <li>  “3” + undefined = "3undefined" </li>
  <li>  “3” - undefined = NaN undefined converted to NaN. Any number operation with NaN results in NaN. </li>
</ol>

15.   Comparison
   <ol type="a">
  <li>   ‘2’ > 1 = true '2' converted to 2 which is greater than 1. </li>
  <li>   ‘2’ < ‘12’ = false Strings are compared. char 1 is less than char 2 thus false. </li>
  <li>  2 == ‘2’ = true '2' is converted to number and compared they are equal </li>
  <li>  2 === ‘2’ = false strict equality check with no type conversions. They cannot be equal because they are different types. </li>
  <li>   true == 2 = false true is converted to 1 which is not equal to 2. </li>
  <li>  true === Boolean(2) = true Boolean(2) returns true. compared they are the same.</li>
</ol>
   
    
16.   == compares the two values and does any necessary type conversions automatically. === is a strict equality check and does no conversions. Meaning if two values are not the same type they cannot be equal.
    
17.   The conditional prints 'How are you?'. That is because (2 == true) returns false, because true is converted to 1 and that is not equal to 2. else if (2) returns true because it is basically Boolean(2) which returns true for positive integers. Thus 'How are you?' prints because it is in the else if code block.
19.   analyzing modifyArray([1,2,3], doSomething) we see that we pass an array of numbers and with the function doSomething. The for loop goes through every value of the array and calls doSomething(array[i], function(x) return x*2;})); on them. doSomething adds 2 to the inital array[i] number and then uses the callback function which mutiplies by 2. Ultimately (array[i] + 2) * 2 is returned. This is done for every number in array. The returned newArr is [6, 8, 10].
21.   It will print in the order 1 4 3 2. Any functions called using setTimeout will begin after the function that called them finishes. After it waits until the timer finishes then it will execute the inner function. Thus, first it prints 1 then sets a delay of one second to print 2, then sets a delay of 0 seconds to print 3, then it prints 4. After it will print 3 and then 2 after their times have expired.