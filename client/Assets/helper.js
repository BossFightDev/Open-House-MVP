export default dateTranslator = (date) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "November",
    "December"
  ]
  let newDate = date.split('T');
  let numericalDate = newDate[0].split('-');
  let result = [];
  result.push(month[numericalDate[1]-1])

  result.push(numericalDate[2]+',')
  result.push(numericalDate[0])
  return result.join(' ');
}

module.exports = {
  dateTranslator: dateTranslator,
}