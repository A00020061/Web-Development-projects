// let myMusic = new Audio('../music/song4.mp3');
// myMusic.play();
// function clickPage(){
//     let link = 'webyoutubeplaytrack.html';
//     window.location(link);
// }
// document.getElementById('songclick').onclick = function(){
//     location.href = 'webyoutubeplaytrack.html'
// }
let isplaying = false;
let btnplay = document.getElementById('play_btn');
btnplay.addEventListener('click',()=>{
    if(isplaying){
        pausesongs(audioId);
    }else{
        playsongs(audioId)
    };
});

function playsongs(audioId){
    isplaying = true;
    let audio = document.getElementById(audioId);
    // clickPage();
    audio.play();
    btnplay.style.display = 'block';
    btnplay.classList.replace('fa-play', 'fa-pause')


}
function pausesongs(audioId){
    isplaying = false;
    let audio = document.getElementById(audioId);
    audio.pause();
    btnplay.style.display = 'none';
    // audio.currentTime = 0;
    // btnplay.classList.replace('fa-pause', 'fa-play');
}

// const music = new Audio();
// // music.src='../music/song3.mp3'
// const playMusics = () =>{
//     music.play();
// }
// const pauseMusics = () =>{
//     music.pause();
// }




// const prebtn = document.getElementById('pre');
// const playbtn = document.getElementById('play');
// const nextbtn = document.getElementById('next');
// const music = document.getElementById(audioId);


// let isplaying = false;
// songindex = 0;
// const song = [{ name: 'song1' },
// { name: 'song2' },
// { name: 'song3' }];
// playbtn.addEventListener('click', () => {
//     if (isplaying) {
//         pauseMusic();
//     } else {
//         playMusic();
//     }
// });
// const playMusic = () => {
//     isplaying = true;
//     music.play();
//     playbtn.classList.replace('fa-play', 'fa-pause');
// };
// const playMusics = () =>{
//     music.play();
// }
// const pauseMusics = () =>{
//     music.pause();
// }
// const pauseMusic = () => {
//     isplaying = false;
//     music.pause();
//     playbtn.classList.replace('fa-pause', 'fa-play');
// };
// const songload = (song) =>{
//     music.src = '../music/' + song.name + './mp3';
// }
// const nextsong = () =>{
//     songindex = (songindex - 1) % song.length;
//     songload(song[songindex]);
//     playMusic();
// }
// const presong = () =>{
//     songindex = (songindex -1 + song.length) % song.length;
//     songload(song[songindex]);
//     playMusic();
// }
// nextbtn.addEventListener('click', nextsong);
// prebtn.addEventListener('click',presong);