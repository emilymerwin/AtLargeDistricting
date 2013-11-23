#! /usr/bin/env python
import csv
import json
import decimal
import re

f = open( '../data/at_large_county_data.csv', 'rU' )
reader = csv.DictReader( f, fieldnames = ( "county", "blkvoters", "blkofficials", "representation", "category" ), dialect='excel') #doing it this way will put row 1 into your data - exclude fieldnames to use row 1 as fieldnames
reader.next()  # skip original header row
fixed = []

#convert from decimal percent format to whole number
def rounder(n):
    dec = int(round(decimal.Decimal(n), 2)*100)
    return str(dec)

for row in reader:
    row['county'] = row['county'].title()

    if re.search("Mcintosh", row['county']):
        row['county'] = "McIntosh"
    if re.search("Dekalb", row['county']):
        row['county'] = "DeKalb"
    if re.search("Mcduffie", row['county']):
        row['county'] = "McDuffie"

    #some counties have spaces in names, we need ID field with no spaces to match up with SVG IDs
    cID = row['county']
    if ' ' in cID:
        cID = cID.split()[0]

    cat = row['category'].split("_")[0].lower()
    row['category'] = cat

    row['cID'] = cID
    row['county'] = row['county'] + " County"
    row['blkvoters'] = rounder(row['blkvoters'])
    row['blkofficials'] = rounder(row['blkofficials'])
    row['representation'] = rounder(row['representation'])

    fixed.append(row)

# Parse the CSV into JSON
out = json.dumps( fixed, indent=4)
print "JSON parsed!"
# Save the JSON
f = open( '../data/districts.json', 'w')
f.write(out)
print "JSON saved!"