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

22.
