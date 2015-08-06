# MeanApi
An application to demonstrate how Mongo, Express, and Node can be used together to create a simple RESTful API.  

# Dependencies
* Node.js  
* Npm  
* MongoDB 
  * Included at the root of the project is the file 'data.json', this data needs to be imported to Mongo.
  * To import the dataset into mongo issue the following command:
  * mongoimport --db meanApi --collection restaurants --drop --file (pathToData.JsonFile)

# Usage
* cd app
* npm install  
* node server.js  
