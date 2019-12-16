var mysql = require('mysql');
var faker = require('faker');
var express = require('express');
var app = express();
var myArr= [];
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
faker.locale = "pl";

 
var connection = mysql.createConnection({
  	host     : 'localhost',
  	user     : 'root',  
  	database : 'Strona',  
	multipleStatements: true
});
 
app.get("/", function(req, res){
 	var q = 'SELECT COUNT(*) as count FROM Menu';
 	connection.query(q, function (error, results) {
 	if (error) throw error;
	var count = results[0].count;
		var q = 'SELECT COUNT(*) as count FROM Pracownicy';
		connection.query(q, function (error, results) {
 		if (error) throw error;
		var count2 = results[0].count;
			var q = 'SELECT COUNT(*) as count FROM Klienci';
			connection.query(q, function (error, results) {
 			if (error) throw error;
			var count3 = results[0].count;
				var q = 'SELECT * FROM Menu';
				connection.query(q, function (error, rows, results) {
				if (error) throw error;
				for (var i = 0; i < rows.length; i++) {
				myArr.push(rows[i].nazwa_dania);
				}
				res.render("home", {data: count, data2: count2, data3: count3, pizza1: myArr[0], pizza2: myArr[1], pizza3: myArr[2], pizza4: myArr[3], pizza5: myArr[4], pizza6: myArr[5], pizza7: myArr[6], pizza8: myArr[7], pizza9: myArr[8], pizza10: myArr[9]});
				});

 			});
 		});

	});
});
 
app.listen(3000, function () {
 console.log('App listening on port 3000!');
});

app.get("/joke", function(req, res){
 var joke = "Jak nazywa się kot który leci? Kotlecik!";
 res.send(joke);
});

//WYŚWIETLANIE CAŁEGO MENU Z BAZY
//var q = 'SELECT * FROM Menu ';
//connection.query(q, function (error, results, fields) {
// if (error) throw error;
// console.log(results);
//});

// DODAWANIE 20 KLIENTÓW DO BAZY
// var data = [];
// for(var i = 0; i < 20; i++){
//     data.push([
//         faker.name.firstName(),
// 		faker.name.lastName(),
//         faker.phone.phoneNumber(),
// 		faker.internet.email(),
// 		faker.address.city(),
// 		faker.address.streetName(),
// 		faker.random.number(200),
// 		faker.random.number(35),
// 		faker.random.number(10000, 99999)
//     ]);
// }
// var q = 'INSERT INTO Klienci (imie_klienta, nazwisko_klienta, telefon_klienta, email_klienta, miasto_klienta, ulica_klienta, numer_domu_klienta, numer_lokalu_klienta, kod_pocztowy_klienta) VALUES ?';

// connection.query(q, [data], function(err, result) {
//   console.log(err);
//   console.log(result);
// });

// connection.end();
