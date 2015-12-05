var express = require('express')
var app = express();
var middleware = {
	requireAuthentication : function(req, res, next){
		console.log('private route hit');
		next();
	},
	logger: function(req, resp, next) {
		console.log('Request: '+new Date().toString()+' '+req.method+' '+req.originalUrl);
		next();
	}
};
// Application level middleware
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about',middleware.requireAuthentication, function (req,res) {
	res.send('About me!')
});

app.use(express.static(__dirname+'/public'));
app.listen(3000, function(){
	console.log ('Express server started');
});