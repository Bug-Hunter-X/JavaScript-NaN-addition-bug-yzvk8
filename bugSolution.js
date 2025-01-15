function foo(a, b) {
  if (isNaN(a) || isNaN(b) || a === null || b === null) {
    return 0; // Handle NaN and null values
  }
  return a + b; //Corrected code
}