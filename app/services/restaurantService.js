/**
 * Created by crobinson on 7/9/15.
 */

var Restaurant  = require('./../models/Restaurant');
var Q           = require('q');

/**
 * Create a new Restaurant entry in meanApi.restaurants mongo collection
 *
 * @param model the data to use to construct the Restaurant object
 * @returns {Q.promise}
 */
var createRestaurant = function(model){

    console.log("Creating new restaurant");

    var deferred = Q.defer();
    var restaurant = new Restaurant();
    restaurant.name = model.name;

    restaurant.save(function(err) {
        if (err){
            deferred.reject(err);
        }
        else{
            deferred.resolve(restaurant);
        }
    });

    return deferred.promise;

};

/**
 * Get all the restaurants stored in the meanApi.restaurants mongo collection
 *
 * @returns {Q.promise}
 */
var getAllRestaurants = function(){

    console.log("Getting all restaurants");

    var deferred = Q.defer();

    Restaurant.find(function(error, restaurants) {
        if (error){
            deferred.reject(error);
        }
        else{
            deferred.resolve(restaurants);
        }
    });

    return deferred.promise;
};

/**
 * Get a restaurant by a specified ID
 *
 * @param restaurantId the id of the restaurant
 * @returns {Q.promise}
 */
var getRestaurantById = function(restaurantId){

    console.log("Getting restaurant by Id");

    var deferred = Q.defer();

    Restaurant.find({
        restaurant_id: restaurantId
    }, function(error, restaurant) {
        if (error){
            deferred.reject(error);
        }
        else{
            deferred.resolve(restaurant);
        }
    });

    return deferred.promise;
};

/**
 * Update a restaurant specified by ID with the newly updated data
 *
 * @param restaurantId the id of the restaurant to update
 * @param updatedRestaurant the new data to update the restaurant with
 * @returns {Q.promise}
 */
var updateRestaurant = function(restaurantId, updatedRestaurant){

    console.log("Updating restaurant");

    var deferred = Q.defer();

    Restaurant.findOneAndUpdate({
        "restaurant_id": restaurantId
    },{
        "$set": {
            "name": updatedRestaurant.name
        }
    }, function(error, restaurant){
        if(error){
            deferred.reject(error);
        }
        else{
            deferred.resolve(restaurant);
        }
    });

    return deferred.promise;
};

var deleteRestaurant = function(){
    console.log("testing");
};

module.exports = {
    createRestaurant: createRestaurant,
    getAllRestaurants: getAllRestaurants,
    getRestaurantById: getRestaurantById,
    updateRestaurant: updateRestaurant,
    deleteRestaurant: deleteRestaurant
};