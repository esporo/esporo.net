function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let stats = fetch('//cors-anywhere.herokuapp.com/www.spore.com/rest/stats')
.then(response => response.text())
.then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
.then((data) => {
  console.log("aqui");
  console.log(data);
  
  let totalUploads = formatNumber(data.querySelector('totalUploads').textContent),
      totalUsers = formatNumber(data.querySelector('totalUsers').textContent),
      dailyUploads = formatNumber(data.querySelector('dayUploads').textContent),
      dailyUsers = formatNumber(data.querySelector('dayUsers').textContent);
  
  document.querySelector('[data-total-uploads]').textContent = totalUploads;
  document.querySelector('[data-total-users]').textContent = totalUsers;
  document.querySelector('[data-daily-uploads]').textContent = dailyUploads;
  document.querySelector('[data-daily-users]').textContent = dailyUsers;
});

// $.ajax({
//   type: "GET",
//   url: "//cors-anywhere.herokuapp.com/https://www.spore.com/rest/stats/",
//   dataType: "xml",
//   success: function parse_stats(xml) {
//     var xml = $(xml);
// 
//     var totalUploads = xml.find('totalUploads').text(),
//         totalUsers = xml.find('totalUsers').text(),
//         dailyUploads = xml.find('dayUploads').text(),
//         dailyUsers = xml.find('dayUsers').text();
// 
//     totalUploads = format_number(totalUploads);
//     totalUsers = format_number(totalUsers);
//     dailyUploads = format_number(dailyUploads);
//     dailyUsers = format_number(dailyUsers);
// 
//     $('[data-stats-totalUploads]').text(totalUploads);
//     $('[data-stats-totalUsers]').text(totalUsers);
//     $('[data-stats-dayUploads]').text(dailyUploads);
//     $('[data-stats-dayUsers]').text(dailyUsers);
//   }
// });
