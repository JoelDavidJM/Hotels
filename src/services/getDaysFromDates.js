
const getDaysFromDates = (date1, date2) => {
  
    const inicialDate = new Date(date1)
    const finalDate = new Date(date2)

    const differenceMs = finalDate.getTime() - inicialDate.getTime()
    const differenceDays = differenceMs / (1000 * 60 * 60 * 24)

    return differenceDays + 1

}

export default getDaysFromDates