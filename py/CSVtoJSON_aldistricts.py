#! /usr/bin/env python
import csv
import json

f = open( '../data/at_large_county_data.csv', 'rU' )
reader = csv.DictReader( f, dialect='excel')

# Parse the CSV into JSON
out = json.dumps( [ row for row in reader ] )
print "JSON parsed!"
# Save the JSON
f = open( '../data/districts.json', 'w')
f.write(out)
print "JSON saved!"