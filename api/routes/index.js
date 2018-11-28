const tableRoutes = require('./table_routes'); //import the routes 

module.exports = function (app, db) {
    tableRoutes(app,db); // calls the different type of routes 
}