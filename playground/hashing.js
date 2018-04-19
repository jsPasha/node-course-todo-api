const bcrypt = require('bcryptjs');

var password = '123asd!';

// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		console.log(hash);
// 	});
// })

var hashed = '$2a$10$O5Ghg3UXyjqY/2Brrsb22OW1/AUOO95qV.1f64bkgOBgQ4iWH/U4.';

bcrypt.compare(password, hashed, (err, res) => {
	console.log(res)
});