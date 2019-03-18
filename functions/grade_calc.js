let gradeCalculator = function (score, totalPossibleScore) {


  if (typeof score !== 'number' || typeof totalPossibleScore !== 'number') {
    throw Error('inputs must be numbers')
  }
  const percentage = (score / totalPossibleScore) * 100;
  let grade = ''

  if (percentage >= 90 && percentage <= 100) {
    grade = 'A'
  }
  else if (percentage >= 80) {
    grade = 'B'
  }
  else if (percentage >= 70) {
    grade = 'C'
  }
  else if (percentage >= 60) {
    grade = 'D'
  }
  else if (percentage < 70 && percentage > 0) {
    grade = 'F'
  }
  return `you got a ${grade} (${percentage}%)!`;
}



try {
  const result = gradeCalculator('1', 50)
  console.log(result)
}
catch (e) {
  console.log(e.message)
}




