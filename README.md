# Greyhawk
MapTool macro framework for working with Oerth/Flanaess/Greyhawk and AD&amp;D

## Changelog 2023-06-17
Well, after dancing around the thorn bush for way too long, I figured out how to put Needfest at the beginning of the year. tbh, I didn't test fully whether Sunsebb still works, so please report bugs.

This will likely be the last release as a `.rpmap` file — since development is moving into the **Addon Library** space, I won't have a map to export. However, it wasn't terrible to port my changes to the Addon Library back to this, so if you are running an earlier version of MapTool and can't use an Addon Library, I may have mercy on you. Then again, you can just take the changes from the `.mts` files on this repo and put them on the appropriate macros in MapTool if you want.

So, there you go. New release v0.0.6.

## Changelog 2023-06-16
I removed all of the assets, since they were technically "Releases". You can now find them under releases (to the right, on Github, or [https://github.com.ecyclops.greyhawk/releases](https://github.com.ecyclops.greyhawk/releases) ).

The next release will be from a new reworking of the Library. It will be an **Addon Library** as supported by MapTool 1.11 and later. As such, it will have version-controlled individual script files, etc. In short, what I've been dreaming of. This is a large undertaking, but my [Facing](https://github.com/eCyclops/Facing) library worked, so I'm encouraged that it can be done.

## Changelog 2022-01-28
- The "start" date is now set to the earliest possible date and time, starting with the Greyhawk Gold Box (World of Greyhawk box set). 12:00am 1 Fireseek 576.
- I realize that this is technically a week after the earliest date, since the year begins with Needfest. However, because of the way I programmed the month/date calculations, this implementation starts with Fireseek. The moon phases should still be correct with the official material.
- Fixed bugs caused by having multiple copies of the macros that I was editing. Now, all of the "Campaign" macro buttons simply call macros from the library, so that they are only edited in one place.
- Fixed bug with display of the calendar. It now displays, using HTML 5. Styling is minimal, but contributions are welcome.
- Fixed display width of "Time and Temperature" frame, and changed to HTML 5. Load time is longer, but I think it looks nicer.
- In case it wasn't clear above, +Date, +Hour, +Turn, and +Round all work as expected, now.
- Removed reference to a macro to update states on tokens from another library. This is needed in my campaign, but until I'm ready (and the author is ready) for me to include it with this framework, it needs to be stripped out.
- Added the yearDateFromDate `stardate()` macro, to convert dates to the integer date used by this tool.
- Added a macro to set the age property for a token. This and the Show Age buttons have been added to the "Campaign" section.
- Added a macro button to the "Campaign" section to increment by 1 turn. I use this a lot in my campaign.

## Features
Use the `age()` macro to find the age (and the nearest birthday) of a selected token. An error message will notify you if there is not one recorded on the token.
Use the `setAge()` macro to set the age property of a token.
Use the `birthdays()` macro to list any player character tokens that have a birthday "today".
Use the `weather()` macro to show the sunrise, sunset, and weather forecast for the day. (The same information as on Time and Temperature, except the weather is probably re-rolled.)
A frame titled Time and Temperature will show the current date, time, and weather forecast, along with the phases of Luna and Celene, and whether anyone has a birthday.
A frame titled Calendar will show a calendar of the entire Oerth year, with the moon phases. Holidays are not yet included.
Increment (or decrement, if you enter a negative number) the time or date by days, hours, turns, or rounds (minutes). Not currently implemented are months, years, or segments.
There is the beginning of work to randomly generate a birthplace, along with alignment information and demographic information for the selected country.
