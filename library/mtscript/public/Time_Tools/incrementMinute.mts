[h: assert(isGM(),"This is a DM command.",0)]
[h: timeAdvance=arg(0)]
[h: currentMinute = data.getData("addon:", "com.ecyclops.Greyhawk", "currentMinute")]

[h, if(listCount(timeAdvance) == 0): timeAdvance = 0]

[h: newMinute = currentMinute + timeAdvance]
[h: updateStates(timeAdvance)]

[h, while(newMinute < 0), code: {
	[newMinute = newMinute + 1440]
	[incrementYearDate(-1)]
}]

[h, while(newMinute > 1439), code: {
	[newMinute = newMinute - 1440]
	[incrementYearDate(1)]
	[today()]
	[birthdays()]
}]
[h, if(currentMinute != newMinute): setLibProperty("currentMinute",newMinute, "Lib:Calendar")]
[h, if(isFrameVisible("Time and Temperature")): timeandtemp()]
[r: newMinute]