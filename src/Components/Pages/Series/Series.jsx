import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import s from './Series.module.scss'
import { FilmList } from '../../FilmList'
import {Header} from '../../Header/Header'
import {Hero} from '../../Hero/Hero'


export const Series = () => {
  const films = useSelector(state => state.films);
  return (
    <>
    <Header/>
    <Hero/>
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
      </>
  )
}
