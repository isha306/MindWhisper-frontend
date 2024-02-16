import { useRef, useState } from 'react';
import './Music.css';
import { useEffect } from 'react';

function Music() {

  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Supne',
    songArtist: ' Akhil',
    songSrc: 'src/assets/Supne.mp3',
    songAvatar: 'src/assets/pic 2.jpg'
  })

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');
  const [videoIndex, setVideoIndex] = useState(0)

  const currentAudio = useRef()

  const handleMusicProgressBar = (e)=>{
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  //Change Avatar Class
  let avatarClass = ['objectFitCover','objectFitContain','none']
  const [avatarClassIndex, setAvatarClassIndex] = useState(0)
  const handleAvatar = ()=>{
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0)
    }else{
      setAvatarClassIndex(avatarClassIndex + 1)
    }
  }


  //Play Audio Function
  const handleAudioPlay = ()=>{
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true)
    }else{
      currentAudio.current.pause();
      setIsAudioPlaying(false)
    }
  }

  const musicAPI = [
    {
      songName: 'Supne',
      songArtist: ' Akhil',
      songSrc: 'src/assets/Supne.mp3',
      songAvatar: 'src/assets/pic 2.jpg'
    },
    {
      songName: 'Faasle',
      songArtist: 'Aditya Rikhari  ',
      songSrc: 'src/assets/Faasle.mp3',
      songAvatar:'src/assets/pic 3.jpg'
    },
    {
      songName: 'Insane',
      songArtist: '	Ap Dhillon',
      songSrc: 'src/assets/Insane.mp3',
      songAvatar: 'src/assets/pic 1.jpg'
    },
    {
      songName: 'Teriyaan Deedaan',
      songArtist: '	Prabh Gill',
      songSrc: 'src/assets/Teriyaan Deedaan.mp3',
      songAvatar: 'src/assets/pic 5.jpg'
    },
    {
      songName: 'Tamanna',
      songArtist: ' Javed Ali,Jojo',
      songSrc: 'src/assets/Aa-Jao-Meri-Tamanna.mp3',
      songAvatar: 'src/assets/pic 6.jpg'
    },
    {
      songName: 'Teri-Kami',
      songArtist: '	Akhil',
      songSrc: 'src/assets/Teri-Kami.mp3',
      songAvatar: 'src/assets/pic 7.jpg'
    }
  ]

  const handleNextSong = ()=>{
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const handlePrevSong = ()=>{
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }else{
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const updateCurrentMusicDetails = (number)=>{
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songSrc: musicObject.songSrc,
      songAvatar: musicObject.songAvatar
    })
    setIsAudioPlaying(true);
  }
  const handleAudioUpdate = ()=>{
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes <10 ? `0${minutes}` : minutes} : ${seconds <10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin <10 ? `0${currentMin}` : currentMin} : ${currentSec <10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress)? 0 : progress)
  }


  const vidArray = ['src/assets/video 1.mp4','src/assets/video 2.mp4','src/assets/video 3.mp4','src/assets/video 4.mp4',
'src/assets/video 5.mp4','src/assets/video 5.mp4','src/assets/video 6.mp4'];

  const handleChangeBackground = ()=>{
    if (videoIndex >= vidArray.length - 1) {
      setVideoIndex(0);
    }else{
      setVideoIndex(videoIndex + 1)
    }
  }
  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])

  return (
    <>
    <div >
    <div className="container  h-full w-full ">
      <audio src='src/assets/Supne.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
      <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo h-full w-full '></video>
      
      <div className="music-Container mb-20 h-90 w-80">
        <p className='musicPlayer'>Music Player</p>
        <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
        <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
        <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
        <div className="musicTimerDiv">
          <p className='musicCurrentTime'>{musicCurrentTime}</p>
          <p className='musicTotalLenght'>{musicTotalLength}</p>
        </div>
        <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
        <div className="musicControlers">
          <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
          <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
          <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
        </div>
      </div>
      <div className="changeBackBtn" onClick={handleChangeBackground}>
        Change Background
      </div>
    </div>
    </div>
    </>
  );
}

export default Music;
  