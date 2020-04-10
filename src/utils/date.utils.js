import moment from 'moment';

function getDateTimeMonthYear(format){
  return moment().format(format)
}

function getFormattedDate(date, format){
  return moment(date).format(format);
}

function updateMonth(currentMonth, numberOfMonth){
  return moment(currentMonth).add(numberOfMonth, 'months');
}

function getWeekForDate(date){
  return (date % 7);
}

function getDaysInMonth(currentMonth){
  return moment(currentMonth).daysInMonth();
}

function getStartOfMonth(currentMonth){
  return moment(currentMonth).startOf("month")
}

function getDayOfWeek(currentMonth){
  return moment(currentMonth).day();
}

function addDays(date, day){
  return moment(date).add(day, 'days');
}

export {
  getDateTimeMonthYear,
  getFormattedDate,
  updateMonth,
  getWeekForDate,
  getDaysInMonth,
  getStartOfMonth,
  getDayOfWeek,
  addDays,
}