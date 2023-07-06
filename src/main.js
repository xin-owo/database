const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

let sql = `
CREATE TABLE IF NOT EXISTS Users(
    ID TEXT PRIMARY KEY,
    Username TEXT,
    Emali TEXT,
    DOB TEXT
);
`
let x = `SELECT name FROM pragma_table_info("Users");`

let c = `
ALTER TABLE Users
RENAME COLUMN Email To Emali;
 `
let d = `
INSERT INTO Users (ID,Username,Emali,DOB)
VALUES ("13581","Bob","bob@csie.com","2005-10-28");
`
let e = `
SELECT * FROM Users;
`
let f = `
SELECT * FROM Users
WHERE ID = "13581"`
let update = `UPDATE Users SET Emali = "bob@csie.com" WHERE ID ="13581"`
let g = `DELETE FROM Users WHERE ID = "13581"`

//db.all(f, CallbackFunc);
//db.exec(update, CallbackFunc);
//db.all(e, CallbackFunc);
//db.all(c, CallbackFunc);
//db.all(d, CallbackFunc);
//db.all(x, CallbackFunc);
//db.exec(sql, CallbackFunc);
db.exec(g, CallbackFunc);


