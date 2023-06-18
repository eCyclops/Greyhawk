[r: "Beginning to run onInit.mts"]


[h, code: {
    [r: "Setting date to beginning."]
    [data.setData("addon:", "lib:com.ecyclops.greyhawk", "currentMinute", 1]
    [data.setData("addon:", "lib:com.ecyclops.greyhawk", "currentSegment", 1]
    [data.setData("addon:", "lib:com.ecyclops.greyhawk", "currentWeather", ""]
    [data.setData("addon:", "lib:com.ecyclops.greyhawk", "currentYear", 576]
    [data.setData("addon:", "lib:com.ecyclops.greyhawk", "currentYearDate", 1]

    [r: "Setting month data"]
    [data.setData("addon:", "lib:com.ecyclops.greyhawk", "months",
        "name=Needfest ; baseTemp=32 ; highTemp=d10 ; lowTemp=-d20 ; clearSkies=23 ; partlySkies=50 ; cloudySkies=100 ; precip=46 ; sunrise=441 ; sunset=1021, name=Fireseek ; baseTemp=32 ; highTemp=d10 ; lowTemp=-d20 ; clearSkies=23 ; partlySkies=50 ; cloudySkies=100 ; precip=46 ; sunrise=441 ; sunset=1021, name=Readying ; baseTemp=34 ; highTemp=d6+4 ; lowTemp=-(d10+4) ; clearSkies=25 ; partlySkies=50 ; cloudySkies=100 ; precip=40 ; sunrise=415 ; sunset=1056, name=Coldeven ; baseTemp=42 ; highTemp=d8+4 ; lowTemp=-(d10+4) ; clearSkies=27 ; partlySkies=54 ; cloudySkies=100 ; precip=44 ; sunrise=372 ; sunset=1089, name=Growfest ; baseTemp=52 ; highTemp=d10+6 ; lowTemp=-(d8+4) ; clearSkies=20 ; partlySkies=55 ; cloudySkies=100 ; precip=42 ; sunrise=324 ; sunset=1119, name=Planting ; baseTemp=52 ; highTemp=d10+6 ; lowTemp=-(d8+4) ; clearSkies=20 ; partlySkies=55 ; cloudySkies=100 ; precip=42 ; sunrise=324 ; sunset=1119, name=Flocktime ; baseTemp=63 ; highTemp=d10+6 ; lowTemp=-(d10+6) ; clearSkies=20 ; partlySkies=53 ; cloudySkies=100 ; precip=42 ; sunrise=285 ; sunset=1150, name=Wealsun ; baseTemp=71 ; highTemp=d8+8 ; lowTemp=-(d6+6) ; clearSkies=20 ; partlySkies=60 ; cloudySkies=100 ; precip=36 ; sunrise=272 ; sunset=1172, name=Richfest ; baseTemp=77 ; highTemp=d6+4 ; lowTemp=-(d6+6) ; clearSkies=22 ; partlySkies=62 ; cloudySkies=100 ; precip=33 ; sunrise=285 ; sunset=1169, name=Reaping ; baseTemp=77 ; highTemp=d6+4 ; lowTemp=-(d6+6) ; clearSkies=22 ; partlySkies=62 ; cloudySkies=100 ; precip=33 ; sunrise=285 ; sunset=1169, name=Goodmonth ; baseTemp=75 ; highTemp=d4+6 ; lowTemp=-(d6+6) ; clearSkies=25 ; partlySkies=60 ; cloudySkies=100 ; precip=33 ; sunrise=313 ; sunset=1137, name=Harvester ; baseTemp=68 ; highTemp=d8+6 ; lowTemp=-(d8+6) ; clearSkies=33 ; partlySkies=54 ; cloudySkies=100 ; precip=33 ; sunrise=342 ; sunset=1090, name=Brewfest ; baseTemp=57 ; highTemp=d10+5 ; lowTemp=-(d10+5) ; clearSkies=35 ; partlySkies=60 ; cloudySkies=100 ; precip=36 ; sunrise=372 ; sunset=1041, name=Patchwall ; baseTemp=57 ; highTemp=d10+5 ; lowTemp=-(d10+5) ; clearSkies=35 ; partlySkies=60 ; cloudySkies=100 ; precip=36 ; sunrise=372 ; sunset=1041, name=Ready'reat ; baseTemp=46 ; highTemp=d10+6 ; lowTemp=-(d10+4) ; clearSkies=20 ; partlySkies=50 ; cloudySkies=100 ; precip=40 ; sunrise=406 ; sunset=1005, name=Sunsebb ; baseTemp=33 ; highTemp=d8+5 ; lowTemp=-d20 ; clearSkies=25 ; partlySkies=50 ; cloudySkies=100 ; precip=43 ; sunrise=439 ; sunset=996"
    ]
    [data.setData("addon:", "lib:com.ecyclops.greyhawk", "weekDays", "Freeday, Starday, Sunday, Moonday, Godsday, Waterday, Earthday")]

} ]

[r: broadcast("onFirstInit ran.")]