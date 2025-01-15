# JavaScript NaN Addition Bug

This repository demonstrates a common yet subtle bug in JavaScript related to the addition of numbers, specifically when one or both operands are NaN (Not a Number).

## The Bug

The original `foo` function attempts to add two numbers. However, it fails to explicitly handle the case where one or both of the input parameters are NaN. In JavaScript, any arithmetic operation involving NaN results in NaN. This can lead to unexpected behavior and make debugging difficult.

## The Solution

The solution involves adding a check to explicitly handle NaN values.  The improved function uses `isNaN()` to detect NaN and returns an appropriate value (0 in this case) when NaN is encountered. This prevents the propagation of NaN throughout the code.

## How to reproduce the bug

1. Clone the repository.
2. Open `bug.js` and run the test cases.
3. Observe the incorrect results when NaN is involved in the addition.

## How to run the solution

1. Open `bugSolution.js` and run the test cases.
2. Observe that the corrected function now correctly handles NaN values.
