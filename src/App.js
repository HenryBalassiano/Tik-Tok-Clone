import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video'
function App() {
  const [video,setVideo]=useState({

video1:'',
video2:'',
video3:'',
video4:'',
video5:'',
video6:'',
video7:'',
video8:'',
video9:'',
video10:'',
video11:'',
video12:'',




  })
  const [title,setTitle]=useState({
    title1:'',
    title2:'',
    title3:'',
    title4:'',
    title5:'',
    title6:'',
    title7:'',
    title8:'',
    title9:'',
    title10:'',
    title11:'',
    title12:'',


  })
  const [author,setAuthor]=useState({
    author1:'',
    author2:'',
    author3:'',
    author4:'',
    author5:'',
    author6:'',
    author7:'',
    author8:'',
    author9:'',
    author10:'',
    author11:'',
    author12:'',


  })





  useEffect(()=>{

    async function fetchData(){
      try{
     const response= await fetch('https://www.reddit.com/r/WatchPeopleDieInside/.json')
      const data= await response.json()
    setVideo(
      
{ video1:data.data.children[2].data.media.reddit_video.fallback_url,
  video2:data.data.children[3].data.media.reddit_video.fallback_url,
  video3:data.data.children[4].data.media.reddit_video.fallback_url,
  video4:data.data.children[5].data.media.reddit_video.fallback_url,
  video5:data.data.children[6].data.media.reddit_video.fallback_url,
  video6:data.data.children[7].data.media.reddit_video.fallback_url,
  video7:data.data.children[8].data.media.reddit_video.fallback_url,
  video8:data.data.children[9].data.media.reddit_video.fallback_url,
  video9:data.data.children[10].data.media.reddit_video.fallback_url,
  video10:data.data.children[11].data.media.reddit_video.fallback_url,
  video11:data.data.children[12].data.media.reddit_video.fallback_url,






}      
      
    )
   
   setAuthor(
     
    {author1:data.data.children[2].data.author,
      author2:data.data.children[3].data.author,
      author3:data.data.children[4].data.author,
      author4:data.data.children[5].data.author,
      author5:data.data.children[6].data.author,
      author6:data.data.children[7].data.author,
      author7:data.data.children[8].data.author,
      author8:data.data.children[9].data.author,
      author9:data.data.children[10].data.author,
      author10:data.data.children[11].data.author,
      author11:data.data.children[12].data.author,
      author12:data.data.children[12].data.author,


    
    })
setTitle({
  title1:data.data.children[2].data.title,
  title2:data.data.children[3].data.title,
  title3:data.data.children[4].data.title,
  title4:data.data.children[5].data.title,
  title5:data.data.children[6].data.title,
  title6:data.data.children[7].data.title,
  title7:data.data.children[8].data.title,
  title8:data.data.children[9].data.title,
  title9:data.data.children[10].data.title,
  title10:data.data.children[11].data.title,
  title11:data.data.children[12].data.title,
  title12:data.data.children[13].data.title,


  


})
    

    }
    
   catch (err) {
    console.log(err);
  }
}


    fetchData()
  })
  return (
    <div className="App">
      <div id ='video-scroll'>
      <Video  source={video.video1} title={title.title1} author={author.author1} />
      <Video source={video.video2} title={title.title2} author={author.author2} />
      <Video source={video.video5}title={title.title5} author={author.author5}/>
      <Video source={video.video6}title={title.title6} author={author.author6}/>
      <Video source={video.video7}title={title.title7} author={author.author7}/>
      <Video source={video.video8}title={title.title8} author={author.author8}/>
      <Video source={video.video9}title={title.title9} author={author.author9}/>
      <Video source={video.video10}title={title.title10} author={author.author10}/>
      <Video source={video.video11}title={title.title11} author={author.author11}/>




 

</div>
    </div>
  );
}

export default App;
