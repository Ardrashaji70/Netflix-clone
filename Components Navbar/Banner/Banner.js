import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../Axios'

function Banner() {
   
  const [play, setPlay] = useState(false);

  const playMovie = () => {
    alert("Playing movie...");
  };

  const addToList = () => {
    alert("Added to My List");
  };
 
  const [movie, setMovie] = useState();
  useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log(response.data.results[0]);
        setMovie(response.data.results[ Math.floor(Math.random() * response.data.results.length)]);
      })
  }, [])

  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
    className='banner'>
     
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_buttons'>
                <button className='button' onClick={() => {
                  setPlay(true);
                  playMovie();
                }}>Play</button>
                {play && (
                  <video width="600" controls autoPlay>
                  <source src="/movie.mp4" type="video/mp4" />
                  </video>
                  )}
                <button className='button' onClick={addToList}>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottam">
          
        </div>
    </div>
  )
}

export default Banner