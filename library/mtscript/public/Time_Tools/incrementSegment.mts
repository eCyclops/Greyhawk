[h: assert(isGM(),"This is a DM command.",0)]
[h: timeAdvance=arg(0)]
[h: currentSegment = data.getData("addon:", "com.ecyclops.Greyhawk", "currentSegment")]

[h, if(listCount(timeAdvance) == 0): timeAdvance = 0]

[h: newSegment = currentSegment + timeAdvance]

[h, while(newSegment < 0), code: {
	[newSegment = newSegment + 10]
	[incrementMinute(-1)]
}]

[h, while(newSegment > 9), code: {
	[newSegment = newSegment - 10]
	[incrementMinute(1)]
}]
[h, if(currentSegment != newSegment): setLibProperty("currentSegment",newSegment, "Lib:Calendar")]

[h, if(isFrameVisible("Time and Temperature")): timeandtemp()]

[r: currentSegment]