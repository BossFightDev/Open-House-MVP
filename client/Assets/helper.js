const dateTranslator = (date) => {
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
  let newDate = date.split(' ')
  const result = [];
  result.push(newDate[1])

  result.push(newDate[2]+',')
  result.push(newDate[3])
  return result.join(' ')
}

const priceTranslator = (price) => {
  return price.toLocaleString('en', { style: 'currency', currency: 'USD' })
}

const phoneTranslator = (phone) => {
  let newPhone = phone.toString().split('');
  const result = [];
  for (let i = 0; i < newPhone.length; i++) {
    if (i === 0) {
      result.push('(' + newPhone[i]);
    }
    else if (i === 2) {
      result.push(newPhone[i] + ')');
    }
    else if (i === 5) {
      result.push(newPhone[i] + '-');
    }
    else {
      result.push(newPhone[i]);
    }
  }
  return result.join('');
}

module.exports = {
  dateTranslator: dateTranslator,
  priceTranslator: priceTranslator,
  phoneTranslator,
}