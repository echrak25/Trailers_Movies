import axios from 'axios'
import React, { Fragment, useEffect, useState ,useContext} from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import no_image from './no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
import '../Styles/Videos.css'
import { Container } from './NavBar'
import TrailerMovies from '../trailers/TrailerMovies'
import '../Styles/TrailerMovi.css'
import Test from './test'
function Movies() {
  const[movieTitle,setMovieTitle]=useState("")
  const [trailer,setTrailer]=useState(true)
  const {toggle,inputValue}=useContext(Container)
   const input=inputValue
  const [moviesData, setMoviesData] = useState([])
  const Shown =input ? 'search':'discover'
  const Images = "https://image.tmdb.org/t/p/w500"
  const Api = `https://api.themoviedb.org/3/${Shown}/movie`
  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '97e50f91f39a8298c4d9603b9462060d',
        query:input
      }
    })
    const results = data.data.results
    setMoviesData(results)
  }
  useEffect(() => {
    setTimeout(()=>{
      MovieCall()
    },100)
    
  },[input])
  const moviesTitle=(movie)=>{
    setMovieTitle(movie.name)
    setTrailer(!trailer)}
  return (
  //  <Test></Test>
    <Fragment>
   
      <div className={toggle? "mainBgColor" : "secondaryBgColor"}>
        <div className='movies-container'>
      {moviesData.map((movie) => {
        return (
          <Fragment>
          
            <div id={trailer ? 'container':"NoContainer"}>
              <AiFillPlayCircle color='#ee0077' fontSize={40} id={ trailer? 'playIcon':"hide"}onClick={()=>moviesTitle(movie)}  />
              <img  src={movie.poster_path ? `${Images}${movie.poster_path}`: no_image} alt=''onClick={()=>moviesTitle(movie)} />
              <h3 id={movie.title.length>28 ? "smaller-Text" :""}
              className={toggle? "DarkTheme":"LightThemeClose"}>{movie.title}</h3>
            </div>
          </Fragment>
          )
          })}
          {trailer ? console.log : <TrailerMovies moviesTitle={moviesTitle}/>}
          <AiOutlineClose id={trailer? "Nothing":"Exit1"} className={toggle? "#DarkTheme":"LightThemeClose"} onClick={()=>setTrailer(true)} cursor={'pointer'}
          color='#ee0077' fontSize={55}/>
          </div>
          </div>
          
    </Fragment>
  )
}

export default Movies