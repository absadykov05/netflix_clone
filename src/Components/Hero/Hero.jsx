import axios from 'axios';
import React, {useState, useEffect} from 'react'
import s from './Hero.module.css'

export const Hero = () => {
  const [movie, setMovie] = useState([]);

  useEffect(()=> {
     axios('https://api.themoviedb.org/3/trending/all/week?api_key=224b7e885e36789d096afe2680dc09f5')
      .then((res) => {
        const heroMovie = res.data.results[Math.floor(Math.random()*(res.data.results.length -1))];
        setMovie(heroMovie);
        console.log(heroMovie);
        console.log(5);
      });
  }, [])
  
  return (
    <>
    <div className={s.main} style = {{backgroundSize: 'cover', backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`}}>
      <div className={s.movie_card}>
	     <div className={s.title}>
          {movie?.title || movie?.name || movie?.original_title}
       </div>
       <div className={s.description}>
          {movie.overview}
       </div>
       <div className={s.button}>
        <button>Play</button>
        <button>My List</button>
       </div>
       </div>
    </div>
    <div className={s.banner_bottom}></div>
    </>
  )
}