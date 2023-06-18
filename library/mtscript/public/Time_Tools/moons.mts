[h: myArgs = macro.args]

[h: theDate = data.getData("addon:", "com.ecyclops.greyhawk", "currentYearDate")]

[h: lunaMode = math.mod(ceiling((theDate)/3.5),8)]

[h: celeneMode = math.mod(ceiling((theDate +  37) / (11.375)), 8)]

[h: macro.return=strPropFromVars("lunaMode, celeneMode")]