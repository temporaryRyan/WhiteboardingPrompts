# Whiteboarding prompts
##### (Thanks to Edabit.com for supplying them)
---
---
### Area of a Triangle
##### Write a function that takes the base and height of a triangle and return its area.

**Examples:**
- triArea(3, 2) ➞ 3
- triArea(7, 4) ➞ 14
- triArea(10, 10) ➞ 50

**Notes**
The area of a triangle is: (base * height) / 2
Don't forget to return the result.

---

### Convert Hours into Seconds
##### Write a function that converts hours into seconds.
**Examples:**
- howManySeconds(2) ➞ 7200
- howManySeconds(10) ➞ 36000
- howManySeconds(24) ➞ 86400
**Notes**
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer.

---
### Less Than 100?
##### Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

**Examples**
- lessThan100(22, 15) ➞ true
- lessThan100(83, 34) ➞ false
- lessThan100(3, 77) ➞ true

---
---
# More Challenging

### Find the Smallest and Biggest Numbers
##### Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

**Examples**
- minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
- minMax([2334454, 5]) ➞ [5, 2334454]
- minMax([1]) ➞ [1, 1]

**Notes**
All test arrays will have at least one element and are valid.

---
### Largest Swap
##### Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

**To illustrate:**
- largestSwap(27) ➞ false
- largestSwap(43) ➞ true

If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

**More Examples**
largestSwap(14) ➞ false
largestSwap(53) ➞ true
largestSwap(99) ➞ true

**Notes**
Numbers with two identical digits (third example) should yield true (you can't do better).
---