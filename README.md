#At-large districting
- Goes with story about how electing representatives at-large vs by district tends to prevent black voters from being able to elect representative of their choice. Explores relationship between race and representation by county and their system.

##Setup
- CSVtoJSON_aldistricts.py takes CSV file, reformats county names for display and adds " County", creates new field to match IDs in SVG, converts decimals to whole numbers and writes JSON file

###ToDo
- Add election type to tooltips - do this by converting ALL_AL etc. to just the first word and lower case in parser and just add "at large" to the end in .js

