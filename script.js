fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(json => console.log(json.results))