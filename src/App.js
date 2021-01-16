      import { useEffect, useState } from 'react';
      import './App.css';
      import Video from './Video'
      import Swiper, { Navigation,  } from 'swiper';
      import 'swiper/swiper-bundle.css';
      Swiper.use([Navigation, ]);

        function App() {

          const [loading,setload]=useState(null)
          const [data,setData]=useState(
          [
            {

              video:[],
              author:[],
              title:[]
            }]
          )


          
          useEffect(()=>{

            const mySwiper = new Swiper('.swiper-container', {
              loop: true,    
              spaceBetween: 830,
              direction: 'vertical',
              slidesPerView:1,
              speed:100,
              preloadImages: true,
              observer: true,
              observeParents: true,
              watchSlidesVisibility: true,
              watchSlidesProgress: true,
              
            })  
          
      
       
          },[])



                  useEffect(()=>{

                    async function fetchData(){        

                    const response= await fetch('https://www.reddit.com/r/tiktokcringe/.json')

                      const data= await response.json()     
                          const video = [] 
                          const author=[] 
                          const title=[]     
                          const mediaData= data.data.children

              try{
                
                for(var i =5; i< mediaData.length;i++){      
                        if(mediaData[i].data.media !== null )
                        video.push(mediaData[i].data.media)   
                        author.push(mediaData[i].data.author)       
                        title.push(mediaData[i].data.title)       

                      }    
                      setData(
                        [{
                            video:video,
                            author:author,
                            title:title,


                          }])          
                      setload(true)

                    }
                    
                  catch (err) {
                    console.log(err);
                  }
                }
                  fetchData()
          
                  },[])

            return (
            
            <div className="App">          
               <div id ='video-scroll'>
             {data.map(({video,author,title})=>{

                      return(  
                        <div className="swiper-container" >
                         <div className="swiper-wrapper">   
                         {video.map(((v, index) => 
                         <div className="swiper-slide" > 
                       {loading ?  <Video  className='lazy' source={v.reddit_video.fallback_url} /> : <p>Loading...</p>}
                         <p id='author'>@{author[index]}</p>
                         <p  id='title'>{ title[index].length < 30 ?title[index ]:title[index].substring(0,30)+'...' } </p>
          
                       </div>))}

                  </div>  
                   </div>

                  )
                  })} 
              </div> 

        </div>
        );
        }

    

      export default App;
