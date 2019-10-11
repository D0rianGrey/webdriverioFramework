var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);


client 
    .init()
    .url('http://google.com.ua/')
    .setValue('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input','webdriverio')
    .end();