const addWeek = (date) => {
    let myDay = ( (date.getTime() - new Date('0001-01-01').getTime() ) / 86400000 /* =1j en s*/ ) %14
    const newDays = {
        0:"Monday",
        1:"Tuesday",
        2:"Wednesday",
        3:"Thursday",
        4:"Friday",
        5:"Saturday",
        6:"Sunday",
        7:"secondMonday",
        8:"secondTuesday",
        9:"secondWednesday",
        10:"secondThursday",
        11:"secondFriday",
        12:"secondSaturday",
        13:"secondSunday"
    }
    return newDays[myDay]
}

const timeTravel = (travelTime) => {
    // On définit les paramètres puis on init l'année, mois etc de la date + les h/minutes/s
    let myNewDate = travelTime["date"]
    let myHour = travelTime["hour"]
    let myMinute = travelTime["minute"]
    let mySeconds = travelTime["second"]
    
    let newTime = String(myNewDate.getFullYear()) 
    + "-" + String(myNewDate.getMonth()+1) 
    + "-" + String(myNewDate.getDate())
    + " " + String(myHour)
    + ":" + String(myMinute)
    + ":" + String(mySeconds) 

    return new Date(newTime)
}