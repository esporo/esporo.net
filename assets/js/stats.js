function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let stats = fetch('//esporisticas.herokuapp.com/https://www.spore.com/rest/stats')
.then(response => response.text())
.then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
.then((data) => {  
  let totalUploads = formatNumber(data.querySelector('totalUploads').textContent),
      totalUsers = formatNumber(data.querySelector('totalUsers').textContent),
      dailyUploads = formatNumber(data.querySelector('dayUploads').textContent),
      dailyUsers = formatNumber(data.querySelector('dayUsers').textContent);
  
  document.querySelector('[data-total-uploads]').textContent = totalUploads;
  document.querySelector('[data-total-users]').textContent = totalUsers;
  document.querySelector('[data-daily-uploads]').textContent = dailyUploads;
  document.querySelector('[data-daily-users]').textContent = dailyUsers;
});
