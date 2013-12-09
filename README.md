#At large districting
- Ran 12/8/13 with <a href="http://www.myajc.com/news/news/state-regional-govt-politics/impact-of-race-on-voting-hard-to-measure/ncDkH/" target="_blank">Impact of race on voting hard to measure</a>
- Goes with story about how electing representatives at-large vs by district tends to prevent black voters from being able to elect representative of their choice. Explores relationship between race and representation by county and their system.
- jQuery class helpers don't work on SVG objects, but older versions of Android and IE lt 10 do not support `element.classList`. Fixed with <a href="https://github.com/eligrey/classList.js" target="_blank">eligrey/classList.js</a> shim.

##Setup
- CSVtoJSON_aldistricts.py takes CSV file, reformats county names for display and adds " County", creates new field to match IDs in SVG, converts decimals to whole numbers and writes JSON file
- Send the script-styled SVG to print - to get the new SVG, view the application online, download the page, copy the SVG section and paste it into a fresh file. Save as .svg

###ToDo
- [ ] Highlight relevant table columns when selecting a filter, or hide the irrelevant ones
- [ ] Tooltips cut off on right side of mobile
