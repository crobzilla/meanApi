# MeanApi
An application to demonstrate how Mongo, Express, and Node can be used together to create a simple RESTful API.  

# Dependencies
* Node.js  
* Npm  
* MongoDB 
  * Included at the root of the project is the file 'data.json', this data needs to be imported to Mongo.
  * To import the dataset into mongo issue the following command:
  * mongoimport --db restaurantData --collection restaurants --drop --file (pathToData.JsonFile)

# Usage
* cd app
* npm install  
* node server.js
* Verify the server is running @ http://localhost:8080/api/status

# Example  
* Access a resource @ http://localhost:8080/api/restaurants/40361322
