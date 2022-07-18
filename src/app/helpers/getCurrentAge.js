const getCurrentAge = ({year, month, day}) => {
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${day}`);
    let curentYear = today.getFullYear() - birthDate.getFullYear()
    let currentMonth = today.getMonth() - birthDate.getMonth()
    let currentDay = today.getDate() - birthDate.getDate()
    if(currentDay < 0) {
      --currentMonth
    }
    if(currentMonth < 0) {
      --curentYear
    }
    return curentYear
}

export default getCurrentAge