         var BaseService = require('./BaseService');



         userService = function(app) {
             this.app = app;
         };

         userService.prototype = new BaseService();

         userService.prototype.fetchData = function(res, callback) {

             // db interaction placed here

             callback(null, "Hi ,shubham .. Welcome To Ngcourse")
         }




         module.exports = function(app) {
             return new userService(app);
         };
