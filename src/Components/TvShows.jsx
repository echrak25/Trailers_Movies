import axios from 'axios'
import React, { Fragment, useEffect, useState ,useContext} from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import no_image from './no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
import '../Styles/Videos.css'
import { Container } from './NavBar'
function Tvshows() {
  const [trailer,setTrailer]=useState(true)
  const {toggle,inputValue}=useContext(Container)
   const input=inputValue
   const[title,setTitle]=useState("")
  const [showData, setShowsData] = useState([])
  const Shown =input ? 'search':'discover'
  const Images = "https://image.tmdb.org/t/p/w500"
  const Api = `https://api.themoviedb.org/3/${Shown}/tv`
  const TvShows = async () => {
    const data = await axios.get(Api, {
      params: {
        api_key: '97e50f91f39a8298c4d9603b9462060d',
        query:input
      }
    })
    const results = data.data.results
    setShowsData(results)
  }
  useEffect(() => {
    setTimeout(()=>{
      TvShows()
    },100 )
  },[input])
  const TvShowTitle=(shows)=>{
setTitle(shows.name)
setTrailer(!trailer)
  }
  return (
   
    <Fragment>
   
      <div className={toggle? "mainBgColor" : "secondaryBgColor"} >
        <div className='movies-container'>
      {showData.map((shows) => {
        return (
          <Fragment key={shows.id}>
             <div id={trailer ? 'container':"NoContainer"}>
              <AiFillPlayCircle color='#ee0077' fontSize={40} id={ trailer? 'playIcon':"hide"} onClick={()=>TvShowTitle(shows)} />
              <img src={shows.poster_path ? `${Images}${shows.poster_path}`: no_image} alt=''  onClick={()=>TvShowTitle(shows)}/>
              <h3 id={shows.name.length>28 ? "smaller-Text" :""}
              className={toggle? "DarkTheme":"LightThemeClose"}>{shows.name}</h3>
            </div>
          </Fragment>
          )
          })}
          <AiOutlineClose id={trailer? "Nothing":"Exit1"} className={toggle? "#DarkTheme":"LightThemeClose"} onClick={()=>setTrailer(true)} cursor={'pointer'}
          color='#ee0077' fontSize={55}/>
          </div>
          </div>
    </Fragment>
  )
}

export default Tvshows