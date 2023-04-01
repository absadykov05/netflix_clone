import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './Series.module.scss';
import { FilmList } from '../../FilmList'
import axios from 'axios'
import { setOriginals, setTrending, setNowPlaying, setPopular, setTopRated, setUpComing } from '../../../Redux/reducers/filmsReducer'
import { NavLink } from 'react-router-dom'


export const Series = () => {
  const films = useSelector(state => state.films);
  const dispatch = useDispatch();
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
