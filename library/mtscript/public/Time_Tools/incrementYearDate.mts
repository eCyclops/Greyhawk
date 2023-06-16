[h: assert(isGM(),"This is a DM command.",0)]
[h: timeAdvance=arg(0)]
[h, if(argCount() == 0): timeAdvance = 0]

[h: currentDate = getLibProperty("currentYearDate", "Lib:Calendar")]
[h: maxDays = 364]

[h: newDate = currentDate + timeAdvance]

[h, if(newDate == 0), code: {
	[newDate = maxDays]
	[incrementYear(-1)]
}]

[h, while(newDate < 0), code: {
	[newDate = newDate + maxDays]
	[incrementYear(-1)]
}]

[h, while(newDate > maxDays), code: {
	[newDate = newDate - maxDays]
	[incrementYear(1)]
}]
[h, if(currentDate != newDate), code: {
	[setLibProperty("currentYearDate",newDate, "Lib:Calendar")]
	[moons(newDate)]
	[weather(1)]
}]
[h, if(isFrameVisible("Time and Temperature")): timeandtemp()]

[r: newDate]