import './App.css';
import React, { useRef,useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
                  function Video ({source,title,author}){
                        const [play, setPlay] = useState(false)
                        const [click, setClicked] = useState(false)
                        const [count, setCount] = useState()

                        const videoRef= useRef(null)
                        const audioRef= useRef(null)
                        const heart= useRef(false)
                        const playRef= useRef('')
                        
                        const clickFunc = () =>{
                              if(click === false){
                                    setClicked(true)
                                    setCount(1)
                              }
                              else{
                                    setClicked(false)
                                    setCount('')

                              }
                        }

                        const videoPress =()=>{     
                              
                              if(play ){
                              videoRef.current.pause()
                              audioRef.current.pause()

                              setPlay(false)               
                              playRef.current.style.display='block'     
                              

                           
                              
                              }else{
                                    videoRef.current.play()
                                    audioRef.current.play()

                                    setPlay(true)       
                                    playRef.current.style.display='none'     


                              }
                        
                  }
                        return(
                        <div id='video-container'>        
                        <img ref={playRef} id='play-btn' src= './play.png'  alt='play'/>
                        <img  id='logo' src= './logo.png'  alt='logo'/>
                        <div id='author-title'>
                        <p id='title' >{title}...</p>
                        <p id='author'>@{author}</p>
                        
                        </div>
                        <div id='ld'>
                        <IconButton id='icons' onClick={clickFunc}>
      {click ? <FavoriteIcon style={{ fontSize: '40px' }} />  :<FavoriteBorderIcon style={{ fontSize: '40px' }}/> }
    </IconButton>
                        <span id='like-count'>{count}</span>
</div>

                  <video  ref={videoRef} 

                  onClick={videoPress}
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