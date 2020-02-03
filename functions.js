/**
 * greet(name):
 * - optionally receives a name
 * - logs "Hello" if there is no name
 * - logs "Hello <name>" if there is a name
 */
function greet(name) {
  // Your code here
  if (!name) {
    console.log("Hello");
  } else {
    console.log(`Hello ${name}`);
  }
}

/********************************************************************************************************** */
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 */
function isOdd(n) {
  // Your code here
  if (n % 2 === 0) return false;
  return true;
}

/**********************************************************************************************************
 * 
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 *
 * Hint: you can solve this without writing any loops!
 */
function oddsSmallerThan(n) {
  // Your code here
  // if (isOdd(n)=== false ){
  //   return ( (n/2)-1);}
  // else if(isOdd(n)=== true){
  //    return ( (n/2)-0.5):}

  if (isOdd(n)) return (n - 1) / 2;
  return n / 2;
}

oddsSmallerThan(7);

/**********************************************************************************************************
/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if (isOdd(n)) return n * n;
  return n * 2;
}

/**********************************************************************************************************
 * 
 * 
/**
 * ageFromBirthDate(birthDate):
 * - receives a birthDate as a STRING of the form <YYYYMMDD>
 *   where:
 *     - YYYY is the year
 *     - MM is the month (01 - 12)
 *     - DD is the date
 * - calculates and returns the age in years (rounded down to the nearest year)
 * - assume all birthDates will be valid
 *
 * Hint: you can use JavaScript's Date() class to make things easier
 *
 * e.g. (if we assume that the date today is September 23 2018):
 *    ageFromBirthDate("19870506") -> 31 (because the birthday already passed)
 *    ageFromBirthDate("19971110") -> 20 (because the birthday hasn't passed yet)
 */
function ageFromBirthDate(birthDate) {
  const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

  // Your code here
  const year = birthDate.slice(0, 4);
  const month = birthDate.slice(4, 6);
  const day = birthDate.slice(6);
  console.log(year);
  console.log(month);
  console.log(day);

  const bir = new Date(`${month}/${day}/${year}`);
  const today = new Date();
  console.log(bir);

  let age = today - bir;

  age = age / _MS_PER_YEAR;

  age = Math.floor(age);

  return age;
}

ageFromBirthDate("19971110");

/*******************   call function ******************** */
module.exports = {
  greet,
  isOdd,
  oddsSmallerThan,
  squareOrDouble,
  ageFromBirthDate
};
