import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilmList } from '../../FilmList'
import axios from 'axios'
import { setOriginals, setTrending, setNowPlaying, setPopular, setTopRated, setUpComing } from '../../../Redux/reducers/filmsReducer'
import s from './Home.module.scss'
import {Header} from '../../Header/Header'
import {Hero} from '../../Hero/Hero'

const URL = "https://api.themoviedb.org/3";
const key = "224b7e885e36789d096afe2680dc09f5";

const endPoints = {
  trending: "/trending/all/week",
  originals: "/discover/movie",
  nowPlaying: "/movie/now_playing",
  popular: "/movie/popular",
  topRated: "/movie/top_rated",
  upComing: "/movie/upcoming",
};

export const Home = () => {
  const films = useSelector(state => state.films);
  const dispatch = useDispatch();
  const [isSorted, setSort] = useState(true)
  const [arr, setArr] = useState(films.originals);
  const bubbleSort = (array) => {
    let len = array.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        if (array[i].popularity > array[i + 1].popularity) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap elements
          swapped = true;
        }
      }
    } while (swapped);
    return array;
  };
  const handleSort = () => {
    setSort(!isSorted);
    const sortedArr = bubbleSort([...arr]);
    setArr(sortedArr);
    console.log(sortedArr)
  };


  useEffect(() => {
      axios
      .get(`${URL}${endPoints.originals}`, {
        params: {
          api_key: key,
        },
      })
      .then((res) => {
        dispatch(setOriginals(res.data.results))
      })

      axios
      .get(`${URL}${endPoints.trending}`, {
        params: {
          api_key: key,
        },
      })
      .then((res) => {
        dispatch(setTrending(res.data.results))
      })

      axios
      .get(`${URL}${endPoints.nowPlaying}`, {
        params: {
          api_key: key,
        },
      })
      .then((res) => {
        dispatch(setPopular(res.data.results))
      })

      axios
      .get(`${URL}${endPoints.popular}`, {
        params: {
          api_key: key,
        },
      })
      .then((res) => {
        dispatch(setTopRated(res.data.results))
      })

      axios
      .get(`${URL}${endPoints.topRated}`, {
        params: {
          api_key: key,
        },
      })
      .then((res) => {
        dispatch(setNowPlaying(res.data.results))
      })

      axios
      .get(`${URL}${endPoints.upComing}`, {
        params: {
          api_key: key,
        },
      })
      .then((res) => {
        dispatch(setUpComing(res.data.results))
      })
  }, []);
  return (
    <>
    <Header/>
    <Hero/>
    <div>
                <div className={s.text}>NETFLIX ORIGNALS</div>
        <div className={s.film_list}>
        <button onClick={handleSort}>Sort</button>
    {
      isSorted?
      films.originals.map(obj => {
        return (
          <FilmList key = {obj.id} path = {obj.poster_path}/>
        )
      })
      : arr.map(obj => {
        return (
          <FilmList key = {obj.id} path = {obj.poster_path}/>
        )
      })
    }
        </div>


        <div className={s.text}>TRENDING</div>
        <div className={s.film_list}>
          {
            films.trending.map(obj => {
              return (
                <FilmList key = {obj.id} path = {obj.poster_path}/>
              )
            })
          }
        </div>

        <div className={s.text}>NOW PLAYING</div>
        <div className={s.film_list}>
          {
            films.nowPlaying.map(obj => {
              return (
                  <FilmList key = {obj.id} path = {obj.poster_path}/>
              )
            })
          }
        </div>

        <div className={s.text}>POPULAR</div>
        <div className={s.film_list}>
          {
            films.popular.map(obj => {
              return (
                <FilmList key = {obj.id} path = {obj.poster_path}/>
              )
            })
          }
        </div>

        <div className={s.text}>TOP RATED</div>
        <div className={s.film_list}>
          {
            films.topRated.map(obj => {
              return (
                <FilmList key = {obj.id} path = {obj.poster_path}/>
              )
            })
          }
        </div>

        <div className={s.text}>UPCOMING</div>
        <div className={s.film_list}>
          {
            films.upComing.map(obj => {
              return (
                <FilmList key = {obj.id} path = {obj.poster_path}/>
              )
            })
          }
        </div>
      </div>
      </>
  )   
}

