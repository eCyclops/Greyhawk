[h: yearDate = arg(0)]

[h, if(argCount()==0): yearDate=getLibProperty("currentYearDate", "lib:com.ecyclops.greyhawk")]
[h: weekDaysList = getLibProperty("weekDays","lib:com.ecyclops.greyhawk")]

[h: yearDate = number(yearDate)]

[h: thisQuarter = ceiling(yearDate/91)]
[h: qDay = yearDate - (91*(thisQuarter-1))]
[h: qMonth = ceiling((qDay-35)/28)+1]

[h, if(qMonth > 1):
    theDate = (qDay - 7) - (28*(qMonth-2));
    theDate = qDay
]

[h: theDate = qDay - (28 * (qMonth -1))]

[h: weekDay = math.mod(yearDate, 7)]
[h: weekDay = listGet(weekDaysList, weekDay)]

[h: thisMonth = qMonth + (4 * (thisQuarter-1))]

[r: "<br><br>This month is "+thisMonth+"<br><br>"]

<hr>
The Months are<br><br>

[r: months = getLibProperty("months", "lib:com.ecyclops.greyhawk")]

<hr>
This month is 
[r: monthStuff = listGet(months, thisMonth)]

<hr>

The name of the month should be 
[r: month = getStrProp(monthStuff, "name")]
<hr>
[r: returnDate = strPropFromVars("weekDay, theDate, month")]

[h: macro.return = returnDate]