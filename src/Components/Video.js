import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function Video({ source }) {
  const [click, setClicked] = useState(false);
  const [count, setCount] = useState();
  const [canPlays, setCanPlay] = useState(false);
  console.log(canPlays);
  const videoRef = useRef();
  const audioRef = useRef(false);
  const playRef = useRef(false);
  const ref = useRef();
  const navSec = useRef(null);

  const onScreen = useOnScreen(ref);
  const debouncedSearchTerm = useDebounce(onScreen, 400);

  const clickFunc = () => {
    if (click === false) {
      setClicked(true);
      setCount(1);
    } else {
      setClicked(false);
      setCount("");
      console.log(click);
    }
  };
  const canPlay = (e) => {
    setCanPlay(true);
  };

  useEffect(() => {
    if (debouncedSearchTerm === true && canPlays === true) {
      audioRef.current.currentTime = videoRef.current.currentTime;
      videoRef.current.play();
      audioRef.current.play();

      playRef.current.style.display = "none";
    }
  });

  const videoPlay = () => {
    if (
      videoRef.current.paused === false &&
      audioRef.current.paused === false
    ) {
      videoRef.current.pause();
      audioRef.current.pause();
      playRef.current.style.display = "block";
    } else {
      videoRef.current.play();
      audioRef.current.play();
      playRef.current.style.display = "none";
    }
  };
  return (
    <div id="video-container" ref={ref}>
      <img ref={playRef} id="play-btn" src="./play.png" alt="play" />

      <h1 id="logo"> F</h1>

      <div id="ld">
        <IconButton id="icons" onClick={clickFunc}>
          {click ? (
            <FavoriteIcon style={{ fontSize: "40px" }} />
          ) : (
            <FavoriteBorderIcon style={{ fontSize: "40px" }} />
          )}
        </IconButton>
        <span id="like-count">{count}</span>
      </div>
      {debouncedSearchTerm ? (
        <video
          ref={videoRef}
          onClick={videoPlay}
          width="450"
          height="900"
          src={source.substring(0, 32) + "DASH_480.mp4?source=fallback"}
          type="video/mp4"
          preload="auto"
          onCanPlayThrough={canPlay}
          playsinline
        />
      ) : (
        <div>Loading...</div>
      )}
      {debouncedSearchTerm ? (
        <audio ref={audioRef}>
          <source src={source && source.slice(0, 37) + "audio.mp4"} />
        </audio>
      ) : (
        console.log("audio element is loading")
      )}
    </div>
  );
}
export default Video;
