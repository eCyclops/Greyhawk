[h: assert(isGM(),"This is a DM command.",0)]
[h: timeAdvance=arg(0)]
[h: currentYear = getYear()]

[h, if(listCount(timeAdvance) == 0): timeAdvance = 0]

[h: newYear = currentYear + timeAdvance]

[h, if(currentYear != newYear): setLibProperty("currentYear",newYear, "Lib:Calendar")]
[h, if(isFrameVisible("Time and Temperature")): timeandtemp()]

[r: newYear]