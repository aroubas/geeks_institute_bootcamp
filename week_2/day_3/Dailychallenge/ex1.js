class Video{
  constructor(title,uploader,time){
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch(){
    console.log (`${this.uploader} watched all ${this.time} minute of ${this.title}`)
  }
}

const newVideo = new Video("The dark knight","Mehdi",180);
newVideo.watch();

const video2 = new Video("inception","yassin",300);
video2.watch();

const library = [
  new Video("The Dark Knight", "Mehdi", 180),
  new Video("Inception", "Nolan", 150),
  new Video("Interstellar", "Cooper", 169),
  new Video("Tenet", "Protagonist", 150),
  new Video("Memento", "Leonard", 113)
];

const videoInstances = library.map(data => {
  return new Video(data.title, data.uploader, data.time);
});

videoInstances.forEach(vid => vid.watch());

