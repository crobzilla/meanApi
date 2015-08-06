/**
 * Created by crobinson on 7/7/15.
 */

var express     = require('express');        // call express
var Restaurant = require('./../models/Restaurant');
var restaurantService = require('./../services/restaurantService');
var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    // console.log(req);
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'MeanAPI' });
});

router.get('/status', function(req, res){
   res.json(
       {
           status: "Running",
           serverUpTime: process.uptime() + " seconds",
           processIdNum: process.pid,
           memoryUsage: process.memoryUsage(),
           platform: process.platform,
           nodeVersion: process.version
       }
   );
});

router.route('/restaurants')

    // create a restaurant (accessed at POST http://localhost:8080/api/restaurants)
    .post(function(req, res) {
        restaurantService.createRestaurant(req.body).then(function(restaurant){
            res.json(restaurant);
        },function(error){
            res.send(error);
        });
    })

    // get all the restaurants (accessed at GET http://localhost:8080/api/restaurants)
    .get(function(req, res) {
        restaurantService.getAllRestaurants().then(function(restaurants){
            res.json(restaurants);
        }, function(error){
            res.send(error);
        })
    });

router.route('/restaurants/:restaurant_id')

    // get the restaurant with that id (accessed at GET http://localhost:8080/api/restaurants/:restaurant_id)
    .get(function(req, res) {
        restaurantService.getRestaurantById(req.params.restaurant_id).then(function(restaurant){
            res.json(restaurant);
        }, function(error){
            res.send(error);
        });
    })

    // update the restaurant with this id (accessed at PUT http://localhost:8080/api/restaurants/:restaurant_id)
    .put(function(req, res) {
        restaurantService.updateRestaurant(req.params.restaurant_id, req.body).then(function(restaurant){
            res.json(restaurant);
        }, function(error){
            res.send(error);
        });
    })

    // delete the restaurant with this id (accessed at DELETE http://localhost:8080/api/restaurants/:restaurant_id)
    .delete(function(req, res) {
        Restaurant.remove({
            restaurant_id: req.params.restaurant_id
        }, function(err, restaurant) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;