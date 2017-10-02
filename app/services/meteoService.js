var http = require('http');

var options = {
  host: '/http://www.infoclimat.fr/public-api/gfs/json?_ll=47.197995,-1.5568705&_auth=VU9SRVEvV3VQfQA3UyVWfwNrBjNZL1RzAHwHZFs%2BXyICaQBhUTEBZ1U7VyoDLFVjVHlTMAE6UmIHbFUtXS8HZlU%2FUj5ROlcwUD8AZVN8Vn0DLQZnWXlUcwBkB2dbKF89AmIAYlEsAWJVPFcrAzJVYFRvUywBIVJrB2FVMl02B21VMlIyUTdXPVA%2FAH1TfFZnAzkGMllkVG4AZQdkWzJfbQIwAGVRMwFlVT9XKwM6VWFUZ1M0AThSbgdtVTpdLwd7VU9SRVEvV3VQfQA3UyVWfwNlBjhZMg%3D%3D&_c=e6e8c2b873762cd1c3a13f860c94b184',
  port: 80,
  method: 'GET'
};

// Constructor
function MeteoService() {
  // always initialize all instance properties
  this.city = city;
}
// class methods
MeteoService.prototype.setCity = function() {
  this.city = city;
};
// class methods
MeteoService.prototype.display = function() {
 return this.city ;
};

MeteoService.prototype.getData(){
  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).end();
}
// export the class
module.exports = MeteoService;
