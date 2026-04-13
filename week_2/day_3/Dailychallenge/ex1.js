class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} minutes of ${this.title}`);
  }
}

const library = [
  new Video("The Dark Knight", "Mehdi", 180),
  new Video("Inception", "Nolan", 150),
  new Video("Interstellar", "Cooper", 169),
  new Video("Tenet", "Protagonist", 150),
  new Video("Memento", "Leonard", 113)
];

library.forEach(vid => vid.watch());