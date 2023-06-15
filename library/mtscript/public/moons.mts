[h: myArgs = macro.args]

[h: theDate = getLibProperty("currentYearDate", "Lib:Calendar")]

[h: lunaMode = math.mod(ceiling((theDate)/3.5),8)]

[h: celeneMode = math.mod(ceiling((theDate +  37) / (11.375)), 8)]

[h: macro.return=strPropFromVars("lunaMode, celeneMode")]