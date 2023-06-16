[h: ids = getPC()]
[h: today = getLibProperty("currentYearDate", "Lib:Calendar")]
[h: noBirthdays = 1]
[foreach(id, ids,""), code: {
	[if(getProperty("birthdate", id)==today), code: {
		[h: noBirthdays = 0]
		[r:"It's "+getName(id)+"'s birthday.<br>"]
	};{}]
}]
[r, if(noBirthdays): "No one has a birthday today."]