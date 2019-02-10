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

function create(productName, departmentName, price, stockQuantity) {
    connection.query(`
    INSERT INTO products(productName, departmentName, price, stockQuantity) VALUES (?, ?, ?, ?)
        `, [productName, departmentName, price, stockQuantity], function (err, res) {
            if (err) throw err;
            console.log(`New product: ${product} Created!`);
            // connection.end();
        })
}

// create("cupHolder", "accessories", 10.00, 10);

function read(ID) {
    if (ID) {
        connection.query("SELECT * FROM Products where ID = ?", [ID], function (err, res) {
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
read();

function update(ID, stockQuantity) {
    connection.query(`UPDATE products SET
    stockQuantity = stockQuantity -?
    WHERE id = ?
     `, [stockQuantity, ID], function (err, res) {
            if (err) throw err
            // console.log(res);
        })
}

// update(3, 10);

function destroy(id) {
    connection.query("DELETE FROM products WHERE id = ?", [id], function (err, res) {
        if (err) throw err;
        console.log(res);
    })
}


//INQURIER // ask ta about how this links to mySQL

inquirer
    .prompt([
        {
            name: 'action',
            message: 'What is the product ID that you would like to buy?',
            type: 'input'
        },
    ])

    .then(answers => {
        if (answers.action <= 20) {
            inquirer
                .prompt([
                    {
                        name: 'action',
                        message: 'How many products do you want to order?',
                        type: 'input',

                    },
                ])
        }
        else if (answers.action === "Read") {
            console.log("Read")
        }
        else if (answers.action === "Create") {
            console.log("Update")
        }
        else if (answers.action === "Delete") {
            console.log("Delete")
        }

    });


