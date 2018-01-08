	module.exports = function(app) {
	    var controllers = app.controllers,
	        views = app.views;

	    return {

	        "/api/v1/userapi/fetchData": [{
	            method: "GET",
	            action: app.controllers.userController.fetchData,
	            middleware: [],
	            views: {
	                json: views.jsonView
	            }
	        }],


	    };
	};
