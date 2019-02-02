var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"

});


connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to mySQL with id: " + connection.threadId);
})


function read(ID) {
    if (ID) {
        connection.query("SELECT * FROM Products where itemId = ?", [ID], function (err, res) {
            if (err) throw err;
            console.log(res);
        })
    } else {
        connection.query("SELECT * FROM Products", function (err, res) {
            if (err) throw err;
            console.log(res);
        })
    }
}
// read();

function update(ID, productName, departmentName, price, stockQuantity) {
    connection.query(`UPDATE Products SET
    productName = ?,
    departmentName = ?,
    price = ?,
    stockQuantity = ?
    WHERE id = ?
     `, [productName, departmentName, price, stockQuantity, ID], function (err, res) {
            if (err) throw err
            console.log(res);
        })
}

// update();

//INQURIER

inquirer
    .prompt([
        {
            name: 'action',
            message: 'What is the product ID that you would like to buy?',
            type: 'rawlist',
            choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

        },

        {
            name: "action",
            message: "How many units would you like to purchase?",
            type: "input"
        }

    ])

    .then(answers => {
        if (answers.action >= 10) {
            inquirer
                .prompt([
                    {
                        name: "productName",
                        message: "Product Name ",

                    },
                    {
                        name: "departmentName",
                        message: "Department Name: ",

                    },
                    {
                        name: "price",
                        message: "Price: ",

                    },
                    {
                        name: "stockQuantity",
                        message: "Qty: "
                    }
                ])
                .then(function (answers) {
                    update(answers.productName, answers.departmentName, answers.price, answers.stockQuantity);

                })
        }


        else if (answers.action === stockQuantity > 0) {
            console.log("Sorry, OUT OF STOCK!");

        }



    });

// // read();