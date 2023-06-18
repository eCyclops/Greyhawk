[h: yearDate = arg(0)]

[h, if(argCount()==0): yearDate=getLibProperty("currentYearDate", "lib:com.ecyclops.greyhawk")]
[h: weekDaysList = getLibProperty("weekDays","lib:com.ecyclops.greyhawk")]

[h: yearDate = number(yearDate)]

[r: thisQuarter = ceiling(yearDate/91)]
[r: qDay = yearDate - (91*(thisQuarter-1))]
[r: qMonth = ceiling((qDay-35)/28)+1]

[e, if(qMonth > 1):
    theDate = (qDay - 7) - (28*(qMonth-2));
    theDate = qDay
]

[h: theDate = qDay - (28 * (qMonth -1))]

[h: weekDay = math.mod(yearDate, 7)]
[h: weekDay = listGet(weekDaysList, weekDay)]

[h: thisMonth = qMonth + (4 * (thisQuarter-1))]

[h: months = getLibProperty("months", "lib:com.ecyclops.greyhawk")]

[h: monthStuff = listGet(months, thisMonth)]
[h: month = getStrProp(monthStuff, "name")]
[h: returnDate = strPropFromVars("weekDay, theDate, month")]

[h: macro.return = returnDate]

