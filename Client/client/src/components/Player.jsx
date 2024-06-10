import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaCompress, FaExpand } from "react-icons/fa6";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import CommentList from './CommentList';
import AddComment from './AddComment';
import LikeButton from './LikeButton';
import '../styles/styles.css';

const Player = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;

      // Update duration when metadata is loaded
      const updateDuration = () => setDuration(videoElement.duration);
      videoElement.addEventListener('loadedmetadata', updateDuration);

      // Update currentTime during playback
      const updateTime = () => setCurrentTime(videoElement.currentTime);
      videoElement.addEventListener('timeupdate', updateTime);

      // Clean up event listeners on unmount
      return () => {
        videoElement.removeEventListener('loadedmetadata', updateDuration);
        videoElement.removeEventListener('timeupdate', updateTime);
      };
    }
  }, [video]);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement.paused) {
      videoElement.play();
      setIsPlaying(true);
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const videoElement = videoRef.current;
    videoElement.muted = !isMuted;
    setIsMuted(!isMuted);
    if (isMuted) {
      videoElement.volume = volume;
    } else {
      videoElement.volume = 0;
    }
  };

  const handleVolumeChange = (event) => {
    const volume = parseFloat(event.target.value);
    setVolume(volume);
    videoRef.current.volume = volume;
    setIsMuted(volume === 0);
  };

  const toggleFullscreen = () => {
    const videoElement = videoRef.current;
    if (!isFullscreen) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  const handleSeek = (event) => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const seekTo = (event.target.value / 100) * videoElement.duration;
      videoElement.currentTime = seekTo;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="player-container">
      <h1 className="video-title">{video.title}</h1>
      <div className="video-wrapper">
        <video ref={videoRef} className="video-element" src={video.src} controls={false}></video>
        {!isPlaying && (
          <div className="video-overlay" onClick={handlePlayPause}>
            <FaPlay className="overlay-play-icon" />
          </div>
        )}
        <div className="controls-container">
          <button onClick={handlePlayPause} className="control-button">
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
            className="seek-slider"
          />
          <button onClick={toggleMute} className="control-button">
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            onMouseEnter={() => setShowSlider(true)}
            onMouseLeave={() => setShowSlider(false)}
          />
          <button onClick={toggleFullscreen} className="control-button">
            {isFullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          <div className="time-display">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>
      </div>
      <div className="video-info">
        <h2>{video.subtitle}</h2>
        <p>{video.description}</p>
        <LikeButton videoId={video.title} />
        <CommentList videoId={video.title} />
        <AddComment videoId={video.title} />
      </div>
    </div>
  );
};

export default Player;