const leapYear = function (year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  }

  return false;
};

const leapYearUpgrade = (year) =>
  year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);

export { leapYear, leapYearUpgrade };
