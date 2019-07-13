var mysql = require("mysql");
var inquirer = require("inquirer");

var options = {
    host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
}

var connection = mysql.createConnection(options);
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    var sql = "select * from products";

      connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    customer();
  });
});

// var customerQ1 = [{
//   type: 'input',
//   name: 'custQ1',
//   message: "Please enter the ID of the product you would like to buy?",
// }]

// inquirer.prompt(customerQ1).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// })

function customer() {
    inquirer
      .prompt([
        {
          name: "input-id",
          type: "input",
          message: "Please enter the ID of the product you would like to buy?",
          validate: function intChecker(input_id){
            const reg = /^\d+$/;
            return reg.test(input_id) || "Enter a number for ID"
          }
        },
        {
          name: "input-Total",
          type: "input",
          message: "Please enter the amount of units you would like to purchase?",
          validate: function intChecker(input_total){
            const reg = /^\d+$/;
            return reg.test(input_total) || "Enter a number for ID"
          }
        }
      ])
      // prodSelect()
      .then(function(answer){
        var sql = "SELECT * FROM products WHERE product_id = ?";
          var val = [answer.input_total];
        sql = mysql.format(sql, val);
        connection.query(sql, function (err, result){
          if (answer.input_total <= result[0].stock_quantity){
            console.log("\nEnjoy your Item");

            var userTotal = result[0].stock_quantity - answer.item_total;

            connection.query(
              "update products set ? where ?",
              [
                {
                  stock_quantity : userTotal
                },
                {
                  product_id : result[0].product_id
                }
              ]
            )
            var userCost = parseFloat((result[0].price * answer.input_total).toFixed(2));
            console.log("\nYou owe $" + userCost)
          }
          else{
            console.log("\nNot enough stock or We are out of stock.");
            customer();
          }
        
        })
      })
  }

// function prodSelect(){
//   connection.query("SELECT * FROM products WHERE ?", { products: answer.product_id }, function(err, products) {
//     console.log(
//       "product_id: " +
//         res[0].product_id
//     );
// })
// }