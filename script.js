var meineLinks = [
   "https://aisrtl-a.akamaihd.net/themenarchiv/hunde-bilder/738x0/hunde-t10427.jpg",
   "https://www.plantura.garden/wp-content/uploads/2020/01/rasenduenger-hunde-rasen-1024x683.jpg",
   "https://www.vol.at/2019/06/cat-3535404_1920-4-3-107017071280-1707x1280.jpg",
   "https://geliebte-katze.de/sites/geliebte-katze.de/files/katze-karton.jpg",
   "https://image.kuriermitschlag.at/images/cfs_landscape_616w_347h/1708872/46-56556459.jpg"
];



function bildGenerieren() {
  var index = Math.floor( Math.random() * meineLinks.length );
  console.log( meineLinks[index] );
  
  document.getElementById("hundebild").src = meineLinks[index];
}
