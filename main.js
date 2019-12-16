
var faker = require('faker');
faker.locale = "pl";
function main(){
	console.log(faker.fake("{{name.lastName}}, {{name.firstName}}}"));
}

main();