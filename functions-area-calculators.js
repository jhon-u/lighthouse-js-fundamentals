function calculateRectangleArea(length, width) {
  const area = length * width
  return length < 0 || width < 0 ? undefined : area
}

function calculateTriangleArea(base, height) {
  const area =  base * height / 2
  return base < 0 || height < 0 ? undefined : area
}

function calculateCircleArea(radius) {
  const area = Math.PI * Math.pow(radius, 2)
  return radius < 0 ? undefined : area
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined