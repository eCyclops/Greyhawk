[h:assert(isGM(),"This is a DM command.",0)]
[h: assert(getSelected()!='',"You must select token(s) to use this command.",0)]

[h: myIDs = getSelected()]

[foreach(myID,myIDs,"<br>"), code: {

	[h: myName = getName(myID)]

	[h: birthdayExists = hasProperty("birthdate",myID)]

	[h, if(birthdayExists), code : {
		[currBirthdate=getProperty("birthdate",myID)]
		[currYear = getProperty("birthyear",myID)]
		[currBirth=getDate(currBirthdate)]
		[currBirthday = getStrProp(currBirth, "theDate")]
		[currBirthmonth = getStrProp(currBirth, "month")]
		[birthdayText = strformat("Current birthday is %s %s %s",currBirthday, currBirthmonth, currYear)]
	};
	{
		[birthdayText = "Character doesn't have a birthday"]
	}]
	[h: header="junkVar|<html><h3>"+birthdayText+"</h3><h3>The World of Greyhawk Gazeteer was finished in CY 576.</h3>"+
		"<h3>The Greyhawk Wars were from CY 582 to the end of 584.</h3>"+
		"<h4>Each of the months has 28 days, and the festivals have 7 each.</h4></html>|<html>&nbsp;</html>|LABEL"]
	[h: newBirthday = input(
		header,
		"newBirthdate|1|New Birth Date",	"newBirthmonth|Needfest,Fireseek,Readying,Coldeven,Growfest,Planting,Flocktime,Wealsun,Richfest,Reaping,Goodmonth,Harvester,Brewfest,Patchwall,Ready'reat,Sunsebb|New Birth Month|LIST|SELECT=0 VALUE=STRING",
	"newBirthyear|556|New Birth Year")]

	[h: abort(newBirthday)]
	
	[r: newBirthYeardate = stardate("[];theDate="+newBirthdate+";theMonth="+newBirthmonth)]
	[r: setProperty("birthdate",newBirthYearDate,myID)]
	[r: setProperty("birthyear",newBirthyear,myID)]
	[age()]
}
]