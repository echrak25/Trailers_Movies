import React,{Fragment,useState} from 'react'
import{HiSearch} from 'react-icons/hi'
import { NavLink, Route, Routes } from 'react-router-dom'
import '../Styles/NavBarStyle.css'
import Movies from './Movies'
import TvShows from './TvShows'
import Trends from './Trends'
import Pricing from './Pricing'
export const Container=react.createContext()
function NavBar() {
  const [toggle,setToggle]=useState(true)
  return (
    <Fragment>
    <nav className={toggle ?'':'navBarColor'}>
      <div className='nav-options'>
        <h1 id={toggle ?'':'heading'}> ECHRAKFLIX</h1>
        <NavLink to="" style={({isActive})=>{return {color:isActive ? '#ee0077':"#cab3e6" }}}><span id ={toggle ?'':'MoviesLight'}>Movies</span></NavLink>
        <NavLink to="/TvShows" style={({isActive})=>{return {color:isActive ? '#ee0077':"#cab3e6" }}}>
        <span id ={toggle ? "":'MoviesLight'}>Tv Shows</span></NavLink>
        <NavLink to="/Trends" style={({isActive})=>{return {color:isActive ? '#ee0077':"#cab3e6" }}}><span id ={toggle ?'':'MoviesLight'}>Trendings</span></NavLink>
       <NavLink to="/Pricing" style={({isActive})=>{return {color:isActive ? '#ee0077':"#cab3e6" }}}> <span id ={toggle ?'':'MoviesLight'}>Pricing</span></NavLink>
      </div>
      <div className='input-group'>
      <input type="text" placeholder="search"/>
<HiSearch fontSize={21} color="#021d28" id="search"/>
<div id='Color-switcher' onClick={()=>setToggle(!toggle)}>
  <div id={toggle ?'Color-switcher-mover':'Color-switcher-moved'}></div>
  </div>
</div>
    </nav>
    <Routes>
      <Route path="" element={<Movies/>}/>
      <Route path="TvShows" element={<TvShows/>}/>
      <Route path="Trends" element={<Trends/>}/>
      <Route path="Pricing" element={<Pricing/>}/>
    </Routes>
    </Fragment>
  )
}

export default NavBar