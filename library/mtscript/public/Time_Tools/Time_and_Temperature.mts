[h: yearDate = macro.args]
[h, if(argCount() == 0): yearDate = getLibProperty("currentYearDate", "Lib:Calendar")]

[h: year = getLibProperty("currentYear", "Lib:Calendar")]
[h: todaysDate = getDate(yearDate)]

[h: varsFromStrProp(todaysDate)]
	[h: 'weekDay, theDate, month']

[h: time = getLibProperty("currentMinute", "Lib:Calendar")]

[h: varsFromStrProp(getTime())]

[h: frameSize="width=400; height=400"]

[h: titleTxt="Does Anyone Really Know What Time it Is?"]

[h: varsFromStrProp(moons(yearDate))]
	[h: 'celeneMode, lunaMode']

[h: phases = "New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Third Quarter, Waning Crescent"]

[h: celenePhase = listGet(phases, celeneMode)]
[h: lunaPhase   = listGet(phases, lunaMode)]

[h: celenePhasePic = getImage("Celene - " + celenePhase)]
[h: lunaPhasePic   = getImage("Luna - " + lunaPhase)]

[frame5 ("Time and Temperature", frameSize): {
	<html>
		<head>
			<title>[r: titleTxt]</title>
			<link rel="stylesheet" type="text/css" href="Greyhawk_CSS@Lib:Greyhawk:Macros">
		</head>
		<body>
			<h2 style="text-align: center">
			[r:strformat("%d:%02d %s %s, %d %s %d", hour, minute, am_pm, weekDay, theDate, month, year)]
			</h2>
			<table>
				<tr><th>Luna</th><th>Celene</th></tr>
				<tr><td style="text-align: center">[r:lunaPhase]</td>
				<td style="text-align: center">[r:celenePhase]</td></tr>
				<tr><td style="text-align: center"><img src='[r:lunaPhasePic]' width=70></td>
				<td style="text-align: center"><img src='[r:celenePhasePic]' width=50></td></tr>
				<tr><td colspan=2 style="text-align: center">[r:getLibProperty("currentWeather", "Lib:Calendar")]</td></tr>
				<tr><td colspan=2 style="text-align: center">[r: birthdays()]
			</table>
			[r:macroLink("Refresh", "Time_and_Temperature@Lib:Greyhawk:Macros")]
		</body>
	</html>
}]
