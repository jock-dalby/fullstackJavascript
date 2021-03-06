const playlist = new Playlist();

const Hello = new Song("Hello", "Adele", "2:54");
const Hello2 = new Song("Hello", "Lionel Richie", "3:54");

const manOfSteel = new Movie ("Man of Steel", 2013, "2:23:00");

playlist.add(Hello);
playlist.add(Hello2);

playlist.add(manOfSteel);

const playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

const playButton = document.getElementById("play");
playButton.onclick = function () {
  playlist.play();
  playlist.renderInElement(playlistElement);
}
const nextButton = document.getElementById("next");
nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);
}
const stopButton = document.getElementById("stop");
stopButton.onclick = function () {
  playlist.stop();
  playlist.renderInElement(playlistElement);
}
