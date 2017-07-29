class Library{
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
  addPLaylist(playlist) {
    this.playlists.push(playlist);
  }
}

class Playlist {
  contructor(title) {
    this.title = title;
    this.tracks = [];
  }
  addTrack(track) {
    this.tracks.push(track);
  }
  overallRating(){
    let totalRating = 0;
    this.tracks.forEach((track) => {
      totalRating += track.rating;
    });
    return totalRating / this.tracks.length;
  }
  totalDuration(){
    let totalDuration = 0;
    this.tracks.forEach((track) => {
      totalDuration += track.length;
    });
    return totalDuration;
  }
}

class Track {
  contructor(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

const library1 = new Library('library1', 'Chris');

const playlist1 = new Playlist('playlist1');
const playlist2 = new Playlist('playlist2');
const playlist3 = new Playlist('playlist3');

const track1 = new Track('Baby Dont Dance', '3', 1820);
const track2 = new Track('No Culture', '4', 1870);
const track3 = new Track('Back In School', '4', 1640);
const track4 = new Track('Original Spin', '5', 1820);
const track5 = new Track('Free', '3', 1740);
const track6 = new Track('Ghosting', '4', 2880);
const track7 = new Track('Hayloft', '4', 1540);
const track8 = new Track('Body of Years', '5', 2800);
const track9 = new Track('Burning Pile', '3', 2640);
const track10 = new Track('Try to Change', '2', 2440);
const track11 = new Track('The Stand', '3', 1770);
const track12 = new Track('Simply Simple', '3', 2100);
const track13 = new Track('Touch Up', '3', 2330);
const track14 = new Track('Dirty Town', '4', 1540);
const track15 = new Track('The Stand', '3', 1770);

playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist1.addTrack(track4);
playlist1.addTrack(track5);

playlist2.addTrack(track6);
playlist2.addTrack(track7);
playlist2.addTrack(track8);
playlist2.addTrack(track9);
playlist2.addTrack(track10);

playlist3.addTrack(track11);
playlist3.addTrack(track12);
playlist3.addTrack(track13);
playlist3.addTrack(track14);
playlist3.addTrack(track15);

library1.addPlaylist(playlist1);
library1.addPlaylist(playlist2);
library1.addPlaylist(playlist3);

library1.playlists.forEach((playlist) => {
  console.log(playlist.title)
  console.log(`Average Rating: ${playlist.overallRating()}`);
  console.log(`Total Duration: ${playlist.totalDuration()}`);
});