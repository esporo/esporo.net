$.ajax({
  url: "http://www.spore.com/rest/stats",
  cache: false,
  dataType: "xml",
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  },
  headers: {
    "accept": "application/xml",
    "Access-Control-Allow-Origin":"*"
  },
  success: function(xml, status){
    totalUploads = xml.find('totalUploads').text(),
    totalUsers = xml.find('totalUsers').text(),
    dayUploads = xml.find('dayUploads').text(),
    dayUsers = xml.find('dayUsers').text();

    $('#totalUploads').text(totalUploads);
  }
});
