const path = require('path');

module.exports = {
  entry: {
	'Page1' : './javascript/Page1.js',
	'Page2' : './javascript/Page2.js',
	'Page3' : './javascript/Page3.js',
	'Page4' : './javascript/Page4.js',
	'Page5' : './javascript/Page5.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};