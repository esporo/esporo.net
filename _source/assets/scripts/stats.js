const data_url = 'https://esporo.net/stats.php';

fetch(data_url)
.then(resp  =>  resp.json())
.then(function(data) {
  append('totalUploads', data.totalUploads);
  append('totalUsers', data.totalUsers);
  append('dayUploads', data.dayUploads);
  append('dayUsers', data.dayUsers);
})
.catch(function(error) {
  console.log(error)
});

function append(element, value) {
  number = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  document.getElementById(element).innerHTML += number;
}
