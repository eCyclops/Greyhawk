[h: yearDate = arg(0)]

[h, if(argCount()==0): yearDate=getLibProperty("currentYearDate", "Lib:Calendar")]

[h: yearDate = number(yearDate)]

[h: thisQuarter = ceiling(yearDate/91)]
[h: qDay = yearDate - (91*(thisQuarter-1))]
[h: qMonth = ceiling((qDay-28)/28)+1]

[h: theDate = qDay - (28 * (qMonth -1))]

[h: weekDay = math.mod(yearDate, 7)]
[h: weekDay = listGet("Freeday, Starday, Sunday, Moonday, Godsday, Waterday, Earthday", weekDay)]

[h: thisMonth = qMonth + (4 * (thisQuarter-1))]

[h: months = getLibProperty("months", "Lib:Calendar")]

[h: monthStuff = listGet(months, thisMonth-1)]
[h: month = getStrProp(monthStuff, "name")]

[h: returnDate = strPropFromVars("weekDay, theDate, month")]

[h: macro.return = returnDate]