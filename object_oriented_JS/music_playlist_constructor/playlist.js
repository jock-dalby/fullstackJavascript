function Playlist() {
  this.songs = [];
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song)
};

Playlist.prototype.play = function() {
  const currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function(){
  const currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  if (this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderInElement = function(list) {
  console.log(list)
  list.innerHTML = "";
  this.songs.forEach(function (song) {
    list.innerHTML += song.toHTML();
  })
};
