function format_number(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

$.ajax({
  type: "GET",
  url: "//esporisticas.herokuapp.com/https://www.spore.com/rest/stats/",
  dataType: "xml",
  success: function parse_stats(xml) {
    var xml = $(xml);

    var totalUploads = xml.find('totalUploads').text(),
        totalUsers = xml.find('totalUsers').text(),
        dailyUploads = xml.find('dayUploads').text(),
        dailyUsers = xml.find('dayUsers').text();

    totalUploads = format_number(totalUploads);
    totalUsers = format_number(totalUsers);
    dailyUploads = format_number(dailyUploads);
    dailyUsers = format_number(dailyUsers);

    $('[data-stats-totalUploads]').text(totalUploads);
    $('[data-stats-totalUsers]').text(totalUsers);
    $('[data-stats-dayUploads]').text(dailyUploads);
    $('[data-stats-dayUsers]').text(dailyUsers);
  }
});
