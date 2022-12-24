import React,{Fragment,useState} from 'react'
import{HiSearch} from 'react-icons/hi'
import { NavLink, Route, Routes } from 'react-router-dom'
import '../Styles/NavBarStyle.css'
import Movies from './Movies'
import TvShows from './TvShows'
import Trendings from './Trendings'
import Pricing from './Pricing'
export const Container=React.createContext()
function NavBar() {
  const [toggle,setToggle]=useState(true)
  const [inputValue,setInputValue]=useState("")
  return (
    <Container.Provider value={{toggle,inputValue}}>
    <Fragment>
    <nav className={toggle ?'':'navBarColor'}>
      <div className='nav-options'>
        <h1 id={toggle ?'':'heading'}> ECHRAKFLIX</h1>
        <NavLink to="" style={({isActive})=>{return {color:isActive ? '#ee0077':"#cab3e6" }}}><span id ={toggle ?'':'MoviesLight'}>Movies</span></NavLink>
        <NavLink to="/TvShows" style={({isActive})=>{return {color:isActive ? '#ee0077':"#cab3e6" }}}>
        <span id ={toggle ? "":'MoviesLight'}>Tv Shows</span></NavLink>
        <NavLink to="/Trendings" style={({isActive})=>{return {color:isActive ? '#ee0077':"#cab3e6" }}}><span id ={toggle ?'':'MoviesLight'}>Trendings</span></NavLink>
       <NavLink to="/Pricing" style={({isActive})=>{return {color:isActive ? '#ee0077':"#cab3e6" }}}> <span id ={toggle ?'':'MoviesLight'}>Pricing</span></NavLink>
      </div>
      <div className='input-group'>
    <input type="text" placeholder="search" onChange={(e)=>{setInputValue(e.target.value)}}/>
<HiSearch fontSize={21} color="#021d28" id="search"/>
<div id='Color-switcher' onClick={()=>setToggle(!toggle)}>
  <div id={toggle ?'Color-switcher-mover':'Color-switcher-moved'}></div>
  </div>
</div>
    </nav>
    <Routes>
      <Route path="" element={<Movies/>}/>
      <Route path="TvShows" element={<TvShows/>}/>
      <Route path="Trendings" element={<Trendings/>}/>
      <Route path="Pricing" element={<Pricing/>}/>
    </Routes>
    </Fragment>
    </Container.Provider>
  )
}

export default NavBar