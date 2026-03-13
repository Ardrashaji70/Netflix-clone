import React,{ useEffect, useState } from 'react'
import  './Rowpost.css'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import YouTube from 'react-youtube'
import axios from '../../Axios'
function Rowpost(props) {
  const [movies, setmovies] = useState([])
  const [Urlid,setUrlid] = useState('')
  useEffect(() => {
    axios.get(props.Url).then(response =>{
       console.log(response.data)
      setmovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  } , [props.Url])
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handelmovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response =>{
      if(response.data.results.length !== 0){
        setUrlid(response.data.results[0])
      }else{
        console.log('Array empty')
      }
    })
    }

  return (
    <div className='row'>
       <h2>{props.title}</h2>
       <div className='posters'>
        {movies.map((obj)=>
        <img onClick={() => {handelmovie(obj.id)}} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.poster_path}`} alt='poster'/>
        )}
        </div>
      {Urlid && <YouTube  opts={opts} videoId={Urlid.key}/>}
    </div>
  )
}

export default Rowpost