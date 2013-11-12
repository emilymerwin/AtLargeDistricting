#! /usr/bin/env python
import csv
import json

f = open( '../data/at_large_county_data.csv', 'rU' )
reader = csv.DictReader( f, dialect='excel')

fixed = []

#some counties have spaces in names, we need ID field with no spaces to match up with SVG IDs
for row in reader:
    cID = row['COUNTY'].capitalize()
    if ' ' in cID:
        cID = cID.split()[0]

    row['cID'] = cID
    fixed.append(row)

# Parse the CSV into JSON
out = json.dumps( fixed, indent=4)
print "JSON parsed!"
# Save the JSON
f = open( '../data/districts.json', 'w')
f.write(out)
print "JSON saved!"