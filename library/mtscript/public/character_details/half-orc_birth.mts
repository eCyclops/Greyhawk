[h: birthRoll = arg(0)]
[h: numArgs = listCount(birthRoll)]

[h, if (numArgs == 0): birthRoll = d100]

[h, if(birthRoll <= 3), code: {
	[birthPlace = "Prelacy of Almor"]
	[alignments = "LN, LG"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 4 && birthRoll <= 5), code: {
	[birthPlace = "Bissel"]
	[alignments = "NG, N, LG, LN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 6 && birthRoll <= 7), code: {
	[birthPlace = "Ekbir"]
	[alignments = "LN, N"]
	[languages = "Baklunish"]
}]

[h, if(birthRoll == 8), code: {
	[birthPlace = "Frost Barbarians, Ice Barbarians, Snow Barbarians"]
	[alignments = "CN"]
	[languages = "Fruz (Cold Tongue)"]
}]

[h, if(birthRoll >= 9 && birthRoll <= 18), code: {
	[birthPlace = "Furyondy"]
	[alignments = "LG, NG, LN"]
	[languages = "Common, 5% Velondi"]
}]

[h, if(birthRoll >= 19 && birthRoll <= 20), code: {
	[birthPlace = "Geoff"]
	[alignments = "CG, CN, NG"]
	[languages = "Flan, Common"]
}]

[h, if(birthRoll == 21), code: {
	[birthPlace = "Gran March"]
	[alignments = "LN"]
	[languages = "Common, 10% Keolandish"]
}]

[h, if(birthRoll >= 22 && birthRoll <= 29), code: {
	[birthPlace = "Great Kingdom"]
	[alignments = "LG, NG, CG, LN, N, CN, LE, NE, CE"]
	[languages = "Common, Oeridian"]
}]

[h, if(birthRoll >= 30 && birthRoll <= 32), code: {
	[birthPlace = "Greyhawk"]
	[alignments = "LG, NG, CG, LN, N, CN, LE, NE, CE"]
	[languages = "Common"]
}]

[h, if(birthRoll == 33), code: {
	[birthPlace = "Idee"]
	[alignments = "N, CN"]
	[languages = "Common"]
}]

[h, if(birthRoll == 34), code: {
	[birthPlace = "Irongate"]
	[alignments = "LN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 35 && birthRoll <= 37), code: {
	[birthPlace = "Keoland"]
	[alignments = "LN, NG, CG, CN, N"]
	[languages = "Common, 15% Keolandish"]
}]

[h, if(birthRoll == 38), code: {
	[birthPlace = "Ket"]
	[alignments = "CN, N"]
	[languages = "Baklunish, Common"]
}]

[h, if(birthRoll >= 39 && birthRoll <= 40), code: {
	[birthPlace = "Lordship of the Isles"]
	[alignments = "LN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 41 && birthRoll <= 50), code: {
	[birthPlace = "Nyrond"]
	[alignments = "LN, LG, NG, CG"]
	[languages = "Common, 15% Nyrondese"]
}]

[h, if(birthRoll >= 51 && birthRoll <= 52), code: {
	[birthPlace = "Onnwal"]
	[alignments = "LN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 53 && birthRoll <= 54), code: {
	[birthPlace = "Theocracy of the Pale"]
	[alignments = "LN, LG"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 55 && birthRoll <= 57), code: {
	[birthPlace = "Perrenland"]
	[alignments = "LN, LG, N"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 58 && birthRoll <= 59), code: {
	[birthPlace = "Plains of the Paynims"]
	[alignments = "CN, N"]
	[languages = "Baklunish"]
}]

[h, if(birthRoll == 60), code: {
	[birthPlace = "Ratik"]
	[alignments = "N, CN, CE"]
	[languages = "Common, Oeridian"]
}]

[h, if(birthRoll >= 61), code: {
	[birthPlace = "Rovers of the Barrens"]
	[alignments = "CN, N"]
	[languages = "Flan"]
}]

[h, if(birthRoll == 62), code: {
	[birthPlace = "Sea Barons"]
	[alignments = "CN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 63 && birthRoll <= 64), code: {
	[birthPlace = "Shield Lands"]
	[alignments = "LG, NG, N"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 65 && birthRoll <= 66), code: {
	[birthPlace = "Sterich"]
	[alignments = "CN"]
	[languages = "Common"]
}]

[h, if(birthRoll >= 67 && birthRoll <= 68), code: {
	[birthPlace = "Sunndi"]
	[alignments = "LN, CG, N"]
	[languages = "Common"]
}]

[h, if(birthRoll == 69), code: {
	[birthPlace = "Duchy of Tenh"]
	[alignments = "LN, N"]
	[languages = "Flan, Common"]
}]

[h, if(birthRoll == 70), code: {
	[birthPlace = "Tiger Nomads, Wolf Nomads"]
	[alignments = "N, CN"]
	[languages = "Baklunish"]
}]

[h, if(birthRoll == 71), code: {
	[birthPlace = "Tusmit"]
	[alignments = "N"]
	[languages = "Baklunish"]
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