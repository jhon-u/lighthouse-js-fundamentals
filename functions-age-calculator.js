const ageCalculator = function (name, yearOfbirth, currentYear) {
  const age = currentYear - yearOfbirth
  return name + " is " + age + " years old."
}

ageCalculator("Suzie", 1983, 2015)
