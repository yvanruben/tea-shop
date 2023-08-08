const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let customerSchema = new Schema({
name: {
	type: String
},
email: {
	type: String
},
rollno: {
	type: Number
}
}, {
	collection: 'customer'
})

module.exports = mongoose.model('Customer', customerSchema)
