var googleAuth = require('./config/google_auth');
var nodemailerConfig = require('./config/nodemailer_config');

/* Step 1 */

// googleAuth.getAuthorizeUrl(function(err, url) {
// 	if(err) return console.log(err);
// 	console.log("Auth url is: ", url);
// });

/* Step 2 */

// googleAuth.getAccessToken(function(err, token) {
// 	if(err) return console.log(err);
// 	console.log("Auth token is: ", token);
// });

/* Step 3 */

// var message = {
// 	to: 'me@example.com',
// 	subject: 'Test Message',
// 	text: 'Congrats! You sent this email from your Node.js application, using your Gmail account with OAuth2!',
// 	html: '<h2>Congrats!</h2>'
// 		+ '<p>You sent this email from your Node.js application, using your Gmail account with OAuth2!</p>'
// };
// nodemailerConfig.gmailTransport.sendMail(message, function(err, info) {
// 	if(err) return console.log(err);
// 	console.log("Sent mail! Result: ", info);
// });