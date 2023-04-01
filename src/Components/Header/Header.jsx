import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import search from '../../assets/search.svg'

export const Header = () => {
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
    <div className={offset < 550 ? s.scroll_1 : s.scroll_2}>
      <div className={s.header}>
      <NavLink to = '/'>
        <img className={s.netflix_img} src = 'https://www.pngall.com/wp-content/uploads/4/Netflix-Official-Logo.png'/>
      </NavLink>
      <NavLink to = '/'><div className={s.routerName}>Home</div></NavLink>
      <NavLink to = '/series'><div className={s.routerName}>Series</div></NavLink>
      <NavLink to = '/'><div className={s.routerName}>Films</div></NavLink>
      <NavLink to = '/'><div className={s.routerName}>Recent</div></NavLink>
      </div>
      <div className={s.header}>
        <NavLink to = '/search'>
        <img className={s.search_img} src = {search}/>
        </NavLink>
        <NavLink to = '/login'>
        <img className = {s.profile_img} src = 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'/>
      </NavLink>
      </div>
    </div>
  )
}
