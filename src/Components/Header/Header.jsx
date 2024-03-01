import React, {useState, useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import search from '../../assets/search.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setHeaderIndex } from '../../Redux/reducers/filmsReducer';

export const Header = () => {
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const colorIndex = useSelector(state => state.films.headerIndex);
  const dispatch = useDispatch();
  const inputRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const setColorIndex = (i) => {
        dispatch(setHeaderIndex(i));
    }
    return (
    <div className={offset < 550 ? s.scroll_1 : s.scroll_2}>
      <div className={s.header}>
      <NavLink to = '/'>
        <img className={s.netflix_img} src = 'https://www.pngall.com/wp-content/uploads/4/Netflix-Official-Logo.png'/>
      </NavLink>
      <NavLink onClick={() => setColorIndex(1)} to = '/'>
        <div className={colorIndex == 1? s.routerName_colored : s.routerName}>Home</div></NavLink>
      <NavLink onClick={() => setColorIndex(2)} to = '/series'>
        <div className={colorIndex == 2? s.routerName_colored : s.routerName}>Series</div></NavLink>
      <NavLink onClick={() => setColorIndex(3)} to = '/films'>
        <div className={colorIndex == 3? s.routerName_colored : s.routerName}>Films</div></NavLink>
      <NavLink onClick={() => setColorIndex(4)} to = '/recent'>
        <div className={colorIndex == 4? s.routerName_colored : s.routerName}>Recent</div></NavLink>
      </div>
      <div className={s.header}>
        {isVisible? <Search ref = {inputRef}/> : <></>}
        <NavLink>
          <img className={s.search_img} src = {search} onClick={() => {setIsVisible(!isVisible); inputRef.current.focus()}}/>
          </NavLink>
        <NavLink to = '/login'>
        <img className = {s.profile_img} src = 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'/>
      </NavLink>
      </div>
    </div>
  )
}

const Search = (props) => {
const films = useSelector(state => state.films.originals)
const [text, setText] = useState('');
const [currentPath, setCurrentPath] = useState('');
const Search = () => {
  for(let i = 0; i < films.length; i ++) {
    if(films[i].original_title == text){
      setCurrentPath('https://image.tmdb.org/t/p/w300'+films[i].poster_path)
      break;
    } else if(i == films.length - 1 && films[i].original_title !== text){
      alert('not found')
    }
  }
}

const handleKeyDown = (event) => {
  if(event.key === 'Enter'){
    Search();
    console.log(props)
  }
}
  return <>
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <input ref = {props.ref} value = {text} onChange={(e) => setText(e.target.value)} onKeyDown={handleKeyDown}/>
    <button style = {{height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center'}}onClick={Search}>Search</button>
  </div>
  <img style = {{marginTop: 500, marginRight: 100,position: 'absolute', cursor: 'pointer'}} src = {currentPath}/>
  </>
}
