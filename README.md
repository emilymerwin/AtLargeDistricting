#At large districting
- Goes with story about how electing representatives at-large vs by district tends to prevent black voters from being able to elect representative of their choice. Explores relationship between race and representation by county and their system.

##Setup
- CSVtoJSON_aldistricts.py takes CSV file, reformats county names for display and adds " County", creates new field to match IDs in SVG, converts decimals to whole numbers and writes JSON file
- Send the script-styled SVG to print - to get the new SVG, view the application online, download the page, copy the SVG section and paste it into a fresh file. Save as .svg

###ToDo
- [ ] Highlight relevent table columns when selecting a filter, or hide the irrelevant ones
- [ ] Filter buttons do not work on mobile
- [ ] Tooltips cut off on right side of mobile
