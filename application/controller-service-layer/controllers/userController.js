       module.exports = function() {
           var fetchData = function(req, res, callback) {

               this.services.userService.fetchData(res, callback);
           }



           return {
               fetchData: fetchData,

           }
       };
