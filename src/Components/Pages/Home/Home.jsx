import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilmList } from '../../FilmList'
import axios from 'axios'
import { setOriginals, setTrending, setNowPlaying, setPopular, setTopRated, setUpComing } from '../../../Redux/reducers/filmsReducer'
import { NavLink } from 'react-router-dom'
import s from './Home.module.scss'

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
  console.log(films.originals)
  return (
    <div>
        <div className={s.text}>NETFLIX ORIGNALS</div>
        <div className={s.film_list}>
          {
            films.originals.map(obj => {
              return <FilmList key = {obj.id} path = {obj.poster_path}/>
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
  )   
}
