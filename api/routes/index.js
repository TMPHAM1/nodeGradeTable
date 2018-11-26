const tableRoutes = require('./table_routes');

module.exports = function (app, db) {
    tableRoutes(app,db);
}