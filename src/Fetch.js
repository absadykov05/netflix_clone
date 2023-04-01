import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setFilms } from './Redux/reducers/filmsReducer';

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
export const Fetch = (endpoint) => {
  const dispatch = useDispatch();
  console.log(4)
  return (
     axios
      .get(`${URL}${endPoints.endpoint}`, {
        params: {
          api_key: key,
        },
      })
      .then((res) => {
        dispatch(setFilms(res.data.results));
        console.log(5)
      })
      .catch((error) => console.log(error))
  )
}
