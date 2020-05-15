function sendRequest(method, url, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           callback(JSON.parse(this.responseText));
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
  }
  /*
  function cdAge(data) {
    console.log(data)
        var sum = 0;
    data.CD.forEach(key => {
        var age = 2020 - key.YEAR;
        sum += age;
        
    console.log(`Starost albuma "${key.TITLE}" je ${age} godina/e`);
    });
    console.log(`--------------------------------------------------------------------`)
    console.log(`Prosjecna starost svih CD-ova je ${parseInt(sum / data.CD.length)} godina`);
    console.log(`--------------------------------------------------------------------`)
    console.log(`Albumi kronoloski poredani su : `)
    data.CD.sort((a,b) => a.YEAR - b.YEAR).map(key => console.log(`${key.TITLE} - ${key.YEAR}`));
    console.log(`--------------------------------------------------------------------`)

    var mapped = {};
    data.CD.forEach(key => {
        if(mapped[key.COUNTRY]) {
            mapped[key.COUNTRY] +=1;
        } else {
            mapped[key.COUNTRY] = 1;
        }
    });
    console.log(`Drzave koje se pojavljuju na vise od 3 CD-a su : `)
    for(var prop in mapped) {
        if(mapped[prop] > 3) {
            console.log(`${prop} - ${mapped[prop]}`);
        }
    }
    console.log(`--------------------------------------------------------------------`);

    var max = -Infinity;

    Object.keys(data.CD).forEach(key => {
        var broj = data.CD[key];

        if(max < broj.PRICE) {
            max = broj;
        }
        console.log(max)
    });
    
}
  sendRequest("GET", "https://output.jsbin.com/hugafagiwe/2.js", cdAge);

  */

function getMovies(data) {
    console.log(data);

var x = Object.values(data.movies).sort((a,b) => a.Year - b.Year).map(key => console.log(`${key.Title} - ${key.Year}`));
var sum = 0;
Object.values(data.movies).forEach(key => {
    var age = 2020 - key.Year;
    sum +=age;
})
console.log(`Prosjecna starost je ${sum / x.length}`)

















var actors = {};

Object.keys(data.movies).forEach(function(key) {
    var film = data.movies[key];

film.Actors.forEach(function(key) {
        if(!actors[key]) 
        actors[key] = 0;
        actors[key]++;
    });
});
Object.keys(actors).forEach(function(key) {
    var aktor = actors[key]
    if(aktor > 1) {
        console.log(key)
    }
})












}






  sendRequest('GET', "http://jsbin.com/funimefupo.js", getMovies)


  