# mysql-hw (Bamazon)
In this HW I am making a mock store in node using a mysql database to mimic a store.

##MySql
* In mysql I created a database then created the mock info for the table.

##nodeJs/Js
*   Here I used 2 npms to connect this file with the database (mysql) and to interact with the user (inquirer)

*   The first thing that shows up is the list of items and a prompt asking the user to type an id for the product they would like to purchase. The only input that is accepted is a number.

*   Then the user is prompted to select an amount of the item they desire. If they pick an amount that is in stock the it tells the user enjoy your "item(s)" and syncs it with the database. If the user enters a number that is too high it tell them that we are out of stock or not enough stock. Then looping back to the initial prompt of entering an id for the item the user would like. This part also only accepts a number.

*   To exit the program the user has to click crtl+c.