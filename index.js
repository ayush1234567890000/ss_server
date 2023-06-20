const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");


const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
	host: "sql12.freesqldatabase.com",
	user: "sql12627429",
	password: "ICt2tjeWJW",
	database: "sql12627429"
});

app.post("/save", (req, res) => {
	let data = [ req.body.name, req.body.fb ];
	let sql = "insert into student values(?, ?)";
	con.query(sql, data, (err, result) => {
		if (err)	res.send(err)
		else		res.send(result)
	})
})
 

app.listen(9999, () => { console.log("ready at 9999"); } )









