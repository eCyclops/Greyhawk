[h: update = arg(0)]
[h, if(argCount()==0): update = 0]
[h: day = getLibProperty("currentYearDate", "Lib:Calendar")]

[h: thisQuarter = ceiling(day/91)]
[h: qDay        = day - 91 * (thisQuarter-1)]
[h: qMonth      = ceiling((qDay - 28)/28)+1]
[h: thisMonth   = qMonth + (4 * (thisQuarter - 1))]

[h: months = getLibProperty("months", "Lib:Calendar")]

[h: varsFromStrProp(listGet(getLibProperty("months", "Lib:Calendar"), thisMonth-1))]
	[h: 'name, baseTemp, highTemp, lowTemp, clearSkies, partlySkies, cloudySkies, precip, sunrise, sunset']

[h: high = baseTemp + eval(highTemp)]
[h: low  = baseTemp + eval( lowTemp)]
[h: cloudyRoll = d100]
[h, if(cloudyRoll <= clearSkies) : clouds = "clear"]
[h, if(cloudyRoll <= partlySkies): clouds = "partly cloudy"; clouds = "cloudy"]
[h: raining = d100]
[h, if(raining <= precip), code: {
	[itsRaining = strformat("a %d&#37; chance of precipitation today", precip)]
};
{
	[itsRaining = "no precipitation today"]
}]

[h: sunUp   = getStrProp(getTime(sunrise),"formattedTime")]
[h: sunDown = getStrProp(getTime( sunset),"formattedTime")]

[h: outPut = strformat("The sun will rise around %s, and set around %s.<br>The high temperature today will be %d&deg;, with a low of %d&deg;. The skies are %s, and there is %s.", sunUp, sunDown, high, low, clouds, itsRaining)]
[h, if(update): setLibProperty("currentWeather", outPut, "Lib:Calendar")]
[r: outPut]