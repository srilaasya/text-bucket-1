function postcode() {
    var client = new WebTorrent();
    var file = new File([document.all('send').value], document.all('name').value);
    client.seed(file, function(torrent){ document.all('deliver').innerHTML = 'Shareable link:\nhttp://srilaasya.github.io/text-bucket/?' + torrent.infoHash });
  }
