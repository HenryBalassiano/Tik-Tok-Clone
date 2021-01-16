import './App.css';
import React, { useRef,useState,useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';




                        function useOnScreen(ref, rootMargin = '0px') {
                              const [isIntersecting, setIntersecting] = useState(false);
                        
                              useEffect(() => {
                              const observer = new IntersectionObserver(
                              ([entry]) => {
                                    setIntersecting(entry.isIntersecting);
                              },
                              {
                                    rootMargin
                              }
                              );
                              if (ref.current) {
                              observer.observe(ref.current);
                              }
                              return () => {
                              observer.unobserve(ref.current);
                              };
                              }, []); 
    
                              return isIntersecting;
                        }


                  function Video ({source}){
                        const [play, setPlay] = useState(false)
                        const [click, setClicked] = useState(false)
                        const [count, setCount] = useState()
                        const videoRef= useRef(null)
                        const audioRef= useRef(null)
                        const playRef= useRef('')
                        const ref = useRef();
                        const onScreen = useOnScreen(ref, '100px');


                        const clickFunc = () =>{
                              if(click === false){
                                    setClicked(true)
                                    setCount(1)
                              }
                              else{
                                    setClicked(false)
                                    setCount('')
                                    console.log(click)

                              }
                        }
                        useEffect(()=>{
                              if(onScreen === true){
                                    videoRef.current.play()
                                    audioRef.current.play()
                                    
                              }
                              else{
                                    videoRef.current.pause()
                                    audioRef.current.pause()   


                              }
                        })
                        const videoPlay = ()=>{
                          videoRef.current.play()
                          audioRef.current.play()

                        }
                        return(
                              
                        <div id='video-container'  ref={ref}>        
                        <img ref={playRef} id='play-btn' src= './play.png'  alt='play'/>
                        <h1  id='logo'> F</h1>
                        
                        
                        <div id='ld'>
                        <IconButton id='icons' onClick={clickFunc}>
      {click ? <FavoriteIcon style={{ fontSize: '40px' }} />  :<FavoriteBorderIcon style={{ fontSize: '40px' }}/> }
    </IconButton>
                        <span id='like-count'>{count}</span>
</div>

                  <video  ref={videoRef} 
                  onClick={videoPlay}
                        src={source}
                        type="video/mp4"
                        ></video>
                        <audio ref={audioRef}  >      
                        <source  src={ source&& source.slice(0,37)+'audio.mp4' }>
                              </source>
                              </audio>
                        </div>     
                        )


                  }
                  export default Video
