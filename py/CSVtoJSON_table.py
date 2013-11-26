#! /usr/bin/env python
import csv
import json
from collections import OrderedDict as ordereddict
#this file will convert csv to its json equivalent, but note that order will not be mantained
# Open the CSV
f = open( '../data/votingtable.csv', 'rU' )  
#reader = csv.DictReader( f, fieldnames = ( "school","fiscyear","tuitionfees","hopepays","studentowes","source","notes" )) #doing it this way will put row 1 into your data - exclude fieldnames to use row 1 as fieldnames
reader = csv.DictReader( f, dialect='excel')
# Parse the CSV into JSON
out = json.dumps( [ row for row in reader ], indent=4 )
print "JSON parsed!"
# Save the JSON
f = open( '../data/votingtable.json', 'w')
f.write(out)
print "JSON saved!"