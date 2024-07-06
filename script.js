console.log("welcome to Music Player");

//Initializing songs variables
let songIndex = 0;
let audioElement = new Audio('1.mpeg');
let masterPlay = document.getElementById('master');
let myProgressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Arcade", filePath: "1.mpeg", coverPath: "pictures/music.gif"},
    {songName: "Night Changes", filePath: "2.mpeg", coverPath: "pictures/music.gif"},
    {songName: "Calm Down", filePath: "3.mpeg", coverPath: "pictures/music.gif"},
    {songName: "Left And Right", filePath: "4.mpeg", coverPath: "pictures/music.gif"},
    {songName: "Let Me Down Slowly", filePath: "5.mpeg", coverPath: "pictures/music.gif"},
    {songName: "My Universe", filePath: "6.mpeg", coverPath: "pictures/music.gif"},
    {songName: "One Dance", filePath: "7.mpeg", coverPath: "pictures/music.gif"},
    {songName: "We Don't Talk Anymore", filePath: "8.mpeg", coverPath: "pictures/music.gif"}
];

songItem.forEach((element, i) => {
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

//handle song play
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update progress bar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= 7){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mpeg`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})