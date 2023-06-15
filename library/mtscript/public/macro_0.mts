[h:assert(isGM(),"This is a DM command.",0)]
[h: assert(getSelected()!='',"You must select token(s) to use this command.",0)]

[h: myIDs = getSelected()]

[foreach(myID,myIDs,"<br>"), code: {

[h: myName = getName(myID)]

[h: assert(hasProperty("birthdate",myID),"I don't know "+myName+"'s birth date.")]
[h: myBirthday = getProperty("birthdate", myID)]
[h: myBirthYear = getProperty("birthyear", myID)]
[h: myGender = getProperty("sex", myID)]
[h, if(myGender == "m"): pronoun = "his"; pronoun = "her"]
[h: varsFromStrProp(getDate(myBirthday))]

[h: thisDay = getLibProperty("currentYearDate", "Lib:Calendar")]

[h: myAge = getYear() - myBirthYear]
[h, if(myBirthday < thisDay): myAge = myAge +1]

[h: charDetails = getProperty("Character_Details", myID)]
[h: charDetails = setStrProp(charDetails, "Age", myAge)]
[h: setProperty("Character_Details", charDetails, myID)]

[h: dayShift = myBirthday - thisDay]

[h: since=""]
[h, if(dayShift > 0):since=dayShift+" days until "]
[h, if(dayShift < 0):since=(-1)*dayShift+" days since "]

[r: strformat("%{myName} is %{myAge} years old, and it's %{since} %{pronoun} birthday.")]
}]
[r: strformat("%s birthday is on %{theDate} %{month} %{myBirthYear}", capitalize(pronoun))]