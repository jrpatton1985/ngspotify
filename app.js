const express              = require('express'),
      path                 = require('path'),
      bodyParser           = require('body-parser'),
      cors                 = require('cors'),
      SpotifyWebApi        = require('spotify-web-api-node');

var config = require('./config.js');
var spotifyApi = new SpotifyWebApi({
    clientId : config.client_id,
    clientSecret : config.client_secret
});

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
// Set static folder
app.use(express.static(path.join(__dirname, 'public')));
// body parser
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Some Text Endpoint Invalid');
});

app.get('/spotifytoken', (req, res) => {
    // retrieve and return spotify access token
    spotifyApi.clientCredentialsGrant()
          .then(function(data) {
            // console.log('The access token expires in ' + data.body['expires_in']);
            // console.log('The access token is ' + data.body['access_token']);

            // Save the access token so that it's used in future calls
            //spotifyApi.setAccessToken(data.body['access_token']);
            // Return token object
            res.json({token: data.body,
                      tokenStartTime: Date.now()});
          }, function(err) {
              console.log('Something went wrong when retrieving an access token', err.message);
          });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
