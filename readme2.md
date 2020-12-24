9. 8 kyu ~
   Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

10. 8 kyu ~
    Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:

[22, -6, 32, 82, 9, 25] => [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

11. 8 kyu ~
    Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

12. 8 kyu ~
    Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

13. Simple, remove the spaces from the string, then return the resultant string.

14. Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine.

15. Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):

sumStr("4", "5") // should output "9"
sumStr("34", "5") // should output "39"
If either input is an empty string, consider it as zero.

16. Return initials out of full name

17. Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

Make sure that your function does not return a false positive by just checking just the day.

18. Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

19. Maybe you don't often use random() when you're dealing with Kata, but every qualified Kata can not be missing random(). Because random testcase is the most basic anti cheating measure. A variety of testcases also help authors identify potential problems. If you also want to create a new Kata and become an author, please follow me to learn about random().

If we want to randomly generate some fixed words, we can use arrays to do:

var names=["John","Tom","Jerry","Minne","Alice","othername..."];
for (var i=0;i<5;i++)
console.log(names[~~(names.length*Math.random())]);
//output:
Minne
Alice
Jerry
Minne
othername...

20. You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

21. Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

22. Coding in function roundIt. function accept 1 parameter n. It's a number with a decimal point. Please use different methods based on the location of the decimal point, turn the number into an integer.

If the decimal point is on the left side of the number (that is, the count of digits on the left of the decimal point is less than that on the right), Using ceil() method.

roundIt(3.45) should return 4
If the decimal point is on the right side of the number (that is, the count of digits on the left of the decimal point is more than that on the right), Using floor() method.

roundIt(34.5) should return 34
If the decimal point is on the middle of the number (that is, the count of digits on the left of the decimal point is equals that on the right), Using round() method.

roundIt(34.56) should return 35

23. You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, update_light('green') should return 'yellow'.

24. Write function avg which calculates average of numbers in given list.

25. Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

26. Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit(" 3 ")
isDigit("-3.23")

27. Implement a function which accepts 2 arguments: string and separator.

The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

For example:

splitAndMerge("My name is John", " ") == "M y n a m e i s J o h n"
splitAndMerge("My name is John", "-") == "M-y n-a-m-e i-s J-o-h-n"
splitAndMerge("Hello World!", ".") == "H.e.l.l.o W.o.r.l.d.!"
splitAndMerge("Hello World!", ",") == "H,e,l,l,o W,o,r,l,d,!"

28. Define a function that removes duplicates from an array of numbers and returns it as a result.
    The order of the sequence has to stay the same.

29. You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

30. Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1

31. Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow (including myself). It's the 'recommended' age range in which to date someone.

minimum age <= your age <= maximum age #Task

Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:

min = age - 0.10 _ age
max = age + 0.10 _ age

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]

##Examples:

age = 27 => 20-40
age = 5 => 4-5
age = 17 => 15-20

32. Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

Example
charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

33. 7 kyu
    You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (\*).

For example:

"Chicago" --> "c:\*_,h:_,i:_,a:_,g:_,o:_"
As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

"Bangkok" --> "b:_,a:_,n:_,g:_,k:**,o:_"
"Las Vegas" --> "l:_,a:**,s:\*_,v:_,e:_,g:_"

34. 7 kyu

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

35. In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc"
--The first string has 'yb' which is not in the second string.
--The second string has 'zc' which is not in the first string.
Notice also that you return the characters from the first string concatenated with those from the second string.

36.
