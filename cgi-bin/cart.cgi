#!/usr/bin/env python  

# Import modules for CGI handling 
import cgi 

# Create instance of FieldStorage 
form = cgi.FieldStorage()


# Get data from fields
#make sure nulls dont crash us
try:
  qtyNuts     = form["nuts"].value
except:
  qtyNuts = 0;

try:
  qtyBolts    = form["bolts"].value
except:
  qtyBolts = 0;

try:
  qtyWashers  = form["washers"].value
except:
  qtyWashers = 0;

#item costs - will move to database in future
priceNuts    = 0.45 
priceBolts   = 2.15
priceWashers = 0.30

#determine cost of items ordered
#note: we dont blindly trust totals from the form, we use the db totals
costNuts    = float(qtyNuts)    * priceNuts
costBolts   = float(qtyBolts)   * priceBolts
costWashers = float(qtyWashers) * priceWashers

#total order cost
totalOrder = costNuts + costBolts + costWashers  

#string to hold the table to be constructed from html
tableString = "<p>Nothing has been ordered yet<p/>"

#build the table for the order to be inserted into a print statement
if costNuts == 0 and costBolts == 0 and costWashers == 0:
  tableString = "<p>Nothing has been ordered yet<p/>"
else:
  tableString = '<table class="center" summary="ItemsForSale">' + '<caption>Your Order</caption>'
  tableString = tableString + '<tr><th>Item</th><th>Product Code</th><th>Unit Price</th><th>Quantity</th><th>Cost</th></tr>'
  if costBolts > 0:
    tableString = tableString + '<tr><td>Bolt</td><td>B113</td><td>2.15</td><td>%s</td><td>%.2f</td></tr>' % (qtyBolts, costBolts) 
  if costNuts > 0:
    tableString = tableString + '<tr><td>Nut</td><td>N234</td><td>0.45</td><td>%s</td><td>%.2f</td></tr>' % (qtyNuts, costNuts)
  if costWashers > 0:
    tableString = tableString + '<tr><td>Washer</td><td>W359</td><td>0.30</td><td>%s</td><td>%.2f</td></tr>' % (qtyWashers, costWashers)
  tableString = tableString + '<tr><th>Total</th><th></th><th></th><th></th><td>%.2f</td></tr>' % (totalOrder)
  tableString = tableString + '</table>'

#insert a gap between the items ordered and the total.
tableString = tableString + "<br />"

print "Content-type:text/html\r\n\r\n"
print '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
print '<html xmlns="http://www.w3.org/1999/xhtml" lang="en">'
print '<head>'
print '<meta http-equiv="Content-Type" content="text/html" />'
print '<script type="text/javascript" src="http://csusap.csu.edu.au/~cduffe02/cart.js"></script>'
print '<link rel="stylesheet" type="text/css" href="http://csusap.csu.edu.au/~cduffe02/theme.css" />'
print '<title>Nuts R Us</title>'
print '</head>'
print '<body>'
print '<div id="whole_page">'
print '<div id="header">Nuts R Us</div>'
print '<div id="nav">'
print '<a href="http://csusap.csu.edu.au/~cduffe02/index.html">   Home | </a>'
print '<a href="http://csusap.csu.edu.au/~cduffe02/products.html">  Our Products | </a>'
print '<a href="http://csusap.csu.edu.au/cgi-pub/cduffe02/cart.cgi"> Shopping Cart </a>'
print '</div>'
print '<div id="content">'
print '<div id="logo">'
print '<img src="http://csusap.csu.edu.au/~cduffe02/img/logo.png" alt="MainLogo" width="142" height="142" />'
print '</div>'
print "<h1>Settle your account</h1>"
print '<h2>...And get your nuts in the post</h2>' 
print tableString
print '<form action="" onsubmit="return validateForm()" >'
print '<table class="center" summary="CheckOut">'
print '<tr>'
print '</tr>'
print '<tr>'
print '<th>Name</th>'
print '<td><input type = "text" name="fullname" id="fullname" size="20" /></td>'
print '</tr>'
print '<tr>'
print '<th>Email</th>'
print '<td><input type = "text" name="email" id ="email" size="20" /></td>'
print '</tr>'
print '<tr>'
print '<th>Phone</th>'
print '<td><input type = "text" id ="phone" name="phone" size="20" /></td>'
print '</tr>'
print '<tr>'
print '<th>Address</th>'
print '<td><input type = "text" id ="address" name = "address" size="20" /></td>'
print '</tr>'
print '</table>'
print '<p>'
print '<input type = "submit" value = "Process Order"/>'
print '<input type = "reset" value = "Clear Form"/>'
print '</p>'
print '</form>'
print '</div>'
print '</div>'
print '</body>'
print '</html>'