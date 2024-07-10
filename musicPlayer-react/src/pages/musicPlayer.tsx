import styles from '@/styles/musicPlayer.module.less'
import { useState, useEffect, useRef } from 'react'

const MusicPlayer = () => {
  const [isPlay, setIsPlay] = useState(false)
  const [curMusic, setCurMusic] = useState({})
  const [curProgress, setCurProgress] = useState('0')
  const audio = useRef(null)
  const playSong = () => {
    isPlay ? audio.current.pause() : audio.current.play()
    setIsPlay(!isPlay)
  }

  const queryMusic = async (cmd: 'pre' | 'next' | 'cur') => {
    let res = await fetch('/api/queryMusic', {
      method: 'POST',
      body: JSON.stringify({ cmd })
    })
    res = await res.json()
    console.log(res);
    cmd !== 'cur' && setIsPlay(true) // 开始时不播放

    setCurMusic(res)
    setTimeout(() => {
      // react重新渲染时，会有获取不到dom的bug...
      audio.current.play()
    });
  }
  const updateProgress = (e) => {
    const {
      duration,
      currentTime
    } = e.target

    const progressPercent = (currentTime / duration) * 100 // 当前播放时长 / 音频总时长
    setCurProgress(`${progressPercent}%`)
  }
  const setProgress = (e) => {
    const width = document.getElementById('progressContainer').clientWidth
    const clickX = e.nativeEvent.offsetX
    const duration = audio.current.duration // 当前音频的总时长 
    audio.current.currentTime = (clickX / width) * duration // 设置音频播放位置
  }
  useEffect(() => {
    queryMusic('cur')
  }, [])
  return (
    <div
      className={
        `
      ${styles.musicContainer}
      ${isPlay ? styles.isPlay : ''}
      `
      }
    >
      <div className={styles.musicInfo}>
        <div className={styles.musicTitle}>{curMusic.title}</div>
        <div className={styles.progressContainer} id="progressContainer" onClick={(e) =>setProgress(e)}>
          <div className={styles.progress} style={{ width: curProgress }}></div>
        </div>
      </div>
      <div className={styles.musicCover}>
        <img src={curMusic.cover} alt="" />
      </div>
      <div className={styles.musicContrals}>
        <div className={styles.actionBtn} onClick={() => queryMusic('pre')}>
          <i className="fas fa-backward"></i>
        </div>
        <div className={`${styles.actionBtn} ${styles.actionBtnBig}`} onClick={playSong}>
          <i className={`fas ${isPlay ? 'fa-pause' : 'fa-play'}`}></i>
        </div>
        <div className={styles.actionBtn} onClick={() => queryMusic('next')}>
          <i className="fas fa-forward"></i>
        </div>
      </div>
      <audio
        ref={audio}
        src={curMusic.link}
        onTimeUpdate={updateProgress}
        onEnded={() => queryMusic('next')}
      />
    </div>
  )
}

export default MusicPlayer