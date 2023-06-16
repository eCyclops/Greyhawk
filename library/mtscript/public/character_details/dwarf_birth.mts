[h: birthRoll = arg(0)]
[h: numArgs = listCount(birthRoll)]

[h, if (numArgs == 0): birthRoll = d100]

[h, if(birthRoll >= 1 && birthRoll <= 4), code: {
	[birthPlace = "Bissel"]
	[alignments = "NG, N, LG, LN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 5 && birthRoll <= 6), code: {
	[birthPlace = "Dyvers"]
	[alignments = "LN, N"]
	[languages = "Baklunish"]
}]

[h, if(birthRoll >= 7 && birthRoll <= 8), code: {
	[birthPlace = "Furyondy"]
	[alignments = "LG, NG, LN"]
	[languages = "Common, 5% Velondi"]
}]

[h, if(birthRoll >= 9 && birthRoll <= 12), code: {
	[birthPlace = "Geoff"]
	[alignments = "CG, CN, NG"]
	[languages = "Flan, Common"]
}]

[h, if(birthRoll >= 13 && birthRoll <= 16), code: {
	[birthPlace = "Gran March"]
	[alignments = "LN"]
	[languages = "Common, 10% Keolandish"]
}]

[h, if(birthRoll >= 17 && birthRoll <= 18), code: {
	[birthPlace = "Great Kingdom"]
	[alignments = "LG, NG, CG, LN, N, CN, LE, NE, CE"]
	[languages = "Common, Oeridian"]
}]

[h, if(birthRoll >= 19 && birthRoll <= 20), code: {
	[birthPlace = "Greyhawk"]
	[alignments = "LG, NG, CG, LN, N, CN, LE, NE, CE"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 21 && birthRoll <= 24), code: {
	[birthPlace = "Highfolk"]
	[alignments = "NG, N, CN"]
	[languages = "Elven, Common, Sylvan"]
}]

[h, if(birthRoll >= 25 && birthRoll <= 26), code: {
	[birthPlace = "Idee"]
	[alignments = "N, CN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 27 && birthRoll <= 28), code: {
	[birthPlace = "Irongate"]
	[alignments = "LN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 29 && birthRoll <= 34), code: {
	[birthPlace = "Onnwal"]
	[alignments = "LN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 35 && birthRoll <= 38), code: {
	[birthPlace = "Theocracy of the Pale"]
	[alignments = "LN, LG"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 39 && birthRoll <= 42), code: {
	[birthPlace = "Perrenland"]
	[alignments = "LN, LG, N"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 43 && birthRoll <= 46), code: {
	[birthPlace = "Ratik"]
	[alignments = "N, CN, CE"]
	[languages = "Common, Oeridian"]
}]


[h, if(birthRoll >= 47 && birthRoll <= 48), code: {
	[birthPlace = "Spindrift Isles"]
	[alignments = "NG, N, CN"]
	[languages = "Common, Lendorian"]
}]

[h, if(birthRoll >= 49 && birthRoll <= 54), code: {
	[birthPlace = "Sterich"]
	[alignments = "CN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 55 && birthRoll <= 59), code: {
	[birthPlace = "Sunndi"]
	[alignments = "LN, CG, N"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 60 && birthRoll <= 63), code: {
	[birthPlace = "Duchy of Tenh"]
	[alignments = "LN, N"]
	[languages = "Flan, Common"]
}]

[h, if(birthRoll >= 64 && birthRoll <= 66), code: {
	[birthPlace = "Ulek County"]
	[alignments = "LN, N"]
	[languages = "Flan, Common"]
}]

[h, if(birthRoll == 72), code: {
	[birthPlace = "Ulek County, Ulek Duchy, Ulek Principality"]
	[alignments = "LN, LG, CG, CN, N"]
	[languages = "Common"]
}]

[h, if(birthRoll == 73), code: {
	[birthPlace = "Ull"]
	[alignments = "CN, N, CE"]
	[languages = "Baklunish"]
}]

[h, if(birthRoll >= 74 && birthRoll <= 78), code: {
	[birthPlace = "Urnst County, Urnst Duchy"]
	[alignments = "N, NG"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 79 && birthRoll <= 88), code: {
	[birthPlace = "Veluna"]
	[alignments = "LG, NG"]
	[languages = "Common, 10% Velondi"]
}]

[h, if(birthRoll >= 89 && birthRoll <= 94), code: {
	[birthPlace = "Wild Coast"]
	[alignments = "LG, NG, CG, LN, N, CN, LE, NE, CE"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 95 && birthRoll <= 96), code: {
	[birthPlace = "Yeomanry"]
	[alignments = "LG, LN"]
	[languages = "Common, 5% Keolandish"]
}]

[h, if(birthRoll >= 97 && birthRoll <= 98), code: {
	[birthPlace = "Zeif"]
	[alignments = "LN, N"]
	[languages = "Baklunish"]
}]

[h, if(birthRoll >= 99 && birthRoll <= 100), code: {
	[birthPlace = "Elsewhere, or choose"]
	[alignments = "LG, NG, CG, LN, N, CN, LE, NE, CE"]
	[languages = "Common, Baklunish, Oeridian, Fruz (Cold Tongue), Flan, Velondi, Keolandish, Nyrondese"]
}]

[r: macro.return = strPropFromVars("birthPlace, alignments, languages")]