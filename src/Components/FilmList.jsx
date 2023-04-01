import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Pages/Home/Home.module.scss'

export const FilmList = ({id, path}) => {
  return (
    <NavLink key = {id} className={s.card} to = '/solo'>
                  <img className={s.img1} src = {`https://image.tmdb.org/t/p/w300${path}`}/>
    </NavLink>
  )
}
