[h: minute = arg(0)]
[h, if(argCount()==0): minute = number(data.getData("addon:", "com.ecyclops.greyhawk", "currentMinute"))]

[h: am_pm = ""]

[h: hour = floor(minute / 60)]

[h: newHour = math.mod(hour, 24)]

[h, if(newHour < 12): am_pm = "am"; am_pm = "pm"]
[h: newHour = math.mod(newHour, 12)]
[h: minute = math.mod(minute, 60)]
[h, if(newHour == 0): hour = 12; hour = newHour]

[h: formattedTime = strformat("%d:%02d %s", hour, minute, am_pm)]

[h: returnTime = strPropFromVars("hour, minute, am_pm, formattedTime")]

[h: macro.return = returnTime]