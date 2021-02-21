function loaddoc(){
    var query = window.location.search.slice(1);
    if ( query != "" ) {
      var tmpa = "magnet:?xt=urn:btih:$HASH&dn=inetd.c&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com";
      query = tmpa.replace('$HASH', query);
     document.all('send').value = "// Loading...";
     var client = new WebTorrent();
      client.add(query, function (torrent) {
// Torrents can contain many files. Let's use the first.
var file = torrent.files[0]
document.all('srcfile').innerHTML = file.name;
document.all('forkbtn').innerHTML = 'Fork this Code'
document.all('name').value = file.name;
// Display the file by adding it to the DOM. Supports video, audio, image, etc. files
 var reader = new FileReader();
reader.addEventListener("loadend", function() {
 // reader.result contains the contents of blob as a typed array
document.all('send').value = reader.result;
});
        file.getBlob(function(err,blob) {
reader.readAsText(blob);
        })
        });
    }
  }