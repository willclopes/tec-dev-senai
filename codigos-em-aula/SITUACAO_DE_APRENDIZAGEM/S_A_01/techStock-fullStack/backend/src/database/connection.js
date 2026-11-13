import mysql from 'mysql2/promise'

export const db = await mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    //password: "123", 
    password: "1234",
    database: "techstock_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

//senha banco
//senha no pc de casa: 1234 (exige 4 caracters)
// senha pc senai: 123


console.log("Conectado ao mysql!")