[h: assert(isGM(),"This is a DM command.",0)]
[h: timeAdvance=arg(0)]
[h, if (listCount(timeAdvance) == 0): timeAdvance = 0]
[h: incrementMinute(timeAdvance)]
