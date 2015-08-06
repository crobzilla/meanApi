var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RestaurantSchema = new Schema({

    _id: Schema.Types.ObjectId,
    address: {
        building: Number,
        coord: [Number],
        street: String,
        zipcode: String
    },
    borough: String,
    cuisine: String,
    grades: [
        {
            date: Date,
            grade: String,
            score: Number
        }
    ],
    name: String,
    restaurant_id: String

});

module.exports = mongoose.model('Restaurant', RestaurantSchema);