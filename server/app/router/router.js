const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {

    const userController = require('../controller/user.controller.js');
    const tradeMarketsController = require('../controller/trading.controller.js');
 
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], userController.signup);
	
	app.post('/api/auth/signin', userController.signin);
	
	app.get('/api/test/user', [authJwt.verifyToken], userController.userContent);
	
	app.get('/api/test/pm', [authJwt.verifyToken, authJwt.isPmOrAdmin], userController.managementBoard);
	
	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);
	
	app.get('/api/trading/markets', tradeMarketsController.getMarketsList);
}