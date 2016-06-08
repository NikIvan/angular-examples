var path = require('path');
var fs = require('fs');
var express = require('express');
var http = require('http');

var app = express();

var pathToStatic = path.join(__dirname, 'public');

app.use(express.static(pathToStatic));

app.all('*', (req, res, next) => {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log('Requested ' + req.method + ' ' + fullUrl + ' from ' + ip);
    next();
});

var pathToImages = path.join(__dirname, 'data', 'images', 'images.json');

app.get('/images', (req, res) => {
	var images = [];

	for(var i = 0; i < 20; i += 1) {
		var width = Math.round(200 + Math.random() * 200);
		var height = Math.round(150 + Math.random() * 200);
		
		var image = {
			url: 'http://lorempixel.com/' + width + '/' + height,
			title: width + 'x' + height
		};

		images.push(image);
	}

	return res.status(200).json(images);
});

app.listen(3030, () => {
	console.log('Server started');
});